  class Leaderboard {
    constructor(containerId, title, unit, players) {
      this.containerId = containerId;
      this.title = title;
      this.unit = unit;
      this.players = players;
    }

    render() {
      const leaderboardContainer = document.getElementById(this.containerId);
      leaderboardContainer.innerHTML = `<h1 class="ScoreWrapper">${this.title}</h1>`;
      
      // Sort players by score
      this.players.sort((a, b) => b.score - a.score);

      this.players.forEach((player, index) => {
        if (player.score !== 0) { // Check if score is not equal to 0
          const leaderboardItem = document.createElement('div');
          leaderboardItem.classList.add('leaderboard-item');

          // Add different styles for first, second, and third place
          if (index === 0) {
            leaderboardItem.classList.add('leaderboard-item-first');
          } else if (index === 1) {
            leaderboardItem.classList.add('leaderboard-item-second');
          } else if (index === 2) {
            leaderboardItem.classList.add('leaderboard-item-third');
          }

          // Format score with commas
          const formattedScore = player.score.toLocaleString();

          leaderboardItem.innerHTML = `<span>${index + 1}. ${player.name}</span><span>${formattedScore} ${this.unit}</span>`;
          leaderboardContainer.appendChild(leaderboardItem);
        }
      });
    }
  }






  // Leaderboard Data
  // Names are in alphabetical order
  


  

  const leaderboardsData = {
    tetris: [
      { name: 'Addison Burck', score: 0 },
      { name: 'Alex Partan', score: 0 },
      { name: 'Brendan Westdahl', score: 272 },
      { name: 'Brennan McCoskery', score: 305 },
      { name: 'Clark Chaney', score: 0 },
      { name: 'Griffon Piazzisi', score: 309 },
      { name: 'Jayden Jusino', score: 280 },
      { name: 'Oskie Ayala', score: 300 },
      { name: 'Sal A.M.', score: 0 },
      { name: 'Tyson Fahlman', score: 0 },
      { name: 'Wes Porter', score: 0 }
    ],
    subway: [
      { name: 'Addison Burck', score: 0 },
      { name: 'Alex Partan', score: 735810 },
      { name: 'Brendan Westdahl', score: 1478329 },
      { name: 'Brennan McCoskery', score: 0 },
      { name: 'Clark Chaney', score: 0 },
      { name: 'Griffon Piazzisi', score: 7322951 },
      { name: 'Jayden Jusino', score: 177250 },
      { name: 'Oskie Ayala', score: 0 },
      { name: 'Sal A.M.', score: 0 },
      { name: 'Tyson Fahlman', score: 0 },
      { name: 'Wes Porter', score: 0 }
    ],
    tanuki: [
      { name: 'Addison Burck', score: 48685 },
      { name: 'Alex Partan', score: 0 },
      { name: 'Brendan Westdahl', score: 61533 },
      { name: 'Brennan McCoskery', score: 0 },
      { name: 'Clark Chaney', score: 0 },
      { name: 'Griffon Piazzisi', score: 69935 },
      { name: 'Jayden Jusino', score: 10 },
      { name: 'Oskie Ayala', score: 50307 },
      { name: 'Sal A.M.', score: 0 },
      { name: 'Tyson Fahlman', score: 0 },
      { name: 'Wes Porter', score: 0 }
    ],
    slope: [
      { name: 'Addison Burck', score: 100 },
      { name: 'Alex Partan', score: 0 },
      { name: 'Brendan Westdahl', score: 94 },
      { name: 'Brennan McCoskery', score: 0 },
      { name: 'Clark Chaney', score: 41 },
      { name: 'Griffon Piazzisi', score: 155 },
      { name: 'Jayden Jusino', score: 130 },
      { name: 'Oskie Ayala', score: 86 },
      { name: 'Sal A.M.', score: 0 },
      { name: 'Tyson Fahlman', score: 114 },
      { name: 'Wes Porter', score: 66 }
    ],
    kitchengun: [
      { name: 'Addison Burck', score: 0 },
      { name: 'Alex Partan', score: 0 },
      { name: 'Brendan Westdahl', score: 0 },
      { name: 'Brennan McCoskery', score: 0 },
      { name: 'Clark Chaney', score: 0 },
      { name: 'Griffon Piazzisi', score: 104 },
      { name: 'Jayden Jusino', score: 76 },
      { name: 'Oskie Ayala', score: 109 },
      { name: 'Sal A.M.', score: 0 },
      { name: 'Tyson Fahlman', score: 0 },
      { name: 'Wes Porter', score: 0 }
    ],
    galaga: [
      { name: 'Addison Burck', score: 0 },
      { name: 'Alex Partan', score: 0 },
      { name: 'Brendan Westdahl', score: 0 },
      { name: 'Brennan McCoskery', score: 0 },
      { name: 'Clark Chaney', score: 0 },
      { name: 'Griffon Piazzisi', score: 0 },
      { name: 'Jayden Jusino', score: 0 },
      { name: 'Oskie Ayala', score: 0 },
      { name: 'Sal A.M.', score: 6910 },
      { name: 'Tyson Fahlman', score: 238020 },
      { name: 'Wes Porter', score: 191830 }
    ],
    dragonvsbricks: [
      { name: 'Addison Burck', score: 0 },
      { name: 'Alex Partan', score: 0 },
      { name: 'Brendan Westdahl', score: 0 },
      { name: 'Brennan McCoskery', score: 0 },
      { name: 'Clark Chaney', score: 0 },
      { name: 'Griffon Piazzisi', score: 0 },
      { name: 'Jayden Jusino', score: 1630 },
      { name: 'Oskie Ayala', score: 0 },
      { name: 'Sal A.M.', score: 0 },
      { name: 'Tyson Fahlman', score: 798 },
      { name: 'Wes Porter', score: 0 }
    ],
    connect3: [
      { name: 'Addison Burck', score: 0 },
      { name: 'Alex Partan', score: 71700 },
      { name: 'Brendan Westdahl', score: 0 },
      { name: 'Brennan McCoskery', score: 0 },
      { name: 'Clark Chaney', score: 0 },
      { name: 'Griffon Piazzisi', score: 73000 },
      { name: 'Jayden Jusino', score: 4304800 },
      { name: 'Oskie Ayala', score: 0 },
      { name: 'Sal A.M.', score: 0 },
      { name: 'Tyson Fahlman', score: 0 },
      { name: 'Wes Porter', score: 0 }
    ]
  };





// Ignore Everything Past This






  // Function to render leaderboard
  function renderLeaderboard(data) {
    const leaderboard = new Leaderboard(data.containerId, data.title, data.unit, data.players);
    leaderboard.render();
  }

  // Render Tetris leaderboard
  renderLeaderboard({
    containerId: 'tetris-leaderboard',
    title: 'Tetra Legends',
    unit: 'Lines',
    players: leaderboardsData.tetris
  });

  // Render Subway Surfers leaderboard
  renderLeaderboard({
    containerId: 'subway-leaderboard',
    title: 'Subway Surfers',
    unit: 'Score',
    players: leaderboardsData.subway
  });

  // Render Galaga leaderboard
  renderLeaderboard({
    containerId: 'galaga-leaderboard',
    title: 'Galaga',
    unit: 'Score',
    players: leaderboardsData.galaga
  });

  // Render Tanuki leaderboard
  renderLeaderboard({
    containerId: 'tanuki-leaderboard',
    title: 'Tanuki Sunset',
    unit: 'Score',
    players: leaderboardsData.tanuki
  });

  // Render Tanuki leaderboard
  renderLeaderboard({
    containerId: 'slope-leaderboard',
    title: 'Slope',
    unit: 'Score',
    players: leaderboardsData.slope
  });

  // Render Kitchen Gun Game leaderboard
  renderLeaderboard({
    containerId: 'kitchen-gun-leaderboard',
    title: 'Kitchen Gun Game',
    unit: 'Score',
    players: leaderboardsData.kitchengun
  });

  // Render Connect 3 leaderboard
  renderLeaderboard({
    containerId: 'connect3',
    title: 'Connect 3',
    unit: 'Score',
    players: leaderboardsData.connect3
  });

  // Render Dragon Vs Bricks leaderboard
  renderLeaderboard({
    containerId: 'dragon-bricks',
    title: 'Dragon Vs Bricks',
    unit: 'Score',
    players: leaderboardsData.dragonvsbricks
  });

  // Render Gamble Land leaderboard
  renderLeaderboard({
    containerId: 'gambling',
    title: 'Gamble Land',
    unit: 'Money',
    players: leaderboardsData.money
  });