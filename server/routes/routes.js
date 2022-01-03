const express = require('express');
const router = express.Router();


const {getUsers,addUser,getUserById,editUser,deleteUser}=require('../controller/userController');

router.get("/",getUsers)
router.post("/add",addUser)
router.get('/:id', getUserById);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);

module.exports = router;