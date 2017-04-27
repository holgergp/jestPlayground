'use strict';

const http = require('http');

function fetchData(callback) {
    let url="http://localhost:3000/hello";
    http.get(url, response => {
    let data = '';
      response.on('data', _data => data += _data);
      response.on('end', () =>  callback(data));
     
    });

}

module.exports = fetchData;