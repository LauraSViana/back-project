const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");

router.get('/user', userController.getUsers);
router.post('/user', userController.createUser);
router.post('/user/:id', userController.update);

module.exports = router;