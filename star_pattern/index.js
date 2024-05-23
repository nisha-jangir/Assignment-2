function printStarPattern(rows) {
  for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += "* ";
    }
    console.log(pattern.trim());
  }
}

const numberOfRows = 3;
printStarPattern(numberOfRows);
