const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/getName', function(req, res, next) {
  res.send({
    name: 'John',
    id: 68123,
  });
});
router.post('/createUser', function(req, res, next) {
  // console.log("Request =>", req);
  console.log("Request Body=>", req.body);
  // Some database operations for saving the user
  res.send({
    status: 200,
    message: 'User created successfully',
  });
})
module.exports = router;
