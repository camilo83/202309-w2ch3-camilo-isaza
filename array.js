export const arrayLength = (arr) => {
  let count = 0;

  // eslint-disable-next-line no-unused-vars
  for (const _item of arr) {
    count++;
  }

  return count;
};

export const pushArray = (arr, n) => {
  const x = arrayLength(arr);
  const answ = x + 1;
  arr[x] = n;
  return answ;
};

export const popArray = (arr) => {
  const c = arr.length;
  const x = arr[c - 1];
  return x;
};

export const unshiftArray = (arr) => {
  const x = arrayLength(arr);
  const answ = x + 1;
  return answ;
};

export const shiftArray = (arr) => {
  const c = arr.length;
  const x = arr[c - 1];
  return x;
};

export const includesArray = (arr, x) => {
  for (let i = 0; i < arrayLength(arr); i++) {
    if (arr[i] === x) {
      return true;
    }
  }

  return false;
};

export const indexOfArray = (arr, x) => {
  for (let i = 0; i < arrayLength(arr); i++) {
    if (arr[i] === x) {
      return i;
    }
  }

  return -1;
};

export const reduceOfArray = (arr, c, op) => {
  let counter = c;
  for (let i = 0; i < arrayLength(arr); i++) {
    counter = op(counter, arr[i]);
  }

  return counter;
};

export const joinArray = (arr) => {
  let r = '';
  for (let i = 0; i < arrayLength(arr); i++) {
    if (arrayLength(arr) === i + 1) {
      r += arr[i];
    } else {
      r += arr[i];
      r += '-';
    }
  }

  return r;
};
