
let size = 16;

function createGridItems() {
	var html = '';
	for ( let i=0; i<(size*size); i++ ) {
		html += '<div class="block"></div>';
	}
	return html;
}

function createGrid() {
	$('.etchGrid').append(createGridItems());

	$('.block').css('width', (100 / size) + '%' );
	$('.block').css('padding-bottom', (100 / size) + '%' );
}

function restartGrid() {
	size = prompt("What size grid would you like? (eg. 64)");
	$('.etchGrid').empty();
	createGrid();
}

function clearGrid() {
	$('.etchGrid').empty();
	createGrid();
}

$(document).on('mouseenter', '.block', function() {
	let opacity = $(this).css('opacity');
	if ( $(this).css('opacity') < 1 ) {
		$(this).css('opacity', (parseFloat(opacity) + 0.1));
	}
});

$(document).on('click', '.etchRestart', restartGrid);
$(document).on('click', '.etchClear', clearGrid);

createGrid();