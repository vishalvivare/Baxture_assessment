const express = require("express");
const router = express.Router();
const userController = require("../controllers/users.controller");

router.post("/users", userController.saveUser);

router.get("/users", userController.getUsers);

router.get("/users/:id", userController.getOneUser);

router.put("/users/:id", userController.updateUser);

router.delete("/users/:id", userController.deleteUser);

module.exports = router;
