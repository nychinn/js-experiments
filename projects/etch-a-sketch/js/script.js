
let size = 16; 
let grid = document.querySelector('.etchGrid');

function createGridItems() {
	let html = '';
	let num = size*size;
	for ( let i=0; i<num; i++ ) {
		html += '<div class="block"></div>';
	}
	return html;
}

function newSize() {
	size = $('.etchSize input').val();
}

function createGrid() {
	grid.innerHTML = createGridItems();

	$('.block').css('width', (100 / size) + '%' );
	$('.block').css('padding-bottom', (100 / size) + '%' );

	// let block = document.querySelectorAll('.block');

	// for ( let i=0; i<block.length; i++ ) {
	// 	console.log(block[i]);
	// 	block[i].style.width = (100 / size) + '%';
	// 	block[i].style.paddingBottom = (100 / size) + '%';
	// }

}

function restartGrid() {
	// size = prompt("What size grid would you like? (eg. 64)");
	grid.innerHTML = '';
	createGrid();
}

function clearGrid() {
	grid.innerHTML = '';
	createGrid();
}

$(document).on('mouseenter', '.block', function(e) {
	let opacity = Array(e.target)[0].style.opacity;

	// console.log(Array(e.target)[0].style.opacity);

	if ( opacity < 1 ) {
		Array(e.target)[0].style.opacity = (parseFloat(opacity) + 0.1)
	}

	if ( opacity == '' ) {
		Array(e.target)[0].style.opacity = 0.1;
	} else if ( opacity < 1 ) {
		Array(e.target)[0].style.opacity = (parseFloat(opacity) + 0.1);
	}
});

$(document).on('keyup', function(e) {
	if ( $('.etchSize input').is(':focus') && e.which == 13) {
		createGrid();
	}
});

$('.etchSize input').on('keyup', function() {
	newSize();
});

document.querySelector('.etchRestart').addEventListener('click', restartGrid);

createGrid();



