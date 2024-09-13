document.addEventListener('DOMContentLoaded', () => {
    const bgUpload = document.getElementById('bg-upload');
    const clearBg = document.getElementById('clear-bg');
    const applyBg = document.getElementById('apply-bg');
    const settingsButtons = document.querySelectorAll('.dropdown-settings button');
    const blurSlider = document.getElementById('blur-slider');
    const blurValue = document.getElementById('blur-value');
    const savedBgSettings = JSON.parse(localStorage.getItem('bgSettings')) || {};

    function getOrCreateBackgroundContainer() {
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
        backgroundContainer.style.backgroundSize = 'cover';
        backgroundContainer.style.backgroundPosition = 'center';
        backgroundContainer.style.backgroundRepeat = 'no-repeat';
        backgroundContainer.style.zIndex = '-1';

        document.body.insertBefore(backgroundContainer, document.body.firstChild);
        return backgroundContainer;
    }

    function applyBackgroundSettings(backgroundContainer, settings) {
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
        if (settings.blur !== undefined) {
            backgroundContainer.style.filter = `blur(${settings.blur}px)`;
            blurSlider.value = settings.blur;
            blurValue.textContent = settings.blur;
        }
    }

    function fitToPage(backgroundContainer, imageUrl) {
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
        img.src = imageUrl;
    }

    const backgroundContainer = getOrCreateBackgroundContainer();
    applyBackgroundSettings(backgroundContainer, savedBgSettings);

    bgUpload.addEventListener('change', () => {
        const file = bgUpload.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                savedBgSettings.url = e.target.result;
                applyBackgroundSettings(backgroundContainer, savedBgSettings);
                localStorage.setItem('bgSettings', JSON.stringify(savedBgSettings));
            };
            reader.readAsDataURL(file);
        }
    });

    clearBg.addEventListener('click', () => {
        backgroundContainer.style.backgroundImage = '';
        backgroundContainer.style.filter = 'none';
        savedBgSettings = {};
        localStorage.removeItem('bgSettings');
        blurSlider.value = 0;
        blurValue.textContent = '0';
    });

    applyBg.addEventListener('click', () => {
        const activeButton = document.querySelector('.dropdown-settings button.active');
        if (activeButton) {
            savedBgSettings.position = activeButton.dataset.bgImage;
            applyBackgroundSettings(backgroundContainer, savedBgSettings);
            localStorage.setItem('bgSettings', JSON.stringify(savedBgSettings));
        }
    });

    settingsButtons.forEach(button => {
        button.addEventListener('click', () => {
            settingsButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    blurSlider.addEventListener('input', () => {
        const blurAmount = blurSlider.value;
        backgroundContainer.style.filter = `blur(${blurAmount}px)`;
        blurValue.textContent = blurAmount;
        savedBgSettings.blur = parseInt(blurAmount);
        localStorage.setItem('bgSettings', JSON.stringify(savedBgSettings));
    });

    window.addEventListener('resize', () => {
        if (savedBgSettings.position === 'fit') {
            fitToPage(backgroundContainer, savedBgSettings.url);
        }
    });
});