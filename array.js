export const arrayLength = (arr) => {
  let count = 0;

  // eslint-disable-next-line no-unused-vars
  for (const _item of arr) {
    count++;
  }

  return count;
};

export const pushArray = (arr) => {
  const x = arrayLength(arr);
  const answ = x + 1;
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

export const someArray = (arr, x) => {
  for (let i = 0; i < arrayLength(arr); i++) {
    if (arr[i] === x) {
      return true;
    }
  }

  return false;
};
