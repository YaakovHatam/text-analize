'use strict'

const http = require('http');
const fs = require('fs');
const gunzip = require('gunzip-file')

const baseUrl = `http://storage.googleapis.com/books/ngrams/books/`;
const fileName = `googlebooks-eng-all-2gram-20120701-fl.gz`;

const file = fs.createWriteStream(fileName);
const request = http.get(`${baseUrl}${fileName}`, function (response) {
    response.pipe(file);

    file.on("finish", () => {
        file.close();
        console.log("Download Completed");
    });
});

gunzip('sitemap.xml.gz', 'sitemap.xml', () => {
    console.log('gunzip done!')
});