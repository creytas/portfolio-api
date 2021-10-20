const express = require("express");
const userRoutes = express.Router();
const controller = require("../controllers/users.controllers");

userRoutes.get("/all", controller.getAllUsers);
userRoutes.get("/:id", controller.getUserById);
userRoutes.post("/new-user", controller.newUser);
userRoutes.put("/update-user/:id", controller.updateUser);
userRoutes.delete("/delete-user/all", controller.deleteAllUsers);
userRoutes.delete("/delete-user/:id", controller.deleteUserById);

module.exports = userRoutes;
