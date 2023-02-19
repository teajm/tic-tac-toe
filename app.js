const gameBoard = (() =>{
    const gameboardDiv = document.querySelector('.gameboard');
    let board = [];
    for(let i = 0; i < 9; i++){
        board.push('');
    }
    board.forEach((element,index) => {
        const gameSquare = document.createElement('div');
        gameSquare.className = 'gamesquare';
        gameboardDiv.appendChild(gameSquare);
    })
    Array.from(gameboardDiv.children).forEach((gameSquare, index) => {
        gameSquare.addEventListener('click', () =>{
            //render player marker

            //update array value to match for the active player

            //remove event listener from the marked index so it can't be used
            gameSquare.style.pointerEvents = 'none';
            //update num of slots left on board.
            game.slots -= 1;

            //check for winner

            //check remaining board slots to determine if there's a tie



        })


    });

})();


const player = (name,marker) =>{
    return {name,marker};
}

const game= (() =>{
    let slots = 9;
})();

