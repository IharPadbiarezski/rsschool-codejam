module.exports = function sumOfOther(array) {
const newArr = [];
	for ( let i = 0; i < array.length; i++) {
  		newArr.push(array.reduce((a, b) => a + b) - array[i]);
  }
	return newArr;
}