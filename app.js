const endgameModal = document.getElementById("endgameModal");
function openEndgameModal() {
	endgameModal.classList.add("active");
	overlay.classList.add("active");
}
const player = (name, marker) => {
	return { name, marker };
};

const gameBoard = (() => {
	const gameboardDiv = document.querySelector(".gameboard");
	let board = [];
	for (let i = 0; i < 9; i++) {
		board.push("");
	}
	board.forEach((element, index) => {
		// var chosenValue = Math.random() < 0.5 ? "X" : "O";
		const gameSquare = document.createElement("div");
		gameSquare.className = "gamesquare";
		gameSquare.id = index;
		gameboardDiv.appendChild(gameSquare);
		// gameSquare.innerText = chosenValue;
	});
	Array.from(gameboardDiv.children).forEach((gameSquare, index) => {
		gameSquare.addEventListener("click", () => {
			//render player marker

			board[index] = game.activePlayer.marker;
			gameSquare.setAttribute("data", game.activePlayer.marker);
			gameSquare.innerText = game.activePlayer.marker;
			//update array value to match for the active player
			//remove event listener from the marked index so it can't be used
			gameSquare.style.pointerEvents = "none";
			//update num of slots left on board.
			game.slots -= 1;
			game.checkForWinner();
			setTimeout(function () {
				if (game.slots > 0) {
					let ranChoice = randomIntFromInterval(0, 8);
					while (
						board[ranChoice] == game.activePlayer.marker ||
						board[ranChoice] == game.oppenentPlayer.marker
					) {
						ranChoice = randomIntFromInterval(0, 8);
					}
					let opponentDiv = document.getElementById(ranChoice);
					if (board[ranChoice] != game.activePlayer.marker) {
						board[ranChoice] = game.oppenentPlayer.marker;
						opponentDiv.setAttribute("data", game.oppenentPlayer.marker);
						opponentDiv.innerText = game.oppenentPlayer.marker;
						opponentDiv.style.pointerEvents = "none";
						game.slots -= 1;
					}
				}
			}, 300);

			//check for winner
			game.checkForWinner();
			//check remaining board slots to determine if there's a tie
			if (game.slots == 0) {
				console.log("tie");
			}
		});
	});

	function randomIntFromInterval(min, max) {
		// min and max included
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
	return {
		board,
	};
})();

const game = (() => {
	const playerCharacter = player("Player 1", "X");
	const opponentCharacter = player("Player 2", "O");
	let slots = 9;
	let activePlayer = playerCharacter;
	let oppenentPlayer = opponentCharacter;
	const winningConditions = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	function checkForWinner() {
		winningConditions.forEach((condition) => {
			if (
				gameBoard.board[condition[0]] === this.activePlayer.marker &&
				gameBoard.board[condition[1]] === this.activePlayer.marker &&
				gameBoard.board[condition[2]] === this.activePlayer.marker
			) {
				console.log("winner");
				let div1 = document.getElementById(condition[0]);
				div1.style.backgroundColor = "#62ef77";
				let div2 = document.getElementById(condition[1]);
				div2.style.backgroundColor = "#62ef77";
				let div3 = document.getElementById(condition[2]);
				div3.style.backgroundColor = "#62ef77";
				openEndgameModal();
			}
			if (
				gameBoard.board[condition[0]] === this.oppenentPlayer.marker &&
				gameBoard.board[condition[1]] === this.oppenentPlayer.marker &&
				gameBoard.board[condition[2]] === this.oppenentPlayer.marker
			) {
				console.log("winner");
				let div1 = document.getElementById(condition[0]);
				div1.style.backgroundColor = "#62ef77";
				let div2 = document.getElementById(condition[1]);
				div2.style.backgroundColor = "#62ef77";
				let div3 = document.getElementById(condition[2]);
				div3.style.backgroundColor = "#62ef77";
				openEndgameModal();
			}
		});
	}
	return {
		slots,
		activePlayer,
		oppenentPlayer,
		checkForWinner,
	};
})();
