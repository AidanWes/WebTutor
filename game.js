let wallet = 250;
let wins = 0;
let losses = 0;

function getRandom() {
  let num = document.getElementById('numBet').value;
  let random = Math.floor((Math.random() * 1000) + 1);
  document.getElementById('randomNum').innerText = random;

  if (num == random) {
    wallet += 249;
    wins++;
    document.getElementById('wins').innerText = wins;
    setWallet();
  } else {
    wallet--;
    losses++;
    document.getElementById('loses').innerText = losses;
    setWallet();
  }
}

function setWallet() {
  document.getElementById('wallet').innerText = 'Current Wallet: $' + wallet + '.00';
}