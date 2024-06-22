// earn-achievements.js

const achievementEarner = {
    achievements: [
        { id: 'ach1', name: 'First Steps', tier: 'bronze', condition: () => true },
        { id: 'ach2', name: 'Explorer', tier: 'silver', condition: () => document.location.pathname !== '/index.html' },
        { id: 'ach7', name: 'Dedicated User', tier: 'silver', condition: () => document.location.pathname !== '/StudentVUE' },
        { id: 'ach3', name: 'Frequent Visitor', tier: 'gold', condition: () => localStorage.getItem('visitCount') >= 20 },
        { id: 'ach4', name: 'Dedicated User', tier: 'platinum', condition: () => /* value */ },
        { id: 'ach5', name: 'Master Achiever', tier: 'diamond', condition: () => /* value */ },
        { id: 'ach6', name: 'Fractures Bible', tier: 'diamond', condition: () => document.location.pathname !== '/docs/index.html' },
    ],

    init() {
        this.loadAchievements();
        this.checkAchievements();
        this.incrementVisitCount();
    },

    loadAchievements() {
        const savedAchievements = localStorage.getItem('achievements');
        if (savedAchievements) {
            this.achievements = JSON.parse(savedAchievements);
        }
    },

    saveAchievements() {
        localStorage.setItem('achievements', JSON.stringify(this.achievements));
    },

    checkAchievements() {
        this.achievements.forEach(achievement => {
            if (!achievement.unlocked && achievement.condition()) {
                this.unlockAchievement(achievement.id);
            }
        });
    },

    unlockAchievement(id) {
        const achievement = this.achievements.find(a => a.id === id);
        if (achievement && !achievement.unlocked) {
            achievement.unlocked = true;
            this.saveAchievements();
            this.showNotification(achievement.name);
        }
    },

    showNotification(achievementName) {
        alert(`Achievement unlocked: ${achievementName}`);
    },

    incrementVisitCount() {
        let visitCount = parseInt(localStorage.getItem('visitCount') || '0');
        visitCount++;
        localStorage.setItem('visitCount', visitCount.toString());
    }
};

// Initialize the achievement earner when the script loads
achievementEarner.init();