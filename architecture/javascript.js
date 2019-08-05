// TYPING EFFECT

var u = 0;
var txt = "L'architecte, c'est formuler les problèmes avec clarté.";
txt.toUpperCase(); /* The text */
var speed = 30; /* The speed/duration of the effect in milliseconds */


function typeWriter() {
  if (u < txt.length) {
   var x = document.getElementById("typed").textContent += txt.charAt(u);
    u++;
    setTimeout(typeWriter, speed);
    console.log(x);
  }
}

typeWriter();


// FILTERING IMAGES

var image = document.getElementsByClassName("image");

function test() {
	for(var i = 0; i<image.length; i++) {

		image[i].addEventListener('mouseover', function(event) {
			event.target.style.filter="grayscale(0%)"
		}, false);
		image[i].addEventListener('mouseout', function(event) {
			event.target.style.filter="grayscale(100%)"
		}, false);
	}
};

test();


// const imageTest = {
// 	curviness=1.25, 
// 	autoRotate = true, 
// 	values:[
// 	{x:100, y:-20},
// 	{x:300, y:10},
// 	{x:500, y:100},
// 	{x:700, y:-20},
// 	{x:100, y:-70},
// 	{x:100, y:100},

// 	]
// };

// const tween =  new TimeLineLite();

// tween.add(
// 	TweenLite.to(".image", 1, {
// 		bezier: flightPath, 
// 		ease: Power1.easeInOut
// 	})
// 	);