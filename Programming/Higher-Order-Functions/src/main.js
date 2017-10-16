// Write the following two higher order functions.


// e.g. any([-1,-2,0,1,2], function (num) { return num > 0 })
//      >> true
// e.g. any([-1,-2,0], function (num) { return num > 0 })
//      >> false
function any (arr, callback) {
  // callback(5)
  for(var i = 0; i < arr.length; i++){
    //console.log(arr[i])
    // return callback(arr[i])
    callback(arr[i])
  }
}

var myArray = [-1, 2, 0]
var myCallBackFunction = function(num){
  console.log(num > 0)
   return num > 0
 }

any(myArray, myCallBackFunction)

// e.g. higherOrderMath(10)('+')('11')
//      >> 21
// e.g. higherOrderMath(15)('-')(8)
//      >> 7
// NOTE: You only need to account for '+', '-', '*', and '/'
//       If it is not one of those, return false
function higherOrderMath (num1) {

  return false
}

module.exports = { any, higherOrderMath }
