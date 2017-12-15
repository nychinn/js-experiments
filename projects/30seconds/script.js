


// -- Array Concatenation
const arrayConcat = (arr, ...args) => arr.concat(...args);

var arrayConcatOriginal = "['fruit'], 'apple', 'banana', ['moon', 'mars', 'jupiter'], [['gold', 'silver']]";
var arrayConcatOutput = arrayConcat( ['fruit'], 'apple', 'banana', ['moon', 'mars', 'jupiter'], [['gold', 'silver']] );

$('.arrayConcatOriginal').text(arrayConcatOriginal);
$('.arrayConcatOutput').text( JSON.stringify(arrayConcatOutput) );




// -- Array Difference
const difference = (a, b) => {
	const s = new Set(b);
	return a.filter(x => !s.has(x));
};

var arrayDiffA = ['pikachu', 'charmander', 'squirtle', 'bulbasaur'];
var arrayDiffB = ['jigglypuff', 'pikachu'];

var arrayDiffOriginal = "[" + arrayA + "], [" + arrayB + "]";
var arrayDiffOutput = difference(arrayA, arrayB);

$('.arrayDiffOriginal').text(arrayDiffOriginal);
$('.arrayDiffOutput').text( JSON.stringify(arrayDiffOutput) );




// -- Array Intersection
const intersection = (a, b) => {
	const s = new Set(b);
	return a.filter(x => s.has(x));
};

var arrayIntA;
var arrayIntB;

var arrayIntOriginal;
var arrayIntOutput;








