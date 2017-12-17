


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

var arrayDiffOriginal = "[" + arrayDiffA + "], [" + arrayDiffB + "]";
var arrayDiffOutput = difference(arrayDiffA, arrayDiffB);

$('.arrayDiffOriginal').text(arrayDiffOriginal);
$('.arrayDiffOutput').text( JSON.stringify(arrayDiffOutput) );




// -- Array Intersection
const intersection = (a, b) => {
	const s = new Set(b);
	return a.filter(x => s.has(x));
};

var arrayIntA = ['betty', 'jughead', 'toni', 'veronica'];
var arrayIntB = ['betty', 'archie', 'veronica', 'jennifer', 'valerie'];

var arrayIntOriginal = "[" + arrayIntA + "], [" + arrayIntB + "]";
var arrayIntOutput = intersection(arrayIntA, arrayIntB);

$('.arrayIntOriginal').text(arrayIntOriginal);
$('.arrayIntOutput').text( JSON.stringify(arrayIntOutput) );





// -- Array Max
const arrayMax = arr => Math.max(...arr);

var arrayMaxArr = [10, 1, 5, 625, 86];

var arrayMaxOriginal = "[" + arrayMaxArr + "]";
var arrayMaxOutput = arrayMax(arrayMaxArr);

$('.arrayMaxOriginal').text(arrayMaxOriginal);
$('.arrayMaxOutput').text(arrayMaxOutput);





// -- Array Min
const arrayMin = arr => Math.min(...arr);

var arrayMinArr = [10, 2, 85, 72];

var arrayMinOriginal = "[" + arrayMinArr + "]";
var arrayMinOutput = arrayMin(arrayMinArr);

$('.arrayMinOriginal').text(arrayMinOriginal);
$('.arrayMinOutput').text(arrayMinOutput);





// -- Array Chunk
const chunk = (arr, size) =>
	Array.from({length: Math.ceil(arr.length / size)}, (v, i) => arr.slice(i * size, i * size + size) );

var arrChunk = [1,2,3,4,5,6,6,7,8,9];

var arrayChunkOriginal = "[" + arrChunk + "]";
var arrayMinOutput = chunk(arrChunk, 3) ;

$('.arrayChunkOriginal').text(arrayChunkOriginal);
$('.arrayChunkOutput').text( JSON.stringify(arrayMinOutput) );




// -- Array Compact







