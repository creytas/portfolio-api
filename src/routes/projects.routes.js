const express = require("express");
const projectRoutes = express.Router();
const controller = require("../controllers/projects.controllers");

projectRoutes.get("/all", controller.getAllProjects);
projectRoutes.get("/:id", controller.getProjectById);
projectRoutes.post("/new-project", controller.newProject);
projectRoutes.put("/update-project/:id", controller.updateProject);
projectRoutes.delete("/delete-project/all", controller.deleteAllProjects);
projectRoutes.delete("/delete-project/:id", controller.deleteProjectById);

module.exports = projectRoutes;
