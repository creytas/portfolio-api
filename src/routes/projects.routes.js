const express = require("express");
const projectRoutes = express.Router();
const controller = require("../controllers/projects.controllers");

projectRoutes.get("/all", controller.getAllProject);
projectRoutes.get("/:id", controller.getProjectById);
projectRoutes.post("/new-project", controller.newProject);
projectRoutes.put("/update-project/:id", controller.updateProject);
projectRoutes.delete("/delete-project/:id", controller.deleteProjectById);
projectRoutes.delete("/delete-project/all", controller.deleteAllProject);

module.exports = projectRoutes;
