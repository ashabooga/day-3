// var arr = [1, 2, 3, 4, 5, 6 ,7, 8, 9, 10];

// var store = 0;
// for (var x of arr) {
// 	store = x + store;
// 	console.log (store);
// }

var arr = ["hello", "goodbye", "yo"]

function upTo(low, hi) {
	var answer = [];
	for (var i = low; i <= hi; i = i + 1) {
		answer.push(i);
	}
	return answer;
}

console.log(upTo(10, 50));