import {
  arrayLength,
  pushArray,
  popArray,
  unshiftArray,
  shiftArray,
  includesArray,
  indexOfArray,
  reduceOfArray,
  joinArray,
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
    const x = 10;
    const expected = 5;
    const result = pushArray(testData, x);
    expect(result).toStrictEqual(expected);
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

describe('Given includesArray', () => {
  test('should first', () => {
    const testData = [1, 5, 3, 9];
    const x = 9;
    const expected = true;
    const result = includesArray(testData, x);
    expect(result).toBe(expected);
  });

  test('should first', () => {
    const testData = [1, 5, 3, 9];
    const x = 8;
    const expected = false;
    const result = includesArray(testData, x);
    expect(result).toBe(expected);
  });

  test('should first', () => {
    const testData = [1, 5, 3, 9];
    const x = null;
    const expected = false;
    const result = includesArray(testData, x);
    expect(result).toBe(expected);
  });

  test('should first', () => {
    const testData = [[], []];
    const x = [];
    const expected = false;
    const result = includesArray(testData, x);
    expect(result).toBe(expected);
  });
});

describe('Given includesArray', () => {
  test('should first', () => {
    const testData = [1, 5, 3, 9];
    const x = 9;
    const expected = true;
    const result = includesArray(testData, x);
    expect(result).toBe(expected);
  });

  test('should first', () => {
    const testData = [1, 5, 3, 9];
    const x = 8;
    const expected = false;
    const result = includesArray(testData, x);
    expect(result).toBe(expected);
  });

  test('should first', () => {
    const testData = [1, 5, 3, 9];
    const x = null;
    const expected = false;
    const result = includesArray(testData, x);
    expect(result).toBe(expected);
  });

  test('should first', () => {
    const testData = [[], []];
    const x = [];
    const expected = false;
    const result = includesArray(testData, x);
    expect(result).toBe(expected);
  });
});

describe('Given indexOfArray', () => {
  test('should first', () => {
    const testData = [1, 5, 3, 9];
    const x = 9;
    const expected = 3;
    const result = indexOfArray(testData, x);
    expect(result).toBe(expected);
  });

  test('should first', () => {
    const testData = [1, 5, 3, 9];
    const x = 8;
    const expected = -1;
    const result = indexOfArray(testData, x);
    expect(result).toBe(expected);
  });

  test('should first', () => {
    const testData = [1, 5, 3, 9];
    const x = null;
    const expected = -1;
    const result = indexOfArray(testData, x);
    expect(result).toBe(expected);
  });

  test('should first', () => {
    const testData = [[], []];
    const x = [];
    const expected = -1;
    const result = indexOfArray(testData, x);
    expect(result).toStrictEqual(expected);
  });
});

describe('Given reduceArray', () => {
  test('should first', () => {
    const testData = [1, 5, 3, 9];
    const x = 0;
    const op = (a, b) => a + b;
    const expected = 18;
    const result = reduceOfArray(testData, x, op);
    expect(result).toBe(expected);
  });

  test('should first', () => {
    const testData = [1, 5, 3, 9];
    const x = 0;
    const op = (a, b) => a + b;
    const expected = 18;
    const result = reduceOfArray(testData, x, op);
    expect(result).toBe(expected);
  });

  test('should first', () => {
    const testData = [1, 10, 100];
    const x = 0;
    const op = (a, b) => {
      if (a > b) {
        return a;
      }

      return b;
    };

    const expected = 100;
    const result = reduceOfArray(testData, x, op);
    expect(result).toBe(expected);
  });
});

describe('Given joinArray', () => {
  test('should first', () => {
    const testData = ['A', 'B', 'C', 'D'];
    const expected = 'A-B-C-D';
    const result = joinArray(testData);
    expect(result).toBe(expected);
  });

  test('should first', () => {
    const testData = [1, 5, 3, 9];
    const expected = '1-5-3-9';
    const result = joinArray(testData);
    expect(result).toBe(expected);
  });

  test('should first', () => {
    const testData = [null, null, 3, 'H'];
    const expected = 'null-null-3-H';
    const result = joinArray(testData);
    expect(result).toBe(expected);
  });
});
