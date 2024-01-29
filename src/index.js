/**
 * The full description with examples is at
 * {@link https://www.codewars.com/kata/5572f7c346eb58ae9c000047 }
 *
 * @param {number} n - finite positve integer, n >= 1
 * @return {string} - string like "1\n22\n333\n4444\n55555"
 *                    where each number is repeated `index + 1` times (zero started)
 *
 * @example
 *    pattern(-1) => ''
 *    pattern(NaN) => ''
 *    pattern(5.4) => ''
 *    pattern(1) => "1"
 *    pattern(5) => "1\n22\n333\n4444\n55555"
 */
export default function pattern(n) {
  // not a number, not a integer or less than 1 => ''
  if (n < 1 || !Number.isInteger(n) || !Number.isFinite(n)) {
    return "";
  }

  // pattern new Array(3).fill(1).map((elem, index) => elem + index) =>
  // (3) [empty × 3] => [1, 1, 1] => [1, 2, 3]
  return new Array(n)
    .fill(1)
    .map((num, index) => num + index)
    .map((num, index) => String(num).repeat(index + 1))
    .join("\n");
}
