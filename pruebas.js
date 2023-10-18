/* Const a = [1, 2, 3];
const b = 5;
const c = a.push(b);
console.log(c);
console.log(a);

console.log((a[a.length] = b)); */

/* const popArray = (arr) => {
  const c = arr.length;
  const x = arr[c - 1];
  return x;
};

const arr = [[], []];
console.log(popArray(arr)); */

const array = [1, 5, 3, 7];

// Checks whether an element is even
const even = (element) => element % 2 === 0;
console.log(array.some(even));

console.log(array.some(even));
// Expected output: true
