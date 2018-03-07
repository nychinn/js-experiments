
//-- let player choose weapon: rock, paper, scissors
//-- randomly generate computer's turn

let playerSelection = '';
let computerSelection = '';
let winText = '';



function playRound() {

}

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

$(document).on('click', '.chooseWeapon', function() {
	computerSelection = computerPlay();
	playerSelection = $(this).data('control');

	console.log('Computer: ' + computerSelection, '| Player: ' + playerSelection);

	if ( playerSelection === computerSelection ) {
		showImage('player', playerSelection);
		showImage('computer', computerSelection);
		winText = 'this is a draw!';
		// console.log('this is a draw!');
	} else {
		if ( playerSelection === 'rock' ) {
			showImage('player', 'rock');
			if ( computerSelection === 'paper' ) {
				showImage('computer', 'paper');
				winText = 'computer wins!';
				// console.log('computer wins!');
			} else {
				showImage('computer', 'scissors');
				winText = 'player wins!';
				// console.log('player wins!');
			}
		} else if ( playerSelection === 'paper' ) {
			showImage('player', 'paper');
			if ( computerSelection === 'scissors' ) {
				showImage('computer', 'scissors');
				winText = 'computer wins!';
				// console.log('computer wins!');
			} else {
				showImage('computer', 'rock');
				winText = 'player wins!';
				// console.log('player wins!');
			}
		} else {
			showImage('player', 'scissors');
			if ( computerSelection === 'rock' ) {
				showImage('computer', 'rock');
				winText = 'computer wins!';
				// console.log('computer wins!');
			} else {
				showImage('computer', 'paper');
				winText = 'player wins!';
				// console.log('player wins!');
			}
		}
	}

	$('.rpsControls').addClass('j-hidden');
	$('.rpsResult').text(winText);

	setTimeout(function() {
		$('.rpsResult').addClass('j-show');
	}, 300);
});






