'use strict';

var through = require('through2');
var STYLE_REGEXP = /\sstyle=".+?"/gi;

module.exports = function () {
  return through.obj(function (chunk, enc, callback) {
    var contents = String( chunk.contents );
    contents = contents.replace(STYLE_REGEXP, '');
    chunk.contents = new Buffer( contents );
    this.push( chunk );
    return callback();
  })
};
