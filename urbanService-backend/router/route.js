const userController = require('./../controllers/userController');

const router = require('express').Router();

router.get('/user',userController.getUserData);
router.get('/getUserDataFromDb',userController.getUserDataFromDb);

module.exports = router;
