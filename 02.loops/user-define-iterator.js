// get the iterator object from array
let arr = [1, 2, 3, 4, 5];
let iterator = arr[Symbol.iterator]();


console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// user define iterator
console.log("------------------------------------- user define iterator --------------------------------");

function userDefinedIterator(arr) {
  let index = 0;
  return {
    next() {
      if (index < arr.length)
        return { value: arr[index++], done: false };
      return { value: undefined, done: true };
    }
  };
}

let anotherArr = [1, 2, 3, 4, 5];
const newIter = userDefinedIterator(anotherArr);
console.log(newIter.next());
console.log(newIter.next());
console.log(newIter.next());
console.log(newIter.next());
console.log(newIter.next());
console.log(newIter.next());
