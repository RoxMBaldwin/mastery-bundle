// Class = Cat
// Properties = tiredness, hunger, loniness, happiness

//Constructor Function:starts with a capital letter
var Cat = function(tiredness, hunger, loniness, happiness){
  this.tiredness = tiredness || 10
  this.hunger = hunger || 10
  this.loneliness = loniness || 10
  this.happiness = happiness || 10
};

////Instance methods are added to the constructor function's prototype (not <code>this</code>) // Methods to decrease properties

Cat.prototype.sleep = function(arg){
  if(arg){
  this.tiredness -= arg
  this.happiness += arg
  } else {
  -- this.tiredness
  ++ this.happiness
  }
}

Cat.prototype.pet = function(arg){
  if(arg){
    this.loneliness -= arg
    this.happiness += arg
  } else {
    -- this.loneliness
    ++ this.happiness
  }
}

Cat.prototype.feed = function(arg){
  if(arg){
    this.hunger -= arg
    this.happiness += arg
  } else {
    -- this.hunger
    ++ this.happiness
  }
}

// Return Kitty status as a string
Cat.prototype.status = function(){
  var tired = (this.tiredness).toString()
  var hungry = (this.hunger).toString()
  var lonely = (this.loneliness).toString()
  var happy = (this.happiness).toString()

  return('The Kitty has ' + tired + ' tiredness, ' + hungry + ' hunger, ' + lonely + ' loneliness,  ' + happy + ' happiness')
}

module.exports = {
  Cat: Cat
}
