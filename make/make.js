module.exports = function make(...numbers) {
    const arr = numbers;
    return function createClosure(...args) {
          if (typeof args[0] == 'function') {
            const typeFunction = args[0];
            return arr.reduce((acc, item) => typeFunction(acc, item));
          }
        arr.push(...args);
        return createClosure;
    }
}