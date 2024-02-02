const categoryControllers = require('./../controller/categoryController');
const router = require('express').Router();

router.post('/category',categoryControllers.createCategory);
router.get('/category',categoryControllers.getCategory);

module.exports = router;
