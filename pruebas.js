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

/* const array = [1, 5, 3, 7];

// Checks whether an element is even
const even = (element) => element % 2 === 0;
console.log(array.some(even));

console.log(array.some(even));
// Expected output: true */

/* const numbers = [1, 2, 3, 4, 5];

const suma = numbers.reduce(
  (acumulador, elementoActual) => acumulador * elementoActual,
  1
);

console.log(suma);

test('should first', () => {
  const testData = [1, 10, 100];
  const x = 0;
  const op = (a, b) => {
    if (a > b) {
      return a;
    }

    return b;
  };

  const expected = 18;
  const result = reduceOfArray(testData, x, op);
  expect(result).toBe(expected);
});
 */
const pushArray = (arr, n) => {
  const answ = arr.length + 1;
  arr[arr.length] = n;
  return answ;
};

const arr = [1, 2, 3];
const num = 4;
console.log(pushArray(arr, num));
console.log(arr);
