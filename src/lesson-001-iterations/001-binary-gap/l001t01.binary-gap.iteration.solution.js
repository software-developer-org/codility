/**
 * https://app.codility.com/programmers/lessons/1-iterations/binary_gap/
 *
 * A binary gap within a positive integer N is any maximal sequence of consecutive zeros
 * that is surrounded by ones at both ends in the binary representation of N.
 *
 * For example, number 9 has binary representation 1001 and contains a binary gap of length 2.
 * The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3.
 * The number 20 has binary representation 10100 and contains one binary gap of length 1.
 * The number 15 has binary representation 1111 and has no binary gaps.
 * The number 32 has binary representation 100000 and has no binary gaps.
 *
 * Write a function:
 *   function solution(N);
 * that, given a positive integer N, returns the length of its longest binary gap.
 * The function should return 0 if N doesn't contain a binary gap.
 *
 * For example, given N = 1041 the function should return 5,
 * because N has binary representation 10000010001 and so its longest binary gap is of length 5.
 * Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.
 *
 * Write an efficient algorithm for the following assumptions:
 * - N is an integer within the range [1..2,147,483,647].
 *
 */
function solution(N) {
  // summary and score: https://app.codility.com/demo/results/trainingD3ATGK-B6Q/
  // convert N to binary
  // example: N=14479856
  // binary representation is 110111001111000111110000
  // to string: 110111001111000111110000 => "110111001111000111110000"
  const binary = new Number(N).toString(2);
  // create array with separator '1' => ["", "", "0", "", "", "00", "", "", "", "000", "", "", "", "", "0000"]
  const arrayWithZeroValuesOrEmpty = binary.split('1');
  // return 0 if array.length = 1;
  if (arrayWithZeroValuesOrEmpty.length === 1) {
    return 0;
  }
  // remove last element if value is not empty (""): ["", "", "0", "", "", "00", "", "", "", "000", "", "", "", ""]
  const lastIndex = arrayWithZeroValuesOrEmpty.length - 1;
  if (arrayWithZeroValuesOrEmpty[lastIndex] !== '') {
    arrayWithZeroValuesOrEmpty.pop();
  }
  // return 0 if array.length = 1;
  if (arrayWithZeroValuesOrEmpty.length === 1) {
    return 0;
  }
  // filter empty values: ["0", "00", "000"]
  const arrayWithZeroValues = arrayWithZeroValuesOrEmpty.filter((v) => v !== '');
  // return 0 if array.length = 0;
  if (arrayWithZeroValues.length === 0) {
    return 0;
  }
  // reduce by longest value: "000"
  // return length
  return arrayWithZeroValues.reduce((prev, curr) => (prev.length > curr.length ? prev : curr)).length;
}

// export for test usage
module.exports = solution;
