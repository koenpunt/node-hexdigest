# Node hexdigest

Module to generate the hexdigest of a file.

## Installation

```
npm install --save[-dev] hexdigest
```

## Usage

```js
var hexdigest = require('hexdigest');

hexdigest('myfile.jpg', 'sha1', function(err, digest) {
  if (!err) {
    console.log(digest);
  }
});
```

Algorithms are the ones supported by the version of OpenSSL on the platform. Examples are `'sha1'`, `'md5'`, `'sha256'`, `'sha512'`, etc. On recent releases, `openssl list-message-digest-algorithms` will display the available digest algorithms. 

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
