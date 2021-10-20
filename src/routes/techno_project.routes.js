const express = require("express");
const technoProjectRoutes = express.Router();
const controller = require("../controllers/techno_project.controllers");

technoProjectRoutes.get("/", controller.getAllProjectsAllTechnos);
technoProjectRoutes.get("/:id_project", controller.getProjectAllTechnos);
technoProjectRoutes.get(
  "/:id_project/:id_techno",
  controller.getTechnoByProjectIdAndTechnoId
);
technoProjectRoutes.post("/", controller.newTechnoProject);
technoProjectRoutes.put("/:id_techno", controller.updateTechnoProject);
technoProjectRoutes.delete(
  "/:id_project/all",
  controller.deleteAllTechnoProjects
);
technoProjectRoutes.delete(
  "/:id_project/:id_techno",
  controller.deleteTechnoProjectById
);

module.exports = technoProjectRoutes;
