// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
window.$ = window.jquery = require('jquery');
window.dt = require('datatables.net')();
window.$('#table_id').DataTable();