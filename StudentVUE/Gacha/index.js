const symbols = ['🍒', '🍋', '🍊', '🍇', '🍉']; // You can add more symbols if you want

function spin() {
    const slot1 = document.getElementById('slot1');
    const slot2 = document.getElementById('slot2');
    const slot3 = document.getElementById('slot3');
    const message = document.getElementById('message');
    
    const betAmount = 50; // Bet amount for spinning

    // Update wallet based on bet amount
    walletAmount -= betAmount;

    // Update the displayed amount
    updateAmount();

    // Reset all slots to question marks
    slot1.textContent = '❓';
    slot2.textContent = '❓';
    slot3.textContent = '❓';

    // Display random symbols for 3 seconds
    const tempSymbols = [];
    const start = Date.now();
    let delay = 0;
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const interval = setInterval(() => {
                const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
                if (i === 0) slot1.textContent = randomSymbol;
                else if (i === 1) slot2.textContent = randomSymbol;
                else slot3.textContent = randomSymbol;
            }, 100);
            
            setTimeout(() => {
                clearInterval(interval);
                const lastSymbol = symbols[Math.floor(Math.random() * symbols.length)];
                if (i === 0) slot1.textContent = lastSymbol;
                else if (i === 1) slot2.textContent = lastSymbol;
                else {
                    slot3.textContent = lastSymbol;
                    const lastSymbols = [slot1.textContent, slot2.textContent, slot3.textContent];
                    if (lastSymbols[0] === lastSymbols[1] && lastSymbols[1] === lastSymbols[2]) {
                        message.textContent = 'You Win!';
                        walletAmount += 400; // Increase wallet by $400 on win
                    } else {
                        message.textContent = 'Try Again!';
                    }
                    // Update the displayed amount after the spin result
                    updateAmount();
                }
            }, 2000);
        }, delay);
        delay += 2000;
    }
}

// Get references to elements
const numberElement = document.querySelector('.number');
const coinFlipForm = document.getElementById('coinFlipForm');
const betAmountInput = document.getElementById('betAmount');

// Initial wallet amount
let walletAmount = 100; // Initial amount in dollars

// Function to update the displayed amount
function updateAmount() {
    numberElement.textContent = `$${walletAmount}`;
    betAmountInput.max = walletAmount; // Set the maximum limit of the input to the wallet amount
}

// Function to handle form submission
function handleCoinFlip(event) {
    event.preventDefault();
    
    const betAmount = parseInt(betAmountInput.value);
    
    // Check if bet amount is valid
    if (betAmount <= 0 || betAmount > walletAmount) {
        alert("Invalid bet amount!");
        return;
    }
    
    // Flip the coin
    const result = Math.random() < 0.5 ? 'heads' : 'tails';
    
    // Update wallet based on result
    if (result === 'heads') {
        walletAmount += betAmount; // Win
    } else {
        walletAmount -= betAmount; // Lose
    }
    
    // Update the displayed amount
    updateAmount();
    
    // Reset bet amount input
    betAmountInput.value = '';
}

// Attach form submission event listener
coinFlipForm.addEventListener('submit', handleCoinFlip);

// Update the displayed amount initially
updateAmount();