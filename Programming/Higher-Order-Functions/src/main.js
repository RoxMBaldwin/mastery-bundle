// Write the following two higher order functions.


// e.g. any([-1,-2,0,1,2], function (num) { return num > 0 })
//      >> true
// e.g. any([-1,-2,0], function (num) { return num > 0 })
//      >> false
function any (arr, callback) {
  if(arr.length === 0){
    return false
  } else {
    for(var i = 0; i < arr.length; i++){
      return callback(arr[i])
    }
  }
}

var myArray = [-1, 2, 0]
var myCallBackFunction = function(num){
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
  var operator
  var number
  if num1 === null{
    return 
  }
  if else (num1 !== isNaN()){
    var number =  num1
  } else {
    var number = parseInt(num1)
  }
  return number += higherOrderMath(num1)
}

higherOrderMath(10)('+')('11')

module.exports = { any, higherOrderMath }
