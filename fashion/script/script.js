
function myMove() {
	const female = document.getElementById("female");
	console.log(female)	
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 610) {
      clearInterval(id);
    } else {
      pos++; 
      female.style.left = pos + 'px'; 
    }
  }
}


function myMove2() {
	const male = document.getElementById("male");
  var position = 0;
  var i = setInterval(frame, 5);
  function frame() {
    if (position == 610) {
      clearInterval(i);
    } else {
      position++; 
     
      male.style.right = position + 'px'; 
    }
  }
}


myMove();
myMove2();


items = document.getElementsByClassName('nav-link')

function transform() { 
	for(var i = 0; i < items.length; i++){
		items[i].addEventListener('mouseover', function(event) { 
			event.target.classList.add("mystyle")
			event.target.style.color = 'black'
  		}, false);
		items[i].addEventListener('mouseleave', function(event){
			event.target.classList.remove('mystyle')
			event.target.style.color = '#4A5759'
			event.target.style.fontSize = '25px'
		}, false);

	} 
	};


   
transform();