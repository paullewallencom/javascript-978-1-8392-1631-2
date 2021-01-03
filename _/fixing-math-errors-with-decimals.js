// Fixing Math errors with decimals

0.3 === Number((0.1 + 0.2).toFixed(1));
// true

0.1 + 0.2 - 0.3 < Number.EPSILON;
// true

Math.round((0.1 + 0.2) * 10) / 10;
// 0.3
