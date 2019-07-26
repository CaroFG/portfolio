
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

$('#iconified').on('keyup', function() {
    var input = $(this);
    if(input.val().length === 0) {
        input.addClass('empty');
    } else {
        input.removeClass('empty');
    }
});