let ticTacToes = document.querySelectorAll('#tic-tac-toe li');
let alertDiv = document.getElementById('alert');
let restartButton = document.getElementById('restart');
let player = 'O';
ticTacToes.forEach((li, key) => {
    li.addEventListener('click', function() {
        //if this column is not checked
        // data-value isset and not empty
        if(li.dataset.value) return;
        
        li.dataset.value = player;
        // change Player
        player = player === 'O' ? 'X' : 'O';
        // run function check how win
        checkWin(key);
    })
})
function checkWin(key){
    let arraySet = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    arraySet.forEach(position => {
        let oWin = position.every(x => {
            return ticTacToes[x].dataset.value === 'O';
        });

        let xWin = position.every(x => {
            return ticTacToes[x].dataset.value === 'X';
        });

        
        if(oWin === true){
            alertWin('O WIN');
            return;
        }
        if(xWin === true){
            alertWin('X WIN');
            return;
        }

        // if no more blanks
        let countX = 0;
        let countO = 0;
        ticTacToes.forEach(li => {
            if(li.dataset.value === 'X'){
                countX++;
            }
            if(li.dataset.value === 'O'){
                countO++;
            }
        });

        if(countX + countO == 9){
            if(countX > countO){
                alertWin('X WIN');
            }else{
                alertWin('O WIN');
            }
        }
    })
}
function alertWin(message){
    let messageDiv = alertDiv.getElementsByClassName('message')[0];
    messageDiv.innerHTML = message;
    alertDiv.style.display = 'flex';

}
restartButton.addEventListener('click', function(){
    alertDiv.style.display = 'none';
    ticTacToes.forEach(li => {
        li.dataset.value = '';
    })
})