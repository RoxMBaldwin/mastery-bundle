## Server-Side: Describe Authentication / Authorization concepts

### Why use Authorization and Authentication?
Auth saves information that relates to a specific user
- level of customization
- provides limitations and security

### Authentication
**Validating who you are**
- typically form-based
  - email, password, username stored in a database

**Sign-up Process:**

1. Check that the email is unique / not in use
2. Hash the user's password (bCrypt)
  - hashing is a way to hide the password in plain sight and adds another level of security
  - hashing functions: take the password and return a unique, string the same length as the original but with a different textual value
    - once a password is hashed, it can never be returned to the original textual data
  - *Salting* the password helps to slow down brute force attacks
    - salts are a randomly generated string of characters used to be added to the password
    - generates a hash that is more difficult for others to decrypt
3. Store the unique email and hashed password
  - create a session that is specific to the user

```js
router.post('/signup', function(req, res, next){
  var hash = bcrypt.hashSync(req.params.password, 8);
  Users().insert({
    email: req.params.email,
    password: hash
  }, 'id').then(function(result){
    res.redirect('/signin');
  });
});
```

*Encryption :* a way to run text through an algorithm that makes it unrecognizable
		-only allows certain parties to access information
		-must have access to key

**Sign-in Process:**

1. Make a POST request with the email and password
  - you're sending the user information to the database to see if if matches what is stored in the database from the sign-up
2. If the information is a valid match to the entry in the User database, then the stored data specfic to that user can be accessed

```js
router.post('/signin', function(req, res, next){
  Users().where({
    email: req.body.email,
  }).first().then(function(user){
    if(user) {
	//bcrypt.compareSync will hash the plain text password and compare
      if(bcrypt.compareSync(req.body.password, user.password)) {
        req.session.user = user.email;
        res.redirect('/');
      } else {
        res.redirect('/signin');
      }
    } else {
      res.redirect('/signin');
    }
  });
});
```


***hashes.js***
```js
hashes.js
Const password = ‘password’
Const crypto = require(‘crypto’)i

Const hash = crypto.createHash(‘md5’).update(paswword).digest(‘hex);
Console.log(hash)
```

### Authorization
**The permissions and access a user has**
  - *'do you have a hall-pass?'*

Session cookie / token tells the server who the currently logged in user is
  - by an ID
  - have to have some sort of session (authentication)
  - JSON Web Tokens
    - a token that you pass to the client that contains information

```js
router.put('/articles/:id', function(req, res, next){
  Articles().where('id', req.params.id).first().then(function(article){
    if(req.session.userId === article.creator_id) {
      Articles().where('id', req.params.id)
      .update({
        body: req.body.body
      }).then(function(result){
        res.json(result);
      })
    } else {
      res.status(401);
      res.json({message: 'not allowed'})
    }
  });
});
```

🍦 ***Resources:***
- [JWT Video](https://www.youtube.com/watch?v=sQzqUbAG514) with Chad
