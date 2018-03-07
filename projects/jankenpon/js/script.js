
//-- let player choose weapon: rock, paper, scissors
//-- randomly generate computer's turn

let playerSelection = '';
let computerSelection = '';
let winText = '';

function computerPlay() {
	const choices = ['rock', 'paper', 'scissors'];
	let choice = Math.floor(Math.random() * 3);
	return choices[choice];
}

function showImage(player, weapon) {
	if ( !$('.rpsGame').hasClass('j-show') ) {
		!$('.rpsGame').addClass('j-show')
	}

	if ( player == 'computer' ) {
		if (weapon == 'rock') {
			$('.rpsComputer .rpsImage').attr('src', 'img/hand-rock.png');
		} else if (weapon == 'paper') {
			$('.rpsComputer .rpsImage').attr('src', 'img/hand-paper.png');
		} else {
			$('.rpsComputer .rpsImage').attr('src', 'img/hand-scissors.png');
		}
		
	} else if ( player == 'player' ) {
		if (weapon == 'rock') {
			$('.rpsPlayer .rpsImage').attr('src', 'img/hand-rock.png');
		} else if (weapon == 'paper') {
			$('.rpsPlayer .rpsImage').attr('src', 'img/hand-paper.png');
		} else {
			$('.rpsPlayer .rpsImage').attr('src', 'img/hand-scissors.png');
		}
	} else {
		return;
	}
}

function checkWinner() {
	if ( playerSelection === computerSelection ) {
		showImage('player', playerSelection);
		showImage('computer', computerSelection);
		winText = 'this is a draw!';
	} else {
		if ( playerSelection === 'rock' ) {
			showImage('player', 'rock');
			if ( computerSelection === 'paper' ) {
				showImage('computer', 'paper');
				winText = 'computer wins!';
			} else {
				showImage('computer', 'scissors');
				winText = 'player wins!';
			}
		} else if ( playerSelection === 'paper' ) {
			showImage('player', 'paper');
			if ( computerSelection === 'scissors' ) {
				showImage('computer', 'scissors');
				winText = 'computer wins!';
			} else {
				showImage('computer', 'rock');
				winText = 'player wins!';
			}
		} else {
			showImage('player', 'scissors');
			if ( computerSelection === 'rock' ) {
				showImage('computer', 'rock');
				winText = 'computer wins!';
			} else {
				showImage('computer', 'paper');
				winText = 'player wins!';
			}
		}
	}
}

function showResult() {
	$('.rpsControls').addClass('j-hidden');
	$('.rpsResult').text(winText);

	setTimeout(function() {
		$('.rpsResult').addClass('j-show');
		$('.restart').addClass('j-show');
	}, 300);
}

function clearGame() {
	playerSelection = '';
	computerSelection = '';
	winText = '';

	$('.rpsControls').removeClass('j-hidden');
	$('.rpsGame').removeClass('j-show')
	$('.rpsResult').removeClass('j-show');
	$('.restart').removeClass('j-show');
}

$(document).on('click', '.chooseWeapon', function() {
	computerSelection = computerPlay();
	playerSelection = $(this).data('control');

	// console.log('Computer: ' + computerSelection, '| Player: ' + playerSelection);

	checkWinner();
	showResult();
});

$(document).on('click', '.restart', function() {
	clearGame();
});






