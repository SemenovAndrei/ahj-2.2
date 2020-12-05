import data from './dataList';

/**
 * @class Table
 */
export default class Table {
  constructor() {
    this.data = data;
    this.table = null;
  }

  createTableMarkup() {
    this.table = document.createElement('table');
    this.table.classList.add('table');

    const rowTitle = document.createElement('tr');
    rowTitle.innerHTML = `
  <th class="id">id</th>
  <th class="title">title</th>
  <th class="year">year</th>
  <th class="imdb">imdb</th>
      `;

    this.data.forEach((e) => {
      const tr = document.createElement('tr');

      tr.setAttribute('data-id', e.id);
      tr.setAttribute('data-title', e.title);
      tr.setAttribute('data-year', e.year);
      tr.setAttribute('data-imdb', e.imdb);

      tr.innerHTML = `
  <td class="id">#${e.id}</td>
  <td class="title">${e.title}</td>
  <td class="year">(${e.year})</td>
  <td class="imdb">imdb: ${e.imdb.toFixed(2)}</td>
      `;

      this.table.appendChild(tr);
      this.table.insertBefore(rowTitle, this.table.firstChild);
    });
  }

  getTable() {
    const body = document.querySelector('body');
    body.insertBefore(this.table, body.firstChild);
  }

  sortUp(param) {
    const node = this.table.querySelectorAll('tr');
    const table = [...node].sort((a, b) => (a.dataset[param] < b.dataset[param] ? 1 : -1));
    table.forEach((e) => {
      this.table.appendChild(e);
    });
  }

  sortDown(param) {
    const node = this.table.querySelectorAll('tr');
    const table = [...node].sort((a, b) => (a.dataset[param] < b.dataset[param] ? 1 : -1));
    table.forEach((e) => {
      this.table.appendChild(e);
    });
  }
}
