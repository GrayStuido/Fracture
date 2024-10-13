document.addEventListener('DOMContentLoaded', () => {
    const bgUpload = document.getElementById('bg-upload');
    const clearBg = document.getElementById('clear-bg');
    const applyBg = document.getElementById('apply-bg');
    const settingsButtons = document.querySelectorAll('.dropdown-settings button');
    const blurSlider = document.getElementById('blur-slider');
    const blurValue = document.getElementById('blur-value');
    let savedBgSettings = {};
    
    const SETTINGS_KEY = 'bgSettings';
    let db;

    // Initialize storage
    function initStorage() {
        return new Promise((resolve) => {
            if (typeof localStorage !== 'undefined') {
                try {
                    const localData = localStorage.getItem(SETTINGS_KEY);
                    if (localData) {
                        savedBgSettings = JSON.parse(localData);
                        resolve('localStorage');
                        return;
                    }
                } catch (e) {
                    console.warn('localStorage access denied:', e);
                }
            }

            const request = indexedDB.open("BackgroundSettingsDB", 1);
            request.onupgradeneeded = (event) => {
                db = event.target.result;
                db.createObjectStore("settings", { keyPath: "id" });
            };
            request.onsuccess = (event) => {
                db = event.target.result;
                loadSettingsFromIndexedDB().then(() => resolve('indexedDB'));
            };
            request.onerror = () => resolve('memory');
        });
    }

    function loadSettingsFromIndexedDB() {
        return new Promise((resolve) => {
            const transaction = db.transaction(["settings"], "readonly");
            const objectStore = transaction.objectStore("settings");
            const request = objectStore.get(SETTINGS_KEY);
            request.onsuccess = (event) => {
                if (event.target.result) {
                    savedBgSettings = event.target.result.data;
                }
                resolve();
            };
            request.onerror = () => resolve();
        });
    }

    function saveSettings(settings) {
        savedBgSettings = settings;
        if (typeof localStorage !== 'undefined') {
            try {
                localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
            } catch (e) {
                console.warn('Error saving to localStorage:', e);
            }
        }
        if (db) {
            const transaction = db.transaction(["settings"], "readwrite");
            const objectStore = transaction.objectStore("settings");
            objectStore.put({ id: SETTINGS_KEY, data: settings });
        }
    }

    const backgroundContainer = (() => {
        let container = document.getElementById('background-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'background-container';
            Object.assign(container.style, {
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                zIndex: '-1'
            });
            document.body.insertBefore(container, document.body.firstChild);
        }
        return container;
    })();

    function clearBackgroundStyles() {
        Object.assign(backgroundContainer.style, {
            backgroundImage: '',
            backgroundSize: '',
            backgroundPosition: '',
            backgroundRepeat: '',
            filter: ''
        });
    }

    function applyBackgroundSettings(settings) {
        clearBackgroundStyles();
        if (settings.url) {
            backgroundContainer.style.backgroundImage = `url(${settings.url})`;
            switch (settings.position) {
                case 'fit':
                    fitToPage(settings.url);
                    break;
                case 'stretch':
                    backgroundContainer.style.backgroundSize = '100% 100%';
                    break;
                case 'tiles':
                    backgroundContainer.style.backgroundSize = 'auto';
                    backgroundContainer.style.backgroundRepeat = 'repeat';
                    break;
                case 'fit-centered':
                    Object.assign(backgroundContainer.style, {
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    });
                    break;
                default:
                    Object.assign(backgroundContainer.style, {
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    });
            }
        }
        if (settings.blur !== undefined) {
            backgroundContainer.style.filter = `blur(${settings.blur}px)`;
            blurSlider.value = settings.blur;
            blurValue.textContent = settings.blur;
        }
    }

    function fitToPage(imageUrl) {
        if (!imageUrl) return;
        const img = new Image();
        img.onload = () => {
            const imgRatio = img.width / img.height;
            const windowRatio = window.innerWidth / window.innerHeight;
            Object.assign(backgroundContainer.style, {
                backgroundSize: imgRatio > windowRatio ? 'auto 100%' : '100% auto',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            });
        };
        img.src = imageUrl;
    }

    initStorage().then((storageType) => {
        console.log(`Using ${storageType} for background settings`);
        applyBackgroundSettings(savedBgSettings);
    });

    bgUpload.addEventListener('change', () => {
        const file = bgUpload.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                savedBgSettings.url = e.target.result;
                savedBgSettings.filePath = file.name;
                saveSettings(savedBgSettings);
                applyBackgroundSettings(savedBgSettings);
            };
            reader.readAsDataURL(file);
        }
    });

    clearBg.addEventListener('click', () => {
        clearBackgroundStyles();
        savedBgSettings = {};
        saveSettings(savedBgSettings);
        blurSlider.value = 0;
        blurValue.textContent = '0';
    });

    applyBg.addEventListener('click', () => {
        const activeButton = document.querySelector('.dropdown-settings button.active');
        if (activeButton) {
            savedBgSettings.position = activeButton.dataset.bgImage || 'cover';
            applyBackgroundSettings(savedBgSettings);
            saveSettings(savedBgSettings);
        }
    });

    settingsButtons.forEach(button => {
        button.addEventListener('click', () => {
            settingsButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    blurSlider.addEventListener('input', () => {
        const blurAmount = parseInt(blurSlider.value, 10);
        if (!isNaN(blurAmount)) {
            backgroundContainer.style.filter = `blur(${blurAmount}px)`;
            blurValue.textContent = blurAmount;
            savedBgSettings.blur = blurAmount;
            saveSettings(savedBgSettings);
        }
    });

    window.addEventListener('resize', () => {
        if (savedBgSettings.position === 'fit' && savedBgSettings.url) {
            fitToPage(savedBgSettings.url);
        } else if (savedBgSettings.url) {
            applyBackgroundSettings(savedBgSettings);
        }
    });
});