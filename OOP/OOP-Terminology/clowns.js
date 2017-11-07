// Class = Clown 🤡
// Properties = name, hairColor

// Constructor
var Clown = function(name, hairColor){
  this.name = name
  this.hairColor = hairColor
}

var bobo = new Clown('Bobo', 'red')
// console.log(Bobo);
bobo.joke = function(){
  console.log(this.name + ' says knock, knock ')
}

bobo.joke()
//returns: 'Bobo says knock, knock'
