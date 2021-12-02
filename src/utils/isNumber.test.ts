import { isNumber } from './isNumber';

describe('isNumber Utils', () => {
  test('Its a number', () => {
    [0, 1, 2, -1, 1.345e17, '1'].map((n) => {
      return expect(isNumber(n)).toEqual(true);
    });
  });

  test('Its not a number', () => {
    [false, true, NaN, [], {}, '1a'].map((n) => {
      return expect(isNumber(n)).toEqual(false);
    });
  });
});
