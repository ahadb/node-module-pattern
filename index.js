'use strict';

/**
 * Exporting multiple functions from one file
 * You can also use module.exports, it works like a default function in ES6
 */

async function myPromise() {
  return new Promise((resolve, reject) => {
    resolve('I have kept my promise!!');
  })
}

function myMethod(x = "Yo", y = "dude") {
  var myArr = [x, y];
  return myArr.join(', ');
}

function mySugarSyntax() {
  const words = ["I", "love", "Node"];
  const [i, l, n] = words;
  return l;
}

exports.myPromise = myPromise;
exports.myMethod = myMethod;
exports.mySugarSyntax = mySugarSyntax;

/**
 * The below also works for exporting a default function:

 module.exports = function() {
     return new Promise((resolve, reject) => {
       resolve('I have kept my promise!!');
     })
   };

 */


/**
 * You can also export multiple functions like so:

 exports.myPromise = function() {
     return new Promise((resolve, reject) => {
        resolve('I have kept my promise!!');
     })
   };

 exports.myMethod = function(x, y) {
     const myArr = [x, y];
     console.log(myArr.join(' '));
   };

 */
