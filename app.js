const gameBoard = (() =>{

    let board = [];;
    for(i = 0; i < 9; i++){
        board.push('');
    }
})();

const player = (name,marker) =>{
    return {name,marker};
}

const game= (() =>{

})();