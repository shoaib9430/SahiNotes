const express = require('express');
const router = express.Router();

const UserController = require('../controllers/users_controller');


router.get('/profile', UserController.profile);
router.get('/signin', UserController.signin);
router.get('/signup', UserController.signup);

router.post('/create', UserController.create);
router.post('/create_session', UserController.createSession);



module.exports = router;