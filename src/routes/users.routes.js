const express = require("express");
const userRoutes = express.Router();
const controller = require("../controllers/users.controllers");

userRoutes.get("/", controller.getAllUsers);
userRoutes.get("/:id", controller.getUserById);
userRoutes.post("/", controller.newUser);
userRoutes.put("/:id", controller.updateUser);
userRoutes.delete("/", controller.deleteAllUsers);
userRoutes.delete("/:id", controller.deleteUserById);

module.exports = userRoutes;
