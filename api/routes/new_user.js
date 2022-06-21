const Router = require('express')

const router = Router()

// Mock Users
const users = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' }
]


/* GET users listing. */
router.post('/new_user', function (req, res, next) {
  // console.log(req.body.fname)
  users.push('testtest')
  res.end("Success")
})
module.exports = router