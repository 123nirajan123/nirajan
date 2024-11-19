// DOM Elements
const gameSelect = document.getElementById('game-select');
const topupButtons = document.querySelectorAll('.topup-button');
const summaryText = document.getElementById('summary-text');
const checkoutBtn = document.getElementById('checkout-btn');

// State Variables
let selectedGame = '';
let selectedAmount = '';

// Game Selection Event
gameSelect.addEventListener('change', () => {
    selectedGame = gameSelect.value;
    updateSummary();
});

// Top-Up Button Event
topupButtons.forEach(button => {
    button.addEventListener('click', () => {
        selectedAmount = button.getAttribute('data-amount');
        updateSummary();
    });
});

// Update Summary
function updateSummary() {
    if (selectedGame && selectedAmount) {
        summaryText.textContent = `You selected ${selectedGame} with ${selectedAmount} credits.`;
        checkoutBtn.disabled = false;
    } else {
        summaryText.textContent = 'No game or amount selected yet.';
        checkoutBtn.disabled = true;
    }
}

// Checkout Button Event
checkoutBtn.addEventListener('click', () => {
    alert(`Proceeding to checkout for ${selectedGame} with ${selectedAmount} credits.`);
});
