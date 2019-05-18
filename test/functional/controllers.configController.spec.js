const request = require('request');
const { expect } = require('chai');
const config = require('../../src/config/config.json');

// Server
describe('Config endpoint response', () => {
  it('should return 200', done => {
    request.get(`http://localhost:${config.app.port}/api/config`, (err, res) => {
      if (err) throw err;
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
});
