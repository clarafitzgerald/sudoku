const permittedTable = [
  [21, 22, 23, 24, 25, 26, 27, 28, 29],
  [24, 25, 26, 27, 28, 29, 21, 22, 23],
  [27, 28, 29, 21, 22, 23, 24, 25, 26],
  [22, 23, 24, 25, 26, 27, 28, 29, 21],
  [25, 26, 27, 28, 29, 21, 22, 23, 24],
  [28, 29, 21, 22, 23, 24, 25, 26, 27],
  [23, 24, 25, 26, 27, 28, 29, 21, 22],
  [26, 27, 28, 29, 21, 22, 23, 24, 25],
  [29, 21, 22, 23, 24, 25, 26, 27, 28]
];

const unpermittedTable = [
  [1, 2, 3, 5, 5, 6, 7, 8, 9],
  [4, 5, 6, 9, 8, 9, 1, 2, 3],
  [7, 8, 9, 1, 2, 3, 4, 5, 6],
  [5, 3, 4, 5, 6, 7, 8, 9, 1],
  [5, 6, 7, 8, 9, 1, 2, 3, 4],
  [8, 9, 1, 2, 3, 4, 5, 6, 7],
  [3, 6, 5, 6, 7, 8, 9, 1, 2],
  [6, 7, 8, 9, 1, 2, 3, 4, 5],
  [9, 1, 2, 3, 4, 5, 6, 7, 8]
];

checkColumnViability = (table, columnIndex) => {
  const columnToCheck = new Set();
  table.forEach(row => columnToCheck.add(row[columnIndex]));
  const containsNoDupes = columnToCheck.size === 9;
  return containsNoDupes;
};

checkRowViability = (table, rowIndex) => {
  const rowToCheck = new Set();
  table[rowIndex].forEach(cell => rowToCheck.add(cell));
  return (containsNoDupes = rowToCheck.size === 9);
};

checkNinthViability = (table, ninthIndex) => {
  startingXIndex = (ninthIndex * 3) % 9;
  startingYIndex = Math.floor(ninthIndex / 3) * 3;
  let ninthToCheck = new Set();
  for (let row = startingYIndex; row < startingYIndex + 3; row++) {
    for (let column = startingXIndex; column < startingXIndex + 3; column++) {
      ninthToCheck.add(table[row][column]);
    }
  }
  return ninthToCheck.size === 9;
};

let tableViability;
const checkWholeTable = table => {
  for (let index = 0; index < 9; index++) {
    if (
      checkColumnViability(table, index) &&
      checkRowViability(table, index) &&
      checkNinthViability(table, index)
    ) {
      tableViability = true;
      continue;
    } else {
      tableViability = false;
      break;
    }
  }
};

generateRandomArray = () => {
  let randomSet = new Set();
  while (randomSet.size < 9) {
    randomSet.add(Math.ceil(Math.random() * 9));
  }
  randomArray = Array.from(randomSet);
  return randomArray;
};
let tableBroken = false;
generateLegalCell = (xIndex, yIndex, table) => {
  randomArray = generateRandomArray();
  for (let index = 0; index < 9; index++) {
    // console.log(randomArray);
    table[xIndex][yIndex] = randomArray[index];
    checkWholeTable(table);
    if (tableViability) {
      break;
    } else {
      if (index === 8) {
        tableBroken = true;
      } else {
        continue;
      }
    }
  }
};

generateLegalRow = (yIndex, table) => {
  table[yIndex].forEach((cell, index) =>
    generateLegalCell(yIndex, index, table)
  );
};

generateLegalGrid = table => {
  for (let index = 0; index < 9; index++) {
    generateLegalRow(index, table);
    if ((tableBroken = false)) {
      continue;
    } else {
      generateLegalRow(index, table);
    }
  }
  // if ((tableBroken = false)) {
  //   return table;
  // } else {
  //   // console.log(table);
  //   generateLegalGrid(table);
  // }
};

generateLegalGrid(permittedTable);
console.log(permittedTable);

// generateLegalCell(0, 0, permittedTable);
// console.log(permittedTable);

// checkWholeTable(permittedTable);
// console.log(tableViability);
