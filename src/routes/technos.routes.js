const express = require("express");
const technoRoutes = express.Router();
const controller = require("../controllers/technos.controllers");

technoRoutes.get("/", controller.getAllTechnos);
technoRoutes.get("/:id", controller.getTechnoById);
technoRoutes.post("/", controller.newTechno);
technoRoutes.put("/:id", controller.updateTechno);
technoRoutes.delete("/", controller.deleteAllTechnos);
technoRoutes.delete("/:id", controller.deleteTechnoById);

module.exports = technoRoutes;
