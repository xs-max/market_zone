const express = require('express');
const { login, signUp } = require('../controllers/authController');

const router = express.Router();

router.post('/auth/login', login);
router.post("/auth/signup", signUp);


module.exports = router;