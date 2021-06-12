'use strict';
let score = 20;
let highscore = 0;
let secretNumber = Math.floor(Math.random() * 20 + 1);
//function for display message
const displayMesaage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        // document.querySelector('.message').textContent = '⛔️ No number!';
        displayMesaage('⛔️ No number!');
    }
    else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        
        // document.querySelector('.message').textContent = "🎉 Correct Number!";
        displayMesaage('🎉 Correct Number!');

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highscore)
            highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      
    } else if (guess !== secretNumber) {
        if (score > 1) {
            const ans = (guess > secretNumber) ? '📈 Too high!' : '📉 Too low!';
            // document.querySelector('.message').textContent = ans;
            displayMesaage(ans);
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = '💥 You lost the game!';
            displayMesaage('💥 You lost the game!');
            document.querySelector('.score').textContent = '0';
        }
    }
    
});


document.querySelector('.again').addEventListener('click', function () {

     score = 20;
     secretNumber = Math.floor(Math.random() * 20 + 1);
    document.querySelector('body').style.backgroundColor = '#222';
    
    document.querySelector('.score').textContent = score;
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMesaage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = ' ';
    document.querySelector('.number').style.width = '15rem';
});

