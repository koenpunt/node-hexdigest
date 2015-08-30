var path = require('path')
  , assert = require('assert')
  , hexdigest = require('../');

var source = path.join(__dirname, 'images', 'image.jpg');

hexdigest(source, 'sha1', function(err, digest){
  assert.equal(digest, '8557f1c9b01dd6fd138ba203e6a953df6a222af3');
});

hexdigest(source, 'md5', function(err, digest){
  assert.equal(digest, '053bb4a83f9a8c03cdbd1ca0193cb697');
});

hexdigest('nonexistent-file', 'md5', function(err, digest){
  assert(err != null);
});
