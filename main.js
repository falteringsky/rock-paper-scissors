/*Computer random function*/
function computerRandom() {
    const compArray = ['rock', 'paper', 'scissors'];
    const randomChoice = compArray[Math.floor(Math.random()*compArray.length)];
    return randomChoice;
}


// Complete logic of game inside this function
const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
  
  
    // Function to
    const playGame = () => {
      // const options = document.querySelector('#buttons');
      const rockBtn = document.querySelector('.but-rock');
      const paperBtn = document.querySelector('.but-paper');
      const scissorBtn = document.querySelector('.but-scissors');
      const playerOptions = [rockBtn,paperBtn,scissorBtn];
      
      // Function to start playing game
      playerOptions.forEach(option => {
        option.addEventListener('click', function() {
  
          const movesLeft = document.querySelector('.rounds');
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
        result.style.fontSize = '2rem';
        result.innerText = 'You Won The Game!'
        result.style.color = '#308D46';
      }
      else if(playerScore < computerScore){
        result.style.fontSize = '2rem';
        result.innerText = 'You Lost The Game!';
        result.style.color = 'red';
      }
      else{
        result.style.fontSize = '2rem';
        result.innerText = 'Tie!';
        result.style.color = 'grey'
      }
      reloadBtn.innerText = 'Restart';
      reloadBtn.style.display = 'flex'
      reloadBtn.addEventListener('click',() => {
        window.location.reload();
      })
    }
  
  
    // Calling playGame function inside game
    playGame();
    
  }
  
  // Calling the game function
  game();
  