const express = require('express');
const {createUser, getAllUsers, getUser, deleteUser, updateUser} = require('./../controllers/userController');

const router = express.Router();

router.route('/')
    .post(createUser)
    .get(getAllUsers);


module.exports = router;