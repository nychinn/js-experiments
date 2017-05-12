// Based on https://github.com/Sze-warrior/Javascript-hero-animation


window.Velocity = window.Velocity || (window.jQuery || window.Zepto || window).Velocity;
//Link to use JQuery but still keep VelocityJS code written in Vanilla Javascript: https://github.com/julianshapiro/velocity/issues/722

var wingLeft = document.querySelector('.heroBanner .wingLeft img');
var wingRight = document.querySelector('.heroBanner .wingRight img');
var midImg = document.querySelector('.heroBanner .middle img');
var title = document.querySelector('.heroBanner h1');
var section = document.querySelectorAll('section');
var listItems = document.querySelectorAll('.list li');

var floatBanner = document.querySelector('.heroFloat');
var leviImg = document.querySelector('.heroFloat img');

var instance = new SplitType('.animText', {
	split: 'words, chars', 
	position: 'absolute'
});

function animateIn(){
	// animate the first banner
	Velocity(wingLeft, {translateX:-100, opacity: 0}, {duration:1, easing:"spring"});
	Velocity(wingLeft, {translateX:0, opacity: 1}, {duration:1500, easing:"spring"});

	Velocity(wingRight, {translateX:100, opacity: 0}, {duration:1, easing:"spring"});
	Velocity(wingRight, {translateX:0, opacity: 1}, {duration:1500, easing:"spring"});

	Velocity(midImg, {translateY:0, opacity: 0}, {duration:1, easing:"ease-in-out"});
	Velocity(midImg, {translateY:0, opacity: 1}, {duration:1000, delay: 1000, easing:"ease-in-out"});

	Velocity(title, {translateY: 200, opacity: 0}, {duration: 1, easing:"ease-in-out"});
	Velocity(title, {translateY: 0, opacity: 1}, {duration: 1000, delay: 1000, easing:"ease-in-out"});
	Velocity(title, {opacity: .75}, {duration: 250, easing:"ease-in-out"});
	Velocity(title, {opacity: 1}, {duration: 250, easing:"ease-in-out"});

	// animate the second banner
	Velocity(floatBanner, {backgroundPositionY: 0 }, {duration: 1, easing: "ease-in-out"});
	Velocity(floatBanner, {backgroundPositionY: -250 }, {duration: 1000, easing: "ease-in-out"});

	Velocity(leviImg, {translateY: -1000 }, {duration: 1, easing: "ease-in-out"});
	Velocity(leviImg, {translateY: 100 }, {duration: 1500, delay: 500, easing: "ease-in"});

	Velocity(leviImg, {translateY: 125 }, {duration: 1000, loop: 10, easing: "swing"});



	// animate the list items
	Velocity(section, {opacity:0}, {duration: 1});
	Velocity(section, 'transition.flipYIn', {stagger:500, duration:500, delay:500, easing:"ease-in-out"});
}

function charsAnimateIn() {
	instance = new SplitType('.animText', {
		split: 'words, chars', 
		position: 'absolute'
	});
	
	Velocity( instance.chars, 'transition.perspectiveLeftIn', { duration: 500, stagger: 100 })
}

function listAnimateIn() {
	Velocity(listItems, {opacity: 0});
	Velocity(listItems, 'transition.slideLeftIn', {stagger: 500, duration: 500, delay: 3000});
}


window.addEventListener('load', animateIn);
window.addEventListener('load', charsAnimateIn);
window.addEventListener('load', listAnimateIn);
window.addEventListener('resize', charsAnimateIn);





