
// show interaction when you click mouse (visual and sound)
// different note for each colour
// listen mode: view sequence
// play mode: your turn to copy the sequence

//-- generate sequence
// random number between 1 and 4, each assigned different colour
// 1: green, 2: red, 3: blue, 4: yellow
// add random generated number into an array

//-- check sequence
// check the number pressed, and see if it matches the sequence
// if it matches, continue. if not, you lose

//-- score count
// every correct match can be 5
// every correct round can be 10

//-- what happens when you lose?
// go back to the beginning of the game

//-- what happens when you win?
// sparkles?



const colours = [{
		'num': 1,
		'colour': 'green',
		'sound': 'sounds/a1s.wav'
	},
	{
		'num': 2,
		'colour': 'red',
		'sound': 'sounds/f1.wav'
	},
	{
		'num': 3,
		'colour': 'blue',
		'sound': 'sounds/g1.wav'
	},
	{
		'num': 4,
		'colour': 'yellow',
		'sound': 'sounds/c1.wav'
	}
];

// set variable for the sequence computer plays
let sequence = [];

// set variable for the sequence user plays (clears every round)
let userSequence = [];
let count = 0;
let playerCount = 0;
let highScore = 0;
let score = 0;



// timeout
const setDelay = function(i) {
	setTimeout(function() { 
		console.log(i); 
	}, 1000);
}

// generate random number from 1 - 4
const generateNum = function() {
	return Math.floor(Math.random() * 4) + 1;
}

const newRound = function() {
	// add number to sequence
	sequence.push(generateNum());
	count++;

	// play sequence
	for ( var i=0; i < sequence.length; i++ ) {

		(function(i) {
			setTimeout(function() {
				// console.log(i);

				var key = sequence[i];
				var button = '';
				var sound = '';

				colours.forEach(item=> {
					if ( key === item.num ) {
						button = item.colour;
						sound = item.sound;
					} else {
						return;
					}
				});

				setTimeout(function() {
					$('.simonQuarter[data-colour="'+ button +'"]').addClass('j-active');
					$.playSound(sound);
				}, 500);

				setTimeout(function() {
					$('.simonQuarter[data-colour="'+ button +'"]').removeClass('j-active');
				}, 1000);

			}, i * 1000);
		}(i));
	}

	console.log(sequence);
}



// update score
const updateScore = function() {
	$('.simonScore .scoreText').text(score);
}


// update high score
const updateHighScore = function() {
	if ( score > highScore ) {
		highScore = score;
		$('.simonHighScore .highScoreText').text(highScore);
	}
}

// if there's local storage
const updateLocalHighScore = function() {
	if ( storageAvailable('localStorage') ) {
		
		if ( parseInt(localStorage.highScore) > highScore ) {
			highScore = localStorage.highScore;
		} else {
			localStorage.highScore = highScore;
		}

		$('.simonHighScore .highScoreText').text(localStorage.highScore);
	}
}

updateLocalHighScore();




// main function that runs the game
const initGame = function() {
	if ( $('.simonStart').length ) {
		$('.simonStart').hide();
	}

	newRound();
}



$('.simonQuarter').on('mousedown', function() {
	$(this).addClass('j-active');
});



$('.simonQuarter').on('mouseup', function() {
	$(this).removeClass('j-active');

	var colour = $(this).attr('data-colour');
	var key;
	var sound;

	colours.forEach(item=> {
		if ( colour === item.colour ) {
			key = item.num;
			sound = item.sound;
			// console.log(key);
		} else {
			return;
		}
	});

	userSequence.push(key);
	$.playSound(sound);

	if ( sequence[playerCount] === userSequence[playerCount] ) {
		console.log('its a match!');
		
		if ( playerCount === parseInt(sequence.length-1) ) {
			playerCount = 0;
			userSequence = [];
			score+=100;
			updateScore();

			setTimeout(function() {
				$.playSound('sounds/success.wav');
				$('.simonWinRound').addClass('j-active');
			}, 1000);

			setTimeout(function() {
				newRound();
				$('.simonWinRound').removeClass('j-active');
			}, 2000);
			

		} else {
			playerCount++;
			score+=50;
			updateScore();
			return;
		}

	} else {
		console.log('you lose!');
		userSequence = [];
		sequence = [];

		// enter lose sequence

		updateScore();
		updateHighScore();
		updateLocalHighScore();

		console.log(score, highScore, localStorage.highScore);
		
		setTimeout(function() {
			$.playSound('sounds/lose.wav');
			$('.simonLose').addClass('j-active');
		}, 1000);

		setTimeout(function() {
			score=0;
			playerCount= 0;
			$('.simonLose').removeClass('j-active');
		}, 2000);

		setTimeout(function() {
			$('.simonStart').show();
		}, 2300);
	}
});


$(document).on('click', '.simonStart', initGame);


function storageAvailable(type) {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
}