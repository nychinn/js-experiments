


const arrayConcat = (arr, ...args) => arr.concat(...args);

console.log( arrayConcat([1], 2, [3], [[4]]) );
console.log( arrayConcat( ['fruit'], 'apple', 'banana', ['moon', 'mars', 'jupiter'], [['gold', 'silver']] ) );