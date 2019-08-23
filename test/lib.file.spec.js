const { expect } = require('chai');

const lib = require('../src/lib/file');
const testData = require('./testData.json');

// Lib > Playlist
describe('File library', () => {
  describe('getMimeType()', () => {
    it('expect "getMimeType()" to exists and be a function', (done) => {
      expect(typeof lib.getMimeType).to.be.equals('function');
      done();
    });
    it('expect the "getMimeType()" to output the "text/html" MIME type for ".htm/.html', (done) => {
      expect(lib.getMimeType('.html')).to.be.equals('text/html');
      expect(lib.getMimeType('.htm')).to.be.equals('text/html');
      done();
    });
    it('expect the "getMimeType()" to output the "application/json" MIME type for ".json', (done) => {
      expect(lib.getMimeType('.json')).to.be.equals('application/json');
      done();
    });
    it('expect the "getMimeType()" to output the "image/png" MIME type for ".png', (done) => {
      expect(lib.getMimeType('.png')).to.be.equals('image/png');
      done();
    });
    it('expect the "getMimeType()" to output the "image/jpeg" MIME type for ".jpg/.jpeg', (done) => {
      expect(lib.getMimeType('.jpg')).to.be.equals('image/jpeg');
      expect(lib.getMimeType('.jpeg')).to.be.equals('image/jpeg');
      done();
    });
    it('expect the "getMimeType()" to output the "image/svg+xml" MIME type for ".svg', (done) => {
      expect(lib.getMimeType('.svg')).to.be.equals('image/svg+xml');
      done();
    });
    it('expect the "getMimeType()" to output the "application/pdf" MIME type for ".pdf', (done) => {
      expect(lib.getMimeType('.pdf')).to.be.equals('application/pdf');
      done();
    });
    it('expect the "getMimeType()" to output the "application/msword" MIME type for ".doc', (done) => {
      expect(lib.getMimeType('.doc')).to.be.equals('application/msword');
      done();
    });
  });

  describe('getFilePath()', () => {
    it('expect "getFilePath()" to exists and be a function', (done) => {
      expect(typeof lib.getFilePath).to.be.equals('function');
      done();
    });
    it('expect the "getFilePath()" function to throw without an argument', (done) => {
      expect(lib.getFilePath).to.throw();
      done();
    });
    it('expect the "getFilePath()" to output the "example.png" file path', (done) => {
      const filePath = `${__dirname.replace(/test/, '')}public/example.png`;
      expect(lib.getFilePath(testData.file[0].request)).to.be.equals(filePath);
      done();
    });
  });
});
