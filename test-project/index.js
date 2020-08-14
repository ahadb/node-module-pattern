var methods = require('node-package-pattern');

methods.myPromise()
    .then(val => {
      console.log(val)
    })
    .catch((e) => { throw new Error(e)});

console.log(methods.myMethod("Hello", "World"));

console.log(methods.mySugarSyntax());
