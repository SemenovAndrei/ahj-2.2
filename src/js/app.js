import Table from './Table';

const table = new Table();
table.createTableMarkup();
table.getTable();
table.sortUp('year');
console.log(table.table);
