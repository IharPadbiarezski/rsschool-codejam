function sumOfOther(array) {
var newArr = [];
	for ( var i = 0; i < array.length; i++) {
  		newArr.push(array.reduce((a, b) => a + b) - array[i]);
  }
	return newArr;
}

