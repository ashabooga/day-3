for (var i = 0; i < 1300; i++) {
	document.querySelector(".container").innerHTML += "<div class='box'></div>";
}

var arrayOfBoxes = document.querySelectorAll(".box");

for (var i = 0; i < arrayOfBoxes.length; i++) {
	if(i % Math.floor(100*(Math.random())) === 0){
		arrayOfBoxes[i].style.background = "purple";
	}
}