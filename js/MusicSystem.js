// Check local storage for MusicPlayer key
const musicPlayerStatus = localStorage.getItem('MusicPlayer');
if (musicPlayerStatus !== 'installed') {
    // Remove all elements related to the music player
    const elementsToRemove = document.querySelectorAll('.corner-div-MusicSystem');
    elementsToRemove.forEach(element => element.remove());

    // Optionally, clear any other relevant local storage items if needed
}

// Check if the script is running in the 'StudentVUE' folder
const isInStudentVUEFolder = window.location.pathname.includes('StudentVUE');

const musicFiles = [
    'Sneaky-Snitch.mp3',
    'Professor_E_Gadd_Theme_-_Luigis_Mansion.mp3',
    'Undertale_OST：_044__Tem Shop.mp3',
    'Wii-Shop-Channel.mp3',
    'Swim_Free.mp3',
    'Bad_Piggies.mp3',
    'Weird-Al-Hardware-Store.mp3',
    'skrillex.mp3'
];

const speedValues = [4.0, 3.5, 3.0, 2.5, 2.0, 1.8, 1.6, 1.4, 1.2, 1.0, 0.8, 0.6, 0.4, 0.2, 0.1];
let currentSpeedIndex = speedValues.indexOf(1.0);

const audio = document.getElementById('audio');
const fileNameDiv = document.getElementById('file-name');
const artistNameDiv = document.getElementById('artist-name');
const timeInfoDiv = document.getElementById('time-info');
const cornerDiv = document.getElementById('corner-div-MusicSystem');
const playPauseButton = document.getElementById('play-pause-button');
const skipButton = document.getElementById('skip-button');
const speedUpButton = document.getElementById('speed-up-button');
const speedDownButton = document.getElementById('speed-down-button');
const speedDisplay = document.getElementById('speed-display');
const spinningImg = document.getElementById('spinning-img');

// Calculate the minimum number of songs that need to be played before one can repeat
const minUniqueSongs = Math.ceil(musicFiles.length / 2);
let playedSongs = [];

const getRandomFile = () => {
    let availableFiles = musicFiles.filter(file => !playedSongs.includes(file));

    if (availableFiles.length === 0) {
        playedSongs = [];
        availableFiles = musicFiles;
    }

    const randomFile = availableFiles[Math.floor(Math.random() * availableFiles.length)];
    playedSongs.push(randomFile);

    if (playedSongs.length > minUniqueSongs) {
        playedSongs.shift();
    }

    return randomFile;
};

const setAudioSource = (file, startTime = 0) => {
    const isUrl = file.startsWith('http') || file.startsWith('file:///');
    audio.src = isUrl ? file : `${isInStudentVUEFolder ? '../' : ''}Music/${file}`;

    const fileName = file.split('/').pop().split('.').shift().replace(/_/g, ' ');
    fileNameDiv.textContent = fileName;

    audio.currentTime = startTime;
    audio.load();
};

audio.addEventListener('loadedmetadata', () => {
    const duration = audio.duration;
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60).toString().padStart(2, '0');
    timeInfoDiv.textContent = `0:00 | ${minutes}:${seconds}`;

    // Slide out the div for 5 seconds
    cornerDiv.classList.add('show-MusicSystem');
    setTimeout(() => {
        cornerDiv.classList.remove('show-MusicSystem');
    }, 5000);
});

audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime;
    const totalDuration = audio.duration;

    const currentMinutes = Math.floor(currentTime / 60);
    const currentSeconds = Math.floor(currentTime % 60).toString().padStart(2, '0');

    const totalMinutes = Math.floor(totalDuration / 60);
    const totalSeconds = Math.floor(totalDuration % 60).toString().padStart(2, '0');

    timeInfoDiv.textContent = `${currentMinutes}:${currentSeconds} | ${totalMinutes}:${totalSeconds}`;

    // Save current song and time to local storage for continuity
    localStorage.setItem('MusicPlayerContinuity', JSON.stringify({
        file: audio.src,
        currentTime: currentTime,
        paused: audio.paused
    }));
});

audio.addEventListener('ended', () => {
    setAudioSource(getRandomFile());
    audio.play();
});

// Play/Pause button functionality
playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = "⏸";
        cornerDiv.classList.remove('paused-MusicSystem');
    } else {
        audio.pause();
        playPauseButton.textContent = "▶️";
        cornerDiv.classList.add('paused-MusicSystem');
    }
});

// Skip button functionality
skipButton.addEventListener('click', () => {
    setAudioSource(getRandomFile());
    audio.play();
    cornerDiv.classList.remove('paused-MusicSystem');
});

// Speed control functionality
const updateSpeedDisplay = () => {
    const speed = speedValues[currentSpeedIndex];
    speedDisplay.textContent = `${speed}x`;
    audio.playbackRate = speed;
    spinningImg.style.animationDuration = `${10 / speed}s`;
};

speedUpButton.addEventListener('click', () => {
    if (currentSpeedIndex > 0) {
        currentSpeedIndex--;
        updateSpeedDisplay();
    }
});

speedDownButton.addEventListener('click', () => {
    if (currentSpeedIndex < speedValues.length - 1) {
        currentSpeedIndex++;
        updateSpeedDisplay();
    }
});

// Load the previous state from local storage
const savedState = JSON.parse(localStorage.getItem('MusicPlayerContinuity'));
if (savedState) {
    setAudioSource(savedState.file, savedState.currentTime);
    if (!savedState.paused) {
        audio.play();
    } else {
        cornerDiv.classList.add('paused-MusicSystem');
        playPauseButton.textContent = "▶️";
    }
} else {
    setAudioSource(getRandomFile());
}

updateSpeedDisplay();
