const express = require("express");
const userRoutes = express.Router();

userRoutes.get("/all");
userRoutes.get("/:id");
userRoutes.post("/new-user");
userRoutes.put("/update-user/:id");
userRoutes.delete("/delete-user/:id");
userRoutes.delete("/delete-user/all");

module.exports = userRoutes;
