
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

// generate random number from 1 - 4
const generateNum = function() {
	return Math.floor(Math.random() * 4) + 1;
}

const newRound = function() {
	
}

// main function that runs the game
const initGame = function() {
	sequence.push(generateNum());
	console.log(sequence);
}

$('.simonQuarter').on('mousedown', function() {
	$(this).addClass('j-active');
	console.log('down');
});

$('.simonQuarter').on('mouseup', function() {
	$(this).removeClass('j-active');
	console.log('up');
});

// console.log(generateNum());

$(document).on('click', '.simonStart', initGame);




