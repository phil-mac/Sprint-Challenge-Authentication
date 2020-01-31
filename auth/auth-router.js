const router = require('express').Router();
const bcrypt = require('bcryptjs')

const authMiddleware = require('./authenticate-middleware');

const db = require('../database/dbConfig')

router.post('/register', (req, res) => {
  const credentials = req.body;

  const hash = bcrypt.hashSync(credentials.password, 10)

  credentials.password = hash;

  db('users').insert(credentials)
  .then(reply => {
    res.json({uid: reply[0]})
  })
  .catch(err => {
    res.json({message: err})
  })
});

router.post('/login', (req, res) => {
  const credentials = req.body;
  const username = credentials.username;

  db('users').where({username}).first()
  .then(user => {
    if (user && bcrypt.compareSync(credentials.password, user.password)){
      req.session.userId = user.id
      res.json({message: "Successful login of userId:", uid: user.id})
  } else{
      res.status(401).json({message: 'Invalid Credentials'})
  }
  })
  .catch(err => {
    res.json({message: err})
  })
});

module.exports = router;
