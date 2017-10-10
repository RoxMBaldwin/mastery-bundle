const express = require('express')
const app = express()
var exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/', express.static('./public'))
//when its at '/', it serves the public dir

//more dynamic
app.get('/render', (request,response)=>{
  response.render('home')
})

app.listen(3000)
