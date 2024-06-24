// A cheat sheet of array methods:

// To add/remove elements:

// splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.
// slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.
// concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.
// To search among elements:

// indexOf/lastIndexOf(item, pos) – look for item starting from position pos, and return the index or -1 if not found.
// includes(value) – returns true if the array has value, otherwise false.
// find/filter(func) – filter elements through the function, return first/all values that make it return true.
// findIndex is like find, but returns the index instead of a value.
// To iterate over elements:

// forEach(func) – calls func for every element, does not return anything.
// To transform the array:

// map(func) – creates a new array from results of calling func for every element.
// sort(func) – sorts the array in-place, then returns it.
// reverse() – reverses the array in-place, then returns it.
// split/join – convert a string to array and back.
// reduce/reduceRight(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.
// Additionally:

// Array.isArray(value) checks value for being an array, if so returns true, otherwise false.
// Please note that methods sort, reverse and splice modify the array itself.



//splice modifies the array on which it is operating
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const greaterThanFours = myArray.filter((a) => a > 4);

console.log(greaterThanFours)


// myArray.splice(1, 4);

// console.log(myArray);
const string = 'salman';
string.startsWith()

const anotherArray = ['salman', 'sunny', 'hrithik', 'shaikh'];
const startWiths = anotherArray.filter((a) => a.startsWith('s'));

console.log(startWiths)

