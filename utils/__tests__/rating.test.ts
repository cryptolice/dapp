import {ratingLevelByStars, ratingStars} from "../rating";

describe('rating stars', function () {
  test('number -> stars rules', () => {
    expect(ratingStars(0)).toEqual(0);
    expect(ratingStars(1)).toEqual(0.5);
    expect(ratingStars(10)).toEqual(0.5);
    expect(ratingStars(11)).toEqual(1);
    expect(ratingStars(20)).toEqual(1);
    expect(ratingStars(21)).toEqual(1.5);
    expect(ratingStars(30)).toEqual(1.5);
    expect(ratingStars(31)).toEqual(2);
    expect(ratingStars(40)).toEqual(2);
    expect(ratingStars(41)).toEqual(2.5);
    expect(ratingStars(50)).toEqual(2.5);
    expect(ratingStars(51)).toEqual(3);
    expect(ratingStars(60)).toEqual(3);
    expect(ratingStars(61)).toEqual(3.5);
    expect(ratingStars(70)).toEqual(3.5);
    expect(ratingStars(71)).toEqual(4);
    expect(ratingStars(80)).toEqual(4);
    expect(ratingStars(81)).toEqual(4.5);
    expect(ratingStars(90)).toEqual(4.5);
    expect(ratingStars(91)).toEqual(5);
    expect(ratingStars(100)).toEqual(5);
  });

  test('less than 0 or over 100, return N/A', () => {
    expect(ratingStars(-1)).toEqual(Number.NaN)
    expect(ratingStars(101)).toEqual(Number.NaN)
  })
});


describe('rating level', function () {
  test('points -> rating level', () => {
    expect(ratingLevelByStars(0)).toEqual('Extremely Dangerous');
    expect(ratingLevelByStars(0.5)).toEqual('Extremely Dangerous');
    expect(ratingLevelByStars(1)).toEqual('Dangerous');
    expect(ratingLevelByStars(1.5)).toEqual('Dangerous');
    expect(ratingLevelByStars(2)).toEqual('Insecure');
    expect(ratingLevelByStars(2.5)).toEqual('Insecure');
    expect(ratingLevelByStars(3)).toEqual('Generally Good');
    expect(ratingLevelByStars(3.5)).toEqual('Generally Good');
    expect(ratingLevelByStars(4)).toEqual('Fairly Safe');
    expect(ratingLevelByStars(4.5)).toEqual('Safe');
    expect(ratingLevelByStars(5)).toEqual('Safe');
  })

  test('invalid input', () => {
    expect(ratingLevelByStars(-1)).toEqual('Unknown');
    expect(ratingLevelByStars(6)).toEqual('Unknown');
  })
});