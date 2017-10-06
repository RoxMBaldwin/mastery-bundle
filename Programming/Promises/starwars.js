var request = require('request');
var baseUrl = 'https://swapi.co/api/'

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
