(function() {
    const FLoadingScreen = {
        init: function() {
            this.createStyles();
            this.createDOM();
            this.startLoading();
        },

        createStyles: function() {
            const style = document.createElement('style');
            style.textContent = `
                .FLoadingScreen-full-page-wrapper {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: black;
                    z-index: 2147483647;
                    font-family: Arial, sans-serif;
                }

                .FLoadingScreen-container {
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .FLoadingScreen-logo {
                    width: 200px;
                    height: 200px;
                    object-fit: contain;
                    margin-bottom: 20px;
                }

                .FLoadingScreen-loading-wrapper {
                    background-color: #1a1a1a;
                    border: 2px solid #333;
                    border-radius: 8px;
                    padding: 10px;
                    box-shadow: 
                        inset 1px 1px 2px rgba(255,255,255,0.1),
                        inset -1px -1px 2px rgba(0,0,0,0.3),
                        2px 2px 5px rgba(0,0,0,0.3);
                    max-width: 300px;
                }

                .FLoadingScreen-loading-cells {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 4px;
                }

                .FLoadingScreen-cell {
                    width: 24px;
                    height: 16px;
                    background-color: #2a2a2a;
                    border: 2px solid #333;
                    border-radius: 4px;
                    transition: all 0.3s ease-in-out;
                }

                .FLoadingScreen-cell.FLoadingScreen-active {
                    background-color: #8a2be2;
                    border-color: #9932cc;
                    box-shadow: 0 0 10px #8a2be2;
                }
            `;
            document.head.appendChild(style);
        },

        createDOM: function() {
            const fullPageWrapper = document.createElement('div');
            fullPageWrapper.className = 'FLoadingScreen-full-page-wrapper';

            const container = document.createElement('div');
            container.className = 'FLoadingScreen-container';

            const logo = document.createElement('img');
            logo.src = 'https://github.com/GrayStuido/Fracture/blob/main/icons/FractureLogo-nonfav.png?raw=true';
            logo.alt = 'Fracture Logo';
            logo.className = 'FLoadingScreen-logo';
            logo.width = 200;
            logo.height = 200;

            const loadingWrapper = document.createElement('div');
            loadingWrapper.className = 'FLoadingScreen-loading-wrapper';

            const loadingCells = document.createElement('div');
            loadingCells.className = 'FLoadingScreen-loading-cells';

            const TOTAL_CELLS = 8;
            for (let i = 0; i < TOTAL_CELLS; i++) {
                const cell = document.createElement('div');
                cell.className = 'FLoadingScreen-cell';
                loadingCells.appendChild(cell);
            }

//            loadingWrapper.appendChild(loadingCells);
            container.appendChild(logo);
//            container.appendChild(loadingWrapper);
            fullPageWrapper.appendChild(container);
            document.body.appendChild(fullPageWrapper);

            this.fullPageWrapper = fullPageWrapper;
        },

        updateLoadingCells: function(progress) {
            const cells = this.fullPageWrapper.querySelectorAll('.FLoadingScreen-cell');
            const activeCells = Math.floor(progress * cells.length);
            
            cells.forEach((cell, index) => {
                if (index < activeCells) {
                    cell.classList.add('FLoadingScreen-active');
                } else {
                    cell.classList.remove('FLoadingScreen-active');
                }
            });
        },

        calculateLoadProgress: function() {
            const totalResources = performance.getEntriesByType('resource').length;
            const loadedResources = performance.getEntriesByType('resource').filter(r => r.responseEnd > 0).length;
            return loadedResources / totalResources;
        },

        isIframeLoaded: function(iframe) {
            try {
                return iframe.contentDocument.readyState === 'complete';
            } catch (e) {
                console.warn('Unable to check iframe load status:', e);
                return true;
            }
        },

        calculateTotalProgress: function() {
            const mainProgress = this.calculateLoadProgress();
            const iframes = Array.from(document.getElementsByTagName('iframe'));
            const iframeProgress = iframes.reduce((acc, iframe) => acc + (this.isIframeLoaded(iframe) ? 1 : 0), 0) / iframes.length;
            

            return (mainProgress * 0.7) + (iframeProgress * 0.3);
        },

        updateLoading: function() {
            const progress = this.calculateTotalProgress();
            this.updateLoadingCells(progress);

            if (progress < 1) {
                requestAnimationFrame(this.updateLoading.bind(this));
            } else {
                setTimeout(() => {
                    setTimeout(() => {
                        this.fullPageWrapper.style.opacity = '0';
                        this.fullPageWrapper.style.transition = 'opacity 0.5s ease-out';
                        setTimeout(() => {
                            this.fullPageWrapper.remove();
                        }, 500);
                    }, 20);
                }, 500);
            }
        },

        startLoading: function() {
            this.updateLoading();
        }
    };

    // Initialize the loading screen
    document.addEventListener('DOMContentLoaded', function() {
        FLoadingScreen.init();
    });
})();