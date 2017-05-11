// Based on https://github.com/Sze-warrior/Javascript-hero-animation


window.Velocity = window.Velocity || (window.jQuery || window.Zepto || window).Velocity;
//Link to use JQuery but still keep VelocityJS code written in Vanilla Javascript: https://github.com/julianshapiro/velocity/issues/722

var wingLeft = document.querySelector('.hero .wingLeft img');
var wingRight = document.querySelector('.hero .wingRight img');
var midImg = document.querySelector('.hero .middle img');
var title = document.querySelector('.hero h1');
var section = document.querySelectorAll('section');

function animateIn(){
	Velocity(wingLeft, {translateX:-100, opacity: 0}, {duration:1, easing:"ease-in-out"});
	Velocity(wingLeft, {translateX:0, opacity: 1}, {duration:1500, easing:"ease-in-out"});

	Velocity(wingRight, {translateX:100, opacity: 0}, {duration:1, easing:"ease-in-out"});
	Velocity(wingRight, {translateX:0, opacity: 1}, {duration:1500, easing:"ease-in-out"});

	Velocity(midImg, {translateY:-200, opacity: 0}, {duration:1, easing:"ease-in-out"});
	Velocity(midImg, {translateY:0, opacity: 1}, {duration:1000, easing:"ease-in-out"});

	Velocity(title, {translateY: 200, opacity: 0}, {duration: 1, easing:"ease-in-out"});
	Velocity(title, {translateY: 0, opacity: 1}, {duration: 1000, easing:"ease-in-out"});

	Velocity(section, {opacity:0}, {duration: 1});
	Velocity(section, 'transition.flipYIn', {stagger:500, duration:500, delay:500, easing:"ease-in-out"});
}


window.addEventListener('load', animateIn);

