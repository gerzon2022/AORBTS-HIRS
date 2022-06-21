const Router = require('express')

const router = Router()
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true})); // Returns middleware that only parses urlencoded bodies. This parser accepts only UTF-8 encoding of the body and supports automatic inflation of gzip and deflate encodings.
router.use(bodyParser.json()); // Returns middleware that only parses json. This parser acceppts any Unicode encoding of the body and supports automatic inflation of gzip and deflate encodings.
// Mock Users
const users = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' }
]

/* GET users listing. */
router.get('/users', function (req, res, next) {
  res.json(users)
})

/* GET user by ID. */
router.get('/users/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
})
/* GET users listing. */
router.post('/users', function (req, res, next) {
 
  users.push({name: req.body.name})
  console.log(req.body.image)
  console.log(users)
  res.send("Success!")
})

module.exports = router