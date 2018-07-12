//#1

// function sign(n) {
// 	if (n>=10) {
// 		console.log("BIG!");
// 	} else {
// 		console.log("small");
// 	}
// }

// sign(100);
// sign(1);
// sign(0);


// #2
// function sign(n) {
// 	if (n<0) {
// 		console.log("negative");
// 	} else if (n>0) {
// 		console.log("positive");
// 	} else {
// 		console.log("zero");
// 	}
// }

// sign(100);
// sign(0);
// sign(-2);


// #3
// function sign(x, y) {
// 	if (x === y) {
// 		console.log("same");
// 	} else if (x === y) {
// 		console.log("different");
// 	}
// }

// sign(100, 300);
// sign(1, 1);
// sign(0, 3);

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Choose a function: (1) greater than or smaller than (2) equal or not equal arguments. ', (answer) => {
  if (answer == "1" || answer == "greater than or smaller than" || answer == "Greater than or smaller than"){
  	rl.question('Choose a number to base the assessment off of (3>0 <-----). ' (assessmentBase) => {
  	rl.question('Now choose a number to compare to the base of the assessment (-----> 3>0). ' (assessmentComp) => {
  	function sign(assessmentComp) {
		if (assessmentComp>assessmentBase) {
			console.log("positive");
		} else if (assessmentComp<assessmentBase) {
			console.log("negative");
		} else {
			console.log("zero");
		}
	}
  	}
  	}
  }
  rl.close();
});