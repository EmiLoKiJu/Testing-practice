import {stringLength, reverseString, calculatorObject, classcal} from './index.js';

test('count the number of characters of the string', () => {
  expect(stringLength('thishas8')).toBe(8);
});

test('check if the string gets rejected when bigger than 10', () => {
  expect(stringLength('estestringtiene17')).toBe(-1);
});

test('check if the string is not empty', () => {
  expect(stringLength('')).toBe(-1);
});

test('check if the string returned is backwards', () => {
  expect(reverseString('caca')).toBe('acac');
});


describe('my calculator', () => {
  describe.each([
    [1, 1, 2],
    [1, 2, 3],
    [2, 1, 3],
  ])('add: %i + %i', (a, b, expected) => {
    test(`object: returns ${expected}`, () => {
      expect(calculatorObject.add(a, b)).toBe(expected);
    });
    test(`class: returns ${expected}`, () => {
      expect(classcal.add(a, b)).toBe(expected);
    });
  });

  describe.each([
    [1, 1, 0],
    [1, 2, -1],
    [2, 1, 1],
  ])('subtract: %i - %i', (a, b, expected) => {
    test(`object: returns ${expected}`, () => {
      expect(calculatorObject.subtract(a, b)).toBe(expected);
    });
    test(`class: returns ${expected}`, () => {
      expect(classcal.subtract(a, b)).toBe(expected);
    });
  });

  describe.each([
    [1, 1, 1],
    [1, 2, 0.5],
    [2, 0, undefined],
  ])('divide: %i / %i', (a, b, expected) => {
    test(`object: returns ${expected}`, () => {
      expect(calculatorObject.divide(a, b)).toBe(expected);
    });
    test(`class: returns ${expected}`, () => {
      expect(classcal.divide(a, b)).toBe(expected);
    });
  });

  describe.each([
    [1, 4, 4],
    [5, 2, 10],
    [2, 0, 0],
  ])('multiply: %i * %i', (a, b, expected) => {
    test(`object: returns ${expected}`, () => {
      expect(calculatorObject.multiply(a, b)).toBe(expected);
    });
    test(`class: returns ${expected}`, () => {
      expect(classcal.multiply(a, b)).toBe(expected);
    });
  });
});

  // toBeTruthy