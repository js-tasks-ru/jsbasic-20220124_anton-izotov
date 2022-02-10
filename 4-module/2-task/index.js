function makeDiagonalRed(table) {
  for (let index = 0; index < table.rows.length; index++) {
    const row = table.rows[index];
    row.cells[index].style.backgroundColor = 'red';
  } 
}
