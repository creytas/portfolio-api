const express = require("express");
const projectRoutes = express.Router();
const controller = require("../controllers/projects.controllers");

projectRoutes.get("/", controller.getAllProjects);
projectRoutes.get("/:id", controller.getProjectById);
projectRoutes.post("/", controller.newProject);
projectRoutes.put("/:id", controller.updateProject);
projectRoutes.delete("/", controller.deleteAllProjects);
projectRoutes.delete("/:id", controller.deleteProjectById);

module.exports = projectRoutes;
