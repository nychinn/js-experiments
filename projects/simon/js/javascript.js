
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
		// setDelay(i);

		(function(i) {
			setTimeout(function() {
				console.log(i);
			}, 1000);
		}(i));

		var key = sequence[i];
		var button = '';

		colours.forEach(item=> {
			if ( key === item.num ) {
				button = item.colour;
				// console.log(button);
			} else {
				return;
			}
		});

		// setTimeout(function() {
			$('.simonQuarter[data-colour="'+ button +'"]').addClass('j-active');
		// }, 300);

		setTimeout(function() {
			$('.simonQuarter[data-colour="'+ button +'"]').removeClass('j-active');
		}, 500);
	}

	console.log(sequence);

	// users turn to copy

	// check if sequence is the same
}

// const playerRound = function() {

// }

// main function that runs the game
const initGame = function() {
	// sequence.push(generateNum());
	// console.log(sequence);

	newRound();
}



$('.simonQuarter').on('mousedown', function() {
	var colour = $(this).attr('data-colour');
	var key;
	$(this).addClass('j-active');

	colours.forEach(item=> {
		if ( colour === item.colour ) {
			key = item.num;
			// console.log(key);
		} else {
			return;
		}
	});

	userSequence.push(key);

	console.log('hello:', sequence[playerCount], userSequence[playerCount]);

	if ( sequence[playerCount] === userSequence[playerCount] ) {
		console.log('its a match!');
		
		
		if ( playerCount === parseInt(sequence.length-1) ) {
			playerCount = 0;
			userSequence = [];
			
			newRound();

		} else {
			playerCount++;
			return;
		}

	} else {
		console.log('you lose!');
		userSequence = [];
		playerCount= 0;
	}

	// console.log('down');
});



$('.simonQuarter').on('mouseup', function() {
	$(this).removeClass('j-active');
	// console.log('up');
});

// console.log(generateNum());

// $(document).on('click', '.simonStart', initGame);
initGame();




