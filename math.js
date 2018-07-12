function a(x, y, z) {
	var answer = 5*x + 2*y - 3*z + 7;
	return answer;

}

var output = a(5, 5, 10);


function pythag (a, b) {
	function square (x) {
		var answer = x*x;
		return answer;
	}

	var aSquared = square(a);
	var bSquared = square(b);

	var answer = Math.sqrt(aSquared + bSquared);
	return answer
}

console.log(Math.sqrt);