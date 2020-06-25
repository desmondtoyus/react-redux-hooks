const router = require("express").Router();
const bodyParser = require('body-parser').json();
const userController = require('../../controllers/user');



router.route('/')
    .get(userController.get)
    .post(bodyParser, userController.post)
    .put(bodyParser, userController.put);

module.exports = router;