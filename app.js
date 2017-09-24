let action = function(showElement) {
  let showAction = showElement;
  function setMessage(showElement) {
    showAction.innerHTML = showElement;
    return showAction;
  }
  return (setMessage);
};

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

