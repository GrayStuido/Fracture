document.addEventListener('DOMContentLoaded', () => {
    const bgUpload = document.getElementById('bg-upload');
    const clearBg = document.getElementById('clear-bg');
    const applyBg = document.getElementById('apply-bg');
    const settingsButtons = document.querySelectorAll('.dropdown-settings button');
    const blurSlider = document.getElementById('blur-slider');
    const blurValue = document.getElementById('blur-value');
    let savedBgSettings = JSON.parse(localStorage.getItem('bgSettings')) || {};

    function getOrCreateBackgroundContainer() {
        try {
            let existingBgContainer = document.getElementById('background-container');
            if (existingBgContainer) {
                return existingBgContainer;
            }

            let backgroundContainer = document.createElement('div');
            backgroundContainer.id = 'background-container';
            backgroundContainer.style.position = 'fixed';
            backgroundContainer.style.top = '0';
            backgroundContainer.style.left = '0';
            backgroundContainer.style.width = '100%';
            backgroundContainer.style.height = '100%';
            backgroundContainer.style.zIndex = '-1';

            document.body.insertBefore(backgroundContainer, document.body.firstChild);
            return backgroundContainer;
        } catch (error) {
            console.error('Error in getOrCreateBackgroundContainer:', error);
            return null; // Fail-safe return
        }
    }

    function clearBackgroundStyles(backgroundContainer) {
        backgroundContainer.style.backgroundImage = '';
        backgroundContainer.style.backgroundSize = '';
        backgroundContainer.style.backgroundPosition = '';
        backgroundContainer.style.backgroundRepeat = '';
        backgroundContainer.style.filter = '';
    }

    function applyBackgroundSettings(backgroundContainer, settings) {
        try {
            if (!backgroundContainer) throw new Error("Background container is null.");

            clearBackgroundStyles(backgroundContainer); // Clear existing styles

            if (settings.url) {
                backgroundContainer.style.backgroundImage = `url(${settings.url})`;
            }

            if (settings.position) {
                switch (settings.position) {
                    case 'fit':
                        fitToPage(backgroundContainer, settings.url);
                        break;
                    case 'stretch':
                        backgroundContainer.style.backgroundSize = '100% 100%';
                        break;
                    case 'tiles':
                        backgroundContainer.style.backgroundSize = 'auto';
                        backgroundContainer.style.backgroundRepeat = 'repeat';
                        break;
                    case 'fit-centered':
                        backgroundContainer.style.backgroundSize = 'contain';
                        backgroundContainer.style.backgroundPosition = 'center';
                        backgroundContainer.style.backgroundRepeat = 'no-repeat';
                        break;
                    default:
                        backgroundContainer.style.backgroundSize = 'cover';
                        backgroundContainer.style.backgroundPosition = 'center';
                        backgroundContainer.style.backgroundRepeat = 'no-repeat';
                        break;
                }
            }

            if (settings.blur !== undefined && !isNaN(settings.blur)) {
                backgroundContainer.style.filter = `blur(${settings.blur}px)`;
                blurSlider.value = settings.blur;
                blurValue.textContent = settings.blur;
            }
        } catch (error) {
            console.error('Error in applyBackgroundSettings:', error);
        }
    }

    function fitToPage(backgroundContainer, imageUrl) {
        try {
            if (!imageUrl) return;

            const img = new Image();
            img.onload = function() {
                const imgRatio = img.width / img.height;
                const windowRatio = window.innerWidth / window.innerHeight;

                if (imgRatio > windowRatio) {
                    backgroundContainer.style.backgroundSize = 'auto 100%';
                } else {
                    backgroundContainer.style.backgroundSize = '100% auto';
                }
                backgroundContainer.style.backgroundPosition = 'center';
                backgroundContainer.style.backgroundRepeat = 'no-repeat';
            };
            img.onerror = function() {
                console.error('Error loading image:', imageUrl);
            };
            img.src = imageUrl;
        } catch (error) {
            console.error('Error in fitToPage:', error);
        }
    }

    const backgroundContainer = getOrCreateBackgroundContainer();
    if (backgroundContainer) {
        applyBackgroundSettings(backgroundContainer, savedBgSettings);
    }

    bgUpload.addEventListener('change', () => {
        try {
            const file = bgUpload.files[0];
            if (file) {
                if (!file.type.startsWith('image/')) {
                    console.error('Selected file is not an image.');
                    return;
                }

                const reader = new FileReader();
                reader.onload = (e) => {
                    savedBgSettings.url = e.target.result;
                    applyBackgroundSettings(backgroundContainer, savedBgSettings);
                    localStorage.setItem('bgSettings', JSON.stringify(savedBgSettings));
                };
                reader.onerror = (error) => {
                    console.error('Error reading file:', error);
                };
                reader.readAsDataURL(file);
            }
        } catch (error) {
            console.error('Error in bgUpload change event:', error);
        }
    });

    clearBg.addEventListener('click', () => {
        try {
            if (backgroundContainer) {
                clearBackgroundStyles(backgroundContainer); // Clear all styles
            }
            savedBgSettings = {};
            localStorage.removeItem('bgSettings');
            blurSlider.value = 0;
            blurValue.textContent = '0';
        } catch (error) {
            console.error('Error in clearBg click event:', error);
        }
    });

    applyBg.addEventListener('click', () => {
        try {
            const activeButton = document.querySelector('.dropdown-settings button.active');
            if (activeButton) {
                savedBgSettings.position = activeButton.dataset.bgImage || 'cover'; // Fallback position
                applyBackgroundSettings(backgroundContainer, savedBgSettings);
                localStorage.setItem('bgSettings', JSON.stringify(savedBgSettings));
            }
        } catch (error) {
            console.error('Error in applyBg click event:', error);
        }
    });

    settingsButtons.forEach(button => {
        button.addEventListener('click', () => {
            try {
                settingsButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            } catch (error) {
                console.error('Error in settingsButtons click event:', error);
            }
        });
    });

    blurSlider.addEventListener('input', () => {
        try {
            const blurAmount = parseInt(blurSlider.value, 10);
            if (!isNaN(blurAmount)) {
                backgroundContainer.style.filter = `blur(${blurAmount}px)`;
                blurValue.textContent = blurAmount;
                savedBgSettings.blur = blurAmount;
                localStorage.setItem('bgSettings', JSON.stringify(savedBgSettings));
            }
        } catch (error) {
            console.error('Error in blurSlider input event:', error);
        }
    });

    window.addEventListener('resize', () => {
        try {
            if (savedBgSettings.position === 'fit' && savedBgSettings.url) {
                fitToPage(backgroundContainer, savedBgSettings.url);
            }
        } catch (error) {
            console.error('Error in window resize event:', error);
        }
    });
});
