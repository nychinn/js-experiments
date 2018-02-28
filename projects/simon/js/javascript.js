
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

const colours = [{
		'num': 1,
		'colour': 'green'
	},
	{
		'num': 2,
		'colour': 'red'
	},
	{
		'num': 3,
		'colour': 'blue'
	},
	{
		'num': 4,
		'colour': 'yellow'
	}
];

// set variable for the sequence computer plays
let sequence = [];

// set variable for the sequence user plays (clears every round)
let userSequence = [];
let count = 0;
let playerCount = 0;
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

				colours.forEach(item=> {
					if ( key === item.num ) {
						button = item.colour;
					} else {
						return;
					}
				});

				setTimeout(function() {
					$('.simonQuarter[data-colour="'+ button +'"]').addClass('j-active');
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
	$('.simonScore span').text(score);
}



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

	colours.forEach(item=> {
		if ( colour === item.colour ) {
			key = item.num;
			// console.log(key);
		} else {
			return;
		}
	});

	userSequence.push(key);

	if ( sequence[playerCount] === userSequence[playerCount] ) {
		console.log('its a match!');
		
		if ( playerCount === parseInt(sequence.length-1) ) {
			playerCount = 0;
			userSequence = [];
			score+=10;
			updateScore();
			newRound();

		} else {
			playerCount++;
			score+=5;
			updateScore();
			return;
		}

	} else {
		console.log('you lose!');
		userSequence = [];

		// enter lose sequence

		score=0;
		updateScore();
		playerCount= 0;
		$('.simonStart').show();
	}
});

// console.log(generateNum());

$(document).on('click', '.simonStart', initGame);
// initGame();




