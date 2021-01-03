// Changing length of decimals

// 1.234 -> 1.2

(1.234).toFixed(1); // "1.2"

(12.234).toPrecision(3); // "12.2"

Number((12.234).toPrecision(3)); // 12.2
