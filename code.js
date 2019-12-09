const permittedTable = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [4, 5, 6, 7, 8, 9, 1, 2, 3],
  [7, 8, 9, 1, 2, 3, 4, 5, 6],
  [2, 3, 4, 5, 6, 7, 8, 9, 1],
  [5, 6, 7, 8, 9, 1, 2, 3, 4],
  [8, 9, 1, 2, 3, 4, 5, 6, 7],
  [3, 4, 5, 6, 7, 8, 9, 1, 2],
  [6, 7, 8, 9, 1, 2, 3, 4, 5],
  [9, 1, 2, 3, 4, 5, 6, 7, 8]
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

checkWholeTable(permittedTable);
console.log(tableViability);
