const dns = require('dns');
const fs = require('fs');
const os = require('os');
const path = require('path');
const util = require('util');
const downloadFile = require('./download-file');



/*const file = fs.readFileSync('./source_files/xaa.csv', 'utf-8');
const rows = file.split('\n');
const mappedRows = rows.forEach((r, i) => rows[i] = r.split('\t').slice(0, 3).join('\t'))
fs.writeFileSync('./source_files/xaa1.csv', rows.join('\n'));
const resolve4Promise = util.promisify(dns.resolve4);
*/

// resolve4Promise('asdasdsad.co.il').then(res => console.log(res)).catch(err => console.log(err))