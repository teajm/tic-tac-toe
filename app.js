
const player = (name,marker) =>{
    return {name,marker};
}

const gameBoard = (() =>{ 
    const gameboardDiv = document.querySelector('.gameboard');
    let board = [];
    for(let i = 0; i < 9; i++){
        board.push('');
    }
    board.forEach((element,index) => {
        // var chosenValue = Math.random() < 0.5 ? "X" : "O";
        const gameSquare = document.createElement('div');
        gameSquare.className = 'gamesquare';
        gameSquare.id = index;
        gameboardDiv.appendChild(gameSquare);
        // gameSquare.innerText = chosenValue;
    })
    Array.from(gameboardDiv.children).forEach((gameSquare, index) => {
        gameSquare.addEventListener('click', () =>{
            //render player marker

            board[index] = game.activePlayer.marker;
            gameSquare.setAttribute('data', game.activePlayer.marker);
            gameSquare.innerText = game.activePlayer.marker;
            //update array value to match for the active player
            console.log(index);
            //remove event listener from the marked index so it can't be used
            gameSquare.style.pointerEvents = 'none';
            //update num of slots left on board.
            game.slots -= 1;
            if(game.slots > 0){
                let ranChoice = randomIntFromInterval(0,8);
                let opponentDiv = document.querySelector('#' + ranChoice);
                if (board[ranChoice] !=  game.activePlayer.marker){
                    board[ranChoice] = game.oppenentPlayer.marker;
                    opponentDiv.setAttribute('data',game.oppenentPlayer.marker);
                    opponentDiv.innerText= game.oppenentPlayer.marker;
                }
            }
            //check for winner

            //check remaining board slots to determine if there's a tie 

        })

    });
    return{
        board
    };

})();

const game = (() =>{
    const playerCharacter = player('Player 1', 'X');
    const opponentCharacter = player('Player 2', 'O');
    let slots = 9;
    let activePlayer = playerCharacter;
    let oppenentPlayer = opponentCharacter;
    return{
        slots,
        activePlayer,
        oppenentPlayer
    };
})();




function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}