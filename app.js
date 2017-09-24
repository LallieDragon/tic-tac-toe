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
  let showAction = action(document.querySelector('#actions'));

  showAction(`Game board is set. Player ${players[currentTurn]}, begin!`)
  for (let i = 0; i < board.length; i++) {}









}

main();

