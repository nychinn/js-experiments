 
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

 const button = document.querySelector('.button');
 const message = document.querySelector('.warmFuzzy');

 function random(array) {
 	return Math.floor((Math.random() * array.length));
 }

 function generate() {
 	let random = Math.floor( (Math.random() * list.length));
 	return list[random];
 }

 function generate2() {
 	let adjective = adjectives[random(adjectives)];
 	let noun = nouns[random(nouns)];

 	return 'You have a ' + adjective + ' ' + noun;
 }

 function showWarmFuzzy() {
 	let generated = generate();
 	message.innerHTML = generated;
 }

 button.addEventListener('click', showWarmFuzzy);
 showWarmFuzzy();