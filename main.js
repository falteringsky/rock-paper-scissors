/*Computer random function*/
function computerRandom() {
    const compArray = ['rock', 'paper', 'scissors'];
    const randomChoice = compArray[Math.floor(Math.random()*compArray.length)];
    return randomChoice;
}

const endAlrt = document.querySelector('#end-alert');
const result = document.querySelector('.final-results');
const reloadBtn = document.querySelector('.reload-page');
const main = document.querySelector('main');

// Complete logic of game inside this function
const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
  
  
    // Function to
    const playGame = () => {
      // const options = document.querySelector('#buttons');
      const rockBtn = document.querySelector('.btn-ro');
      const paperBtn = document.querySelector('.btn-pap');
      const scissorBtn = document.querySelector('.btn-sci');
      const playerOptions = [rockBtn,paperBtn,scissorBtn];
      
      // Function to start playing game
      playerOptions.forEach(option => {
        option.addEventListener('click', function() {
  
          const movesLeft = document.querySelector('h1.cyberpunk.glitched');
          moves++;
          movesLeft.innerText = `Moves Left: ${5-moves}`;
          
  
          const computerChoice = computerRandom();
  
          // Function to check who wins
          winner(this.innerText,computerChoice)
          
          // Calling gameOver function after 10 moves
          if(moves == 5){
            gameOver(playerOptions,movesLeft);
          }
        })
      })
      
    }
  
    // Function to decide winner
    const winner = (player,computer) => {
      const result = document.querySelector('.final-results');
      const playerScoreBoard = document.querySelector('.p-count');
      const computerScoreBoard = document.querySelector('.c-count');
      player = player.toLowerCase();
      computer = computer.toLowerCase();

      if(player === computer){
        result.textContent = 'Tie'
      }
      else if(player == 'rock'){
        if(computer == 'paper'){
          result.textContent = 'AI Won!';
          computerScore++;
          computerScoreBoard.textContent = computerScore;
  
        }else{
          result.textContent = 'You Won!'
          playerScore++;
          playerScoreBoard.textContent = playerScore;
        }
      }
      else if(player == 'scissors'){
        if(computer == 'rock'){
          result.textContent = 'AI Won!';
          computerScore++;
          computerScoreBoard.textContent = computerScore;
        }else{
          result.textContent = 'You Won!';
          playerScore++;
          playerScoreBoard.textContent = playerScore;
        }
      }
      else if(player == 'paper'){
        if(computer == 'scissors'){
          result.textContent = 'AI Won!';
          computerScore++;
          computerScoreBoard.textContent = computerScore;
        }else{
          result.textContent = 'You Won!';
          playerScore++;
          playerScoreBoard.textContent = playerScore;
        }
      }
    }
  
    // Function to run when game is over
    const gameOver = (playerOptions,movesLeft) => {
  
      const chooseMove = document.querySelector('.move');
      const result = document.querySelector('.final-results');
      const reloadBtn = document.querySelector('.reload-page');
  
      playerOptions.forEach(option => {
        option.style.display = 'none';
      })
  
    
      chooseMove.innerText = 'Game Over!!'
      movesLeft.style.display = 'none';
  
      if(playerScore > computerScore){
        result.style.fontSize = '80px';
        result.innerText = 'Status: YOUR HUMAN PSYCHE HAS BEEN SUCCESFULLY TRANSFERRED.'
        hideEndContainerShowWinner();
        result.style.color = '#308D46';
      }
      else if(playerScore < computerScore){
        result.style.fontSize = '80px';
        result.innerText = 'Status: FLATLINED..';
        hideEndContainerShowWinner();
        result.style.color = 'red';
      }
      else{
        result.style.fontSize = '80px';
        result.innerText = 'Status: IN STANDBY, NO RESULT..';
        hideEndContainerShowWinner();
        result.style.color = 'rgb(0, 208, 255)'
      }
      reloadBtn.innerText = 'RESTART_';
      reloadBtn.style.display = 'block';
      reloadBtn.addEventListener('click',() => {
        window.location.reload();
      })

    }
    function hideEndContainerShowWinner() {
      main.style.opacity = 0;
      main.style.transform = 'scale(0)';
      // Add timeout with length matching animation-duration 
      main.style.display = 'none';
      result.style.display = 'flex';
  }
  
  
    // Calling playGame function inside game
    playGame();
    
  }
  
  // Calling the game function
  game();
  