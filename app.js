var board = document.querySelectorAll('#game button');
var players = ['X', 'O'];
var currentTurn = 0;
var gameComplete = false;
var clicks = 0;
var playerXScore = 0;
var playerOScore = 0;

let action = function(showElement) {
  let showAction = showElement;
  function setMessage(showElement) {
    showAction.innerText = showElement;
    return showAction;
  }
  return setMessage;
};

function checkForWin(board, players, currentTurn) {
  if (board[0].innerText === players[currentTurn] &&
      board[1].innerText === players[currentTurn] &&
      board[2].innerText === players[currentTurn]){
    return true;
  }
  if (board[3].innerText === players[currentTurn] &&
      board[4].innerText === players[currentTurn] &&
      board[5].innerText === players[currentTurn]){
    return true;
  }
  if (board[6].innerText === players[currentTurn] &&
      board[7].innerText === players[currentTurn] &&
      board[8].innerText === players[currentTurn]){
    return true;
  }
  if (board[0].innerText === players[currentTurn] &&
      board[4].innerText === players[currentTurn] &&
      board[8].innerText === players[currentTurn]){
    return true;
  }
  if (board[2].innerText === players[currentTurn] &&
      board[4].innerText === players[currentTurn] &&
      board[6].innerText === players[currentTurn]){
    return true;
  }
  if (board[0].innerText === players[currentTurn] &&
      board[3].innerText === players[currentTurn] &&
      board[6].innerText === players[currentTurn]){
    return true;
  }
  if (board[1].innerText === players[currentTurn] &&
      board[4].innerText === players[currentTurn] &&
      board[7].innerText === players[currentTurn]){
    return true;
  }
  if (board[2].innerText === players[currentTurn] &&
      board[5].innerText === players[currentTurn] &&
      board[8].innerText === players[currentTurn]){
    return true;
  }
  return false;
};

function valid(button) {
  if (button.innerText !== 'X' && button.innerText !== 'O') {
    return true;
  }
};

function setMarker(button, mark) {
button.innerText = mark;
};

function reset() {
  players = ['X', 'O'];
  currentTurn = 0;
  gameComplete = false;
  clicks = 0;

  for (let i = 0; i < board.length; i++) {
    board[i].innerText = '';
  };

  var showAction = new action(document.querySelector('#actions'));
  showAction(`Game board is set. Player ${players[currentTurn]}, begin!`);

}

function main() {
  var showAction = new action(document.querySelector('#actions'));

  for (let i = 0; i < board.length; i++) {
    if (board[i].length != 0) {
      board[i].innerText = '';
    }
  }

  showAction(`Game board is set. Player ${players[currentTurn]}, begin!`);

  for (let i = 0; i < board.length; i++) {
    board[i].addEventListener("click", function() {

      if (gameComplete) {
        return;
      }

      else if (!valid(this)) {
        showAction(`Invalid move, Player ${players[currentTurn]}!`)
      }

      else {
        setMarker(board[i], players[currentTurn]);
        gameComplete = checkForWin(board, players, currentTurn);
        clicks++;

        if (gameComplete) {
          showAction(`Player ${players[currentTurn]} has defeated their opponent!`);
          return;
        }

        if (clicks >= board.length) {
          showAction("Both players lose.");
          return;
        }

        currentTurn++;
        currentTurn = currentTurn % 2;

        showAction(`It is ${players[currentTurn]}\'s turn. Continue the battle!`);
      }
    });
  }
}

main();

