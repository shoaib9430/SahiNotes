const { application } = require('express');
const express = require('express');
const router = express.Router();

const HomeController = require('../controllers/home_controller');
const UserController = require('../controllers/users_controller');

router.get('/', HomeController.home);
router.use('/users', require('./users'));

module.exports = router;