## Node Module / Package Pattern

You can use this repo to learn about how to create a publishable micro module in Node and on NPM with most of the
latest JS features without Babel. Feels we are torn between Common JS and ECMA modules these days ... 

We used `requirejs` and `browserify` in our past lives if any of you remember many years back. I prefer Common JS as I
authoring Node libraries with less bloat, for the browser it's different.

The quicker people can consume your packages, the better.

#### Steps

Do these steps one by one:

* git clone
* `npm install`
* look over how code was structured and exported in `index.js`
* explicitly look over `name` property in `package.json`
* `$ cd test && npm test` // ✓ myMethod() should return the right values
* `$ cd test-project`
* `npm init -y`
* `npm link node-package-pattern`
* `node index.js`s
* from `/` run `npm publish` // log in etc and check package name exists

#### Keeping the Sugar

You don't necessarily need Babel, Node has come a long way and as you can see from the exported code we can use
many of the latest JavaScript features in Node without any flags for version 8 and 10.

#### Removing Deps

Removing dependencies is always a good practice. If you must have the latest and greatest or are publishing for 
the browser or want to use TypeScript then go for Babel.

Otherwise Node will give you a lot out of the box and is continuously evolving. This way it's faster, no huge dep
graph and more!
