 
 const list = [
	 'You have a lovely smile',
	 'goodbye',
	 'rawr',
	 'test'
 ]

 const adjectives = [
 	'lovely',
 	'beautiful',
 	'stunning',
 	'wonderful'
 ]

 const nouns = [
 	'smile',
 	'personality',
 	'presence'
 ]

 const quotes = [
 	'You miss 100% of the shots you don\'t take',
 	'Whatever you think you can or cannot, you are right',

 ]

 const button = document.querySelector('.button');
 const message = document.querySelector('.warmFuzzy');

 function random(array) {
 	return Math.floor((Math.random() * array.length));
 }


 function generate() {
 	let number = random(list);
 	return list[number];
 }

 function generate2() {
 	let adjective = adjectives[random(adjectives)];
 	let noun = nouns[random(nouns)];

 	return 'You have a ' + adjective + ' ' + noun;
 }

 function generateQuotes() {
	let number = random(quotes);
 	return list[number];
 }

 function showWarmFuzzy() {
 	let generated = generate();
 	message.innerHTML = generated;
 }

 button.addEventListener('click', showWarmFuzzy);
 showWarmFuzzy();













