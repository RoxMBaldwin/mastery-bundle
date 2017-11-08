// Class = Clown 🤡
// Properties = name, hairColor

// Constructor
var Clown = function(name, hairColor){
  this.name = name
  this.hairColor = hairColor
}

//Method
var bobo = new Clown('Bobo', 'red')
// console.log(Bobo);
bobo.joke = function(){
  console.log(this.name + ' says knock, knock ')
}

bobo.joke()
//returns: 'Bobo says knock, knock'

//Prototype

Clown.prototype.laugh = function(){
  console.log('HAHAHAHHAHAHAHAHAHA shave my ' + this.hairColor + ' hair');
}

bobo.laugh()
