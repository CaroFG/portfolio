
function myMove() {
	const female = document.getElementById("female");
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







function transform() { 
  items = document.getElementsByClassName('navbar2-link')
	for(var i = 0; i < items.length; i++){
		items[i].addEventListener('mouseover', function(event) { 
			event.target.classList.add("mystyle")
  		}, false);
		items[i].addEventListener('mouseleave', function(event){
			event.target.classList.remove('mystyle')
		}, false);

	} 
	};


