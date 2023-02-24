const fs = require("fs");

const filePath = process.argv[2];

const checkNum = (data) => {
  const num = parseFloat(data.toString());
  if (isNaN(num) || data.toString().trim().length !== num.toString().length) {
    return false;
  }
  return true;
};

const interactiveMode = () => {
  const params = [];
  const questions = ["a = ", "b = ", "c = "];

  process.stdin.on("data", (data) => {
    if (params.length < questions.length) {
      const num = parseFloat(data.toString());
      if (!checkNum(data)) {
        console.log(`Error. Expected a valid real number, got ${data} instead`);
        process.stdout.write(questions[params.length]);
      } else if (num === 0) {
        console.log(`Error. a cannot be 0`);
        process.stdout.write(questions[params.length]);
      } else {
        params[params.length] = num;
        if (params.length < questions.length) {
          process.stdout.write(questions[params.length]);
        } else {
          solver(...params);
          process.exit(0);
        }
      }
    }
  });

  process.stdout.write(questions[0]);
};

const nonInteractiveMode = () => {
  const checkFormat = (data) => {
    return /^-?\d(\.\d+)?\s-?\d(\.\d+)?\s-?\d(\.\d+)?$/.test(data);
  };

  fs.readFile(filePath, "utf8", (err, data) => {
    if (!fs.existsSync(filePath)) {
      console.log(`File ${filePath} does not exist`);
    } else if (!checkFormat(data)) {
      console.log("Invalid file format");
    } else {
      const [a, b, c] = data.split(" ");
      solver(a, b, c);
    }
  });
};

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

if (!filePath) {
  interactiveMode();
} else {
  nonInteractiveMode();
}