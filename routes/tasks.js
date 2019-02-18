let express = require("express");
let router = new express.Router();
let TaskController = require("../Controllers/TaskController");

//return a tasks list
router.get('/tasks/:page/:number', TaskController.list);

//return a tasks list by employee
router.get('/tasks/:page/:number/:employee',TaskController.listByEmployee);

//add one task to the database
router.post('/task/add/',TaskController.add);

//return one task by id
router.get('/task/:id', TaskController.findById);

//update one task by id
router.put('/task/update/:id',TaskController.updateById);

//delete one task by id
router.delete('/task/delete/:id', TaskController.delete);

module.exports = router;