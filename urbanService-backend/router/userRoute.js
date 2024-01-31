// const userController = require('./../controllers/userController');
const userController = require('./../controllers/userController');

const router = require('express').Router();

router.get('/user',userController.getUserData);
router.get('/getUserDataFromDb',userController.getUserDataFromDb);
router.post('/createUser', userController.addUser);
router.post('/createUserInDb', userController.addUserInDb);
router.get('/getUserById/:id', userController.getUserById);

module.exports = router;
