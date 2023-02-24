const solver = (a, b, c) => {
  console.log(`The equation is: (${a})x^2 + (${b})x + (${c}) = 0`);
  const discriminant = b * b - 4 * a * c;
  if (discriminant < 0) {
    return console.log("There are 0 roots");
  } else if (discriminant === 0) {
    const x1 = -b / (2 * a);
    console.log("There are 1 root");
    return console.log(`x1 = ${x1.toFixed(2)}`);
  } else {
    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    console.log("There are 2 roots");
    return console.log(`x1 = ${x1.toFixed(2)}\nx2 = ${x2.toFixed(2)}`);
  }
};