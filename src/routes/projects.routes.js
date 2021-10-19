const express = require("express");
const projectRoutes = express.Router();

projectRoutes.get("/all");
projectRoutes.get("/:id");
projectRoutes.post("/new-project");
projectRoutes.put("/update-project/:id");
projectRoutes.delete("/delete-project/:id");
projectRoutes.delete("/delete-project/all");

module.exports = projectRoutes;
