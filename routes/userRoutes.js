
//importing express
const express = require('express');


//importing controllers
const userController = require('../controller/userController');

const router = express.Router();

//write the router code here
router.post('/data',userController.saveDataToDatabase);
router.delete('/delete-user/:id',userController.deleteDataToDatabase);
router.get('/user-data',userController.getAllData);

module.exports = router;