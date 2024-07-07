// Core Achievement Functions
function initAchievements() {
    let userAchievements = JSON.parse(localStorage.getItem('userAchievements')) || {};
    achievements.forEach(achievement => {
        if (!userAchievements[achievement.id]) {
            userAchievements[achievement.id] = false;
        }
    });
    localStorage.setItem('userAchievements', JSON.stringify(userAchievements));
}

function checkAchievement(id, condition) {
    let userAchievements = JSON.parse(localStorage.getItem('userAchievements'));
    if (condition && !userAchievements[id]) {
        userAchievements[id] = true;
        localStorage.setItem('userAchievements', JSON.stringify(userAchievements));
        checkCollectorAchievements();
        // Play sound and show alert here if desired
        renderAchievements();
    }
}

function checkCollectorAchievements() {
    let userAchievements = JSON.parse(localStorage.getItem('userAchievements'));
    let achievedCount = Object.values(userAchievements).filter(Boolean).length;
    checkAchievement('achievement_get', achievedCount >= 1);
    checkAchievement('collector', achievedCount >= 10);
    checkAchievement('hoarder', achievedCount >= 20);
    
    let allOtherAchievements = Object.entries(userAchievements).every(([key, value]) => 
        key === 'achievement_compendium' || value === true
    );
    checkAchievement('achievement_compendium', allOtherAchievements);
}

// Call this function when the page loads
initAchievements();