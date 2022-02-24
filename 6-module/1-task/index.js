/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;  
    this.elem = document.createElement('tbody');  
    this.render(); 
  }
  render() {

    for (const row of this.rows) {
      this.elem.insertAdjacentHTML('beforeEnd', `
          <tr>
          <td>${row.name}</td>
          <td>${row.age}</td>
          <td>${row.salary}</td>
          <td>${row.city}</td>
          <td><button>X</button></td>
          </tr>`);
    }

    this.elem.addEventListener('click', this.onClick);

    return this.elem;
  }
  onClick(event) {
    let element = event.target.tagName;
    if (element === 'BUTTON') {
      event.target.closest('tr').remove();
    }

  }	
}
