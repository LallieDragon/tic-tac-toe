let action = function(showElement) {
  let showAction = showElement;
  function setMessage(showElement) {
    showAction.innerHTML = showElement;
    return showAction;
  }
  return (setMessage);
};

function valid(button) {
  return button.innerHTML.length == 0;
}

function checkForWin(board, players, currentTurn) {
  if (board[0].innerHTML === players[currentTurn] &&
      board[0].innerHTML === players[currentTurn] &&
      board[0].innerHTML === players[currentTurn]){
    return true;
  }
  if (board[0].innerHTML === players[currentTurn] &&
      board[1].innerHTML === players[currentTurn] &&
      board[2].innerHTML === players[currentTurn]){
    return true;
  }
  if (board[3].innerHTML === players[currentTurn] &&
      board[4].innerHTML === players[currentTurn] &&
      board[5].innerHTML === players[currentTurn]){
    return true;
  }
  if (board[6].innerHTML === players[currentTurn] &&
      board[7].innerHTML === players[currentTurn] &&
      board[8].innerHTML === players[currentTurn]){
    return true;
  }
  if (board[0].innerHTML === players[currentTurn] &&
      board[4].innerHTML === players[currentTurn] &&
      board[8].innerHTML === players[currentTurn]){
    return true;
  }
  if (board[2].innerHTML === players[currentTurn] &&
      board[4].innerHTML === players[currentTurn] &&
      board[6].innerHTML === players[currentTurn]){
    return true;
  }
  if (board[0].innerHTML === players[currentTurn] &&
      board[3].innerHTML === players[currentTurn] &&
      board[6].innerHTML === players[currentTurn]){
    return true;
  }
  if (board[1].innerHTML === players[currentTurn] &&
      board[4].innerHTML === players[currentTurn] &&
      board[7].innerHTML === players[currentTurn]){
    return true;
  }
  if (board[2].innerHTML === players[currentTurn] &&
      board[5].innerHTML === players[currentTurn] &&
      board[8].innerHTML === players[currentTurn]){
    return true;
  }
}

  // if row is all players[currentTurn]
  // if column is all players[currentTurn]

}
function main() {
  let board = document.querySelectorAll('button');
  let players = ['X', 'O'];
  let currentTurn = 0;
  let gameComplete = false;
  let showAction = new action(document.querySelector('#actions'));

  showAction(`Game board is set. Player ${players[currentTurn]}, begin!`);

  for (let i = 0; i < board.length; i++) {
    board[i].addEventListener("click", function() {
      if (gameComplete) {
        return;
      }

      //write this
      if (!valid(this)) {
      }
      else {
        setMarker(this, players[currentTurn]);

        //Complete function gameComplete
        gameComplete = checkForWin(board, players, currentTurn);

        //over
        //draw
        //not over continue play
        currentTurn++;

        //Ensures current player is always X or O
        currentTurn = currentTurn % 2;

        showAction(`It is ${currentTurn}\'s turn. Continue the battle!`);
      }
    })
  }
}

main();

