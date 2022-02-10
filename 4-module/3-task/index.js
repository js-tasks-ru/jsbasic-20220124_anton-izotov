function highlight(table) {
  for (let td of table.querySelectorAll('td')) {
    let tdAtribut = td.getAttribute('data-available');
    if (!tdAtribut) {
      td.parentElement.setAttribute('hidden', 'true');
    }
    if (tdAtribut === 'true') {
      td.parentElement.classList.add('available');
    } 
    if (tdAtribut === 'false') {
      td.parentElement.classList.add('unavailable');
    }
  }
  for (let index = 0; index < table.rows.length; index++) {
    const row = table.rows[index];
    const gender = row.cells[2];
    const age = row.cells[1];
    if (gender.innerHTML === "m") {
      gender.parentElement.classList.add('male');
    }
    if (gender.innerHTML === "f") {
      gender.parentElement.classList.add('female');
    }
    if (+age.innerHTML < 18) {
      age.parentElement.style.cssText = `text-decoration: line-through;`;
    }
    
  }
}
