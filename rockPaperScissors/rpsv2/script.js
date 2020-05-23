let options = [ 
    'rock',
    'paper',
    'scissors'
  ];
   
  let userScore = 0;
  let computerScore = 0;
  
    function computerPlay() {
      return (options[Math.floor(Math.random() * options.length)]);
    };
      
    function userPlay(elid) {
      let playerSelection = elid;
      return playerSelection;
    };
  
    function playRound(playerSelection, computerSelection) {
      let roundMessage;
      console.log(playerSelection, computerSelection);
  if (playerSelection == 'rock') {
    roundMessage = (computerSelection == 'rock') ? "It's a wash!" : 
   (computerSelection == 'paper') ? "You lose! Paper beats Rock!" :
   (computerSelection == 'scissors') ? "You win! Rock beats Scissors!": "invalid user response entered"
  }
  else if (playerSelection == 'paper') {
    roundMessage = (computerSelection == 'rock') ? "You win! Paper beats Rock!" :
    (computerSelection == 'paper') ? "It's a wash!" : 
    (computerSelection == 'scissors') ? "You lose! Scissors beat Paper!" : "invalid user response entered"
    }
  else {
    roundMessage = (computerSelection == 'rock') ? "You lose! Rock beats Scissors" :
    (computerSelection == 'paper') ? "You win! Scissors beat Paper!" :
    (computerSelection == 'scissors') ? "It's a wash!": "invalid user response entered"
    }
    console.log(roundMessage)
    return (roundMessage);
  }
  
  function game(el) {
    let elid = el.id;
    let scoreboard = document.getElementById('total');
    let roundReturn = document.getElementById('round-message');
    let userSelect = userPlay(elid);
    let compSelect = computerPlay();
    let outcome = playRound(userSelect, compSelect);
    if (outcome.includes('win!')) { userScore++; } 
    else if (outcome.includes('lose!')) {
        computerScore++;
      }
      roundReturn.textContent = outcome;
      scoreboard.textContent = userScore + ' - ' + computerScore;
    if (userScore == 5 || computerScore == 5){
      let winner = (userScore == 5) ? userScore : computerScore;
      roundReturn.textContent = (winner == userScore) ? "You win!" : "You Lose!"
      userScore = 0;
      computerScore = 0;
    }
  
    };
  
    let rock = document.getElementById('rock');
    rock.addEventListener('click', function(){game(rock)});
    let paper = document.getElementById('paper');
    paper.addEventListener('click', function(){game(paper)});
    let scissors = document.getElementById('scissors');
    scissors.addEventListener('click', function(){game(scissors)});
    
