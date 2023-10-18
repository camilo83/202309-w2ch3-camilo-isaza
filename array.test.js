import {
  arrayLength,
  pushArray,
  popArray,
  unshiftArray,
  shiftArray,
  someArray,
} from './array.js';

describe('Given arrayLength', () => {
  test('should first', () => {
    const testData = [];
    const expected = 0;
    const result = arrayLength(testData);
    expect(result).toBe(expected);
  });

  test('should first', () => {
    const testData = [1, 4, 7];
    const expected = 3;
    const result = arrayLength(testData);
    expect(result).toBe(expected);
  });

  test('should first', () => {
    const testData = [1, null, undefined];
    const expected = 3;
    const result = arrayLength(testData);
    expect(result).toBe(expected);
  });
});

describe('Given pushArray', () => {
  test('should first', () => {
    const testData = [1, 2, 3, 9];
    const expected = 5;
    const result = pushArray(testData);
    expect(result).toBe(expected);
  });

  test('should first', () => {
    const testData = [];
    const expected = 1;
    const result = pushArray(testData);
    expect(result).toBe(expected);
  });

  test('should first', () => {
    const testData = [[], []];
    const expected = 3;
    const result = pushArray(testData);
    expect(result).toBe(expected);
  });

  test('should first', () => {
    const testData = [null, null];
    const expected = 3;
    const result = pushArray(testData);
    expect(result).toBe(expected);
  });
});

describe('Given popArray', () => {
  test('should first', () => {
    const testData = [1, 2, 3, 9];
    const expected = 9;
    const result = popArray(testData);
    expect(result).toBe(expected);
  });

  test('should first', () => {
    const testData = ['camilo'];
    const expected = 'camilo';
    const result = popArray(testData);
    expect(result).toBe(expected);
  });

  test('should first', () => {
    const testData = [[], []];
    const expected = [];
    const result = popArray(testData);
    expect(result).toStrictEqual(expected);
  });

  test('should first', () => {
    const testData = [null, null];
    const expected = null;
    const result = popArray(testData);
    expect(result).toBe(expected);
  });
});

describe('Given unshiftArray', () => {
  test('should first', () => {
    const testData = [1, 2, 3, 9];
    const expected = 5;
    const result = unshiftArray(testData);
    expect(result).toBe(expected);
  });

  test('should first', () => {
    const testData = [];
    const expected = 1;
    const result = unshiftArray(testData);
    expect(result).toBe(expected);
  });

  test('should first', () => {
    const testData = [[], []];
    const expected = 3;
    const result = unshiftArray(testData);
    expect(result).toBe(expected);
  });

  test('should first', () => {
    const testData = [null, null];
    const expected = 3;
    const result = unshiftArray(testData);
    expect(result).toBe(expected);
  });
});

describe('Given shiftArray', () => {
  test('should first', () => {
    const testData = [1, 2, 3, 9];
    const expected = 9;
    const result = shiftArray(testData);
    expect(result).toBe(expected);
  });

  test('should first', () => {
    const testData = ['camilo'];
    const expected = 'camilo';
    const result = shiftArray(testData);
    expect(result).toBe(expected);
  });

  test('should first', () => {
    const testData = [[], []];
    const expected = [];
    const result = shiftArray(testData);
    expect(result).toStrictEqual(expected);
  });

  test('should first', () => {
    const testData = [null, null];
    const expected = null;
    const result = shiftArray(testData);
    expect(result).toBe(expected);
  });
});

describe('Given someArray', () => {
  test('should first', () => {
    const testData = [1, 5, 3, 9];
    const x = (element) => element % 2 === 0;
    const expected = false;
    const result = someArray(testData, x);
    expect(result).toBe(expected);
  });

  test('should first', () => {
    const testData = [1, 2, 3, 9];
    const x = (element) => element % 2 === 0;
    const expected = false;
    const result = someArray(testData, x);
    expect(result).toBe(expected);
  });

  test('should first', () => {
    const testData = [1, 5, 3, 9];
    const x = 9;
    const expected = true;
    const result = someArray(testData, x);
    expect(result).toBe(expected);
  });

  test('should first', () => {
    const testData = [1, 5, 3, 9];
    const x = 8;
    const expected = false;
    const result = someArray(testData, x);
    expect(result).toBe(expected);
  });
});
