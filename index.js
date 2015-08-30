var fs = require('fs')
  , crypto = require('crypto');

module.exports = function hexdigest(path, algorithm, done) {
  var shasum, stream;
  shasum = crypto.createHash(algorithm);
  stream = fs.ReadStream(path);
  stream.on('data', function(data) {
    shasum.update(data);
  });
  stream.on('end', function() {
    done(null, shasum.digest('hex'));
  });
  stream.on('error', function(err) {
    done(err);
  });
};
