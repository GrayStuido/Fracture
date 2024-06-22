// display-achievements.js

const achievementDisplayer = {
    achievements: [
        { id: 'ach1', name: 'First Steps', tier: 'bronze' },
        { id: 'ach2', name: 'Explorer', tier: 'silver' },
        { id: 'ach3', name: 'Frequent Visitor', tier: 'gold' },
        { id: 'ach4', name: 'Master', tier: 'platinum' },
    ],

    init() {
        this.loadAchievements();
        this.renderAchievements();
    },

    loadAchievements() {
        const savedAchievements = localStorage.getItem('achievements');
        if (savedAchievements) {
            const unlockedAchievements = JSON.parse(savedAchievements);
            this.achievements.forEach(achievement => {
                const unlockedAchievement = unlockedAchievements.find(a => a.id === achievement.id);
                achievement.unlocked = unlockedAchievement ? unlockedAchievement.unlocked : false;
            });
        }
    },

    renderAchievements() {
        const container = document.getElementById('achievements-container');
        if (!container) return;

        container.innerHTML = '';
        this.achievements.forEach(achievement => {
            const achievementElement = document.createElement('div');
            achievementElement.className = `achievement ${achievement.tier} ${achievement.unlocked ? 'unlocked' : 'locked'}`;
            achievementElement.innerHTML = `
                <div class="achievement-icon">
                    <div class="achievement-shape"></div>
                </div>
                <div class="achievement-info">
                    <div class="achievement-name">${achievement.name}</div>
                    <div class="achievement-tier">${achievement.tier.charAt(0).toUpperCase() + achievement.tier.slice(1)}</div>
                </div>
            `;
            container.appendChild(achievementElement);
        });
    }
};

// Initialize the achievement displayer when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    achievementDisplayer.init();
});