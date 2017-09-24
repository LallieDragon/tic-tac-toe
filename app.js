let action = function(showElement) {
  let showAction = showElement;
  function setMessage(showElement) {
    showAction.innerHTML = showElement;
    return showAction;
  }
  return setMessage;
};

function checkForWin(board, players, currentTurn) {
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
  return false;
};

function full(board) {
  for (let i = 0; i < board.length; i++) {
    if (board[i].innerHTML.length == 0); {
      return false;
    }
  }
  return true;
};

function aDraw(board) {
  return (!checkForWin(board, ["X"], 0)) && full(board);
};

function valid(button) {
  return button.innerHTML.length == 0;
};

function setMarker(button, mark) {
  button.innerHTML = mark;
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

      if (!valid(this)) {
        showAction(`Invalid move, Player ${players[currentTurn]}!`)
      }
      else {
        setMarker(this, players[currentTurn]);

        gameComplete = checkForWin(board, players, currentTurn);

        if (gameComplete) {
          showAction(`Player ${players[currentTurn]} has defeated their opponent!`);
          return;
        }

        if (full(board)) {
          showAction("Players X and O have died.");
          return;
        }
        currentTurn++;

        //Ensures current player is always X or O
        currentTurn = currentTurn % 2;

        showAction(`It is ${players[currentTurn]}\'s turn. Continue the battle!`);
      }
    })
  }
}

main();

