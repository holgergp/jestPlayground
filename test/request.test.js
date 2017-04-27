const request = require('../src/request');
jest.mock('../src/request');

//let request=  jest.mock('request');

test('async callback', (done) => {
  function callback(data) {
    
    expect(JSON.parse(data)).toEqual({"hello":"world"});
    done();
  }
 request(callback);
});

test('true is true', () => {
  expect(true).toBe(true);
});