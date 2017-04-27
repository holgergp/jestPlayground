'use strict';

function fetchData(callback) {
    callback('{"hello":"world"}');
};

module.exports = fetchData;