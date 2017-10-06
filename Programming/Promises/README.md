# Programming: Use Promise to run sequential asynchronous operations

## Makes an async call


## Uses data from the resolved value of the first promise to make a subsequent call


## Does something with he result of both calls


## Promises can be nested arbitrarily deeply and still pass this standard
```
$ npm init -y
```

and install request

```
$ npm install request
```

*app.js*

import request which allows you to make requests and include the base url as a global variable.
  * similar to jQuery  || fetch making requests
  * request is a function that does not return a promise


```js
var request = require('request');
var baseUrl = 'https://swapi.co/api/'
```

First, create a simple get request function that returns a new promise. This promise is either going to resolve or reject.

Although we create this first, it will be at the bottom of the code since it is hoisted up later.

```js
function get(url){
  return new Promise(function(resolve, reject){
    request(url, function (error, response, body) {
      if (response && response.statusCode === 200){
        resolve(body)
      } else {
        reject(error)
      }
    })
  })
}
```

Using Promises is similar to using dot-notation to access different indexes in an object

```js
get( baseUrl + 'people/1' )
  .then(function(character){
    //console.log('success', character)
    return get(JSON.parse(character).homeworld)
  })
  .then(function(world){
    //console.log(world)
    return get(JSON.parse(world).residents[0])
  })
  .then(function(resident){
    console.log(resident)
  })
  .catch(function(error){
    console.log(':(', error)
  })
  ```

**Avoid 'chaining of doom'**
 * return the get request
 * .then after that to flatten out the Promises

**Always have a '.catch' at the end of your Promises**
  * .catch is actually a .then, just without handling the success
  * if any of the Promises break, then the catch will return
