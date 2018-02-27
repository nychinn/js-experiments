
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

$('.simonQuarter').on('mousedown', function() {
	$(this).addClass('j-active');
	console.log('down');
});

$('.simonQuarter').on('mouseup', function() {
	$(this).removeClass('j-active');
	console.log('up');
});