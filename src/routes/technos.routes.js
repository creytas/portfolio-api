const express = require("express");
const technoRoutes = express.Router();
const controller = require("../controllers/technos.controllers");

technoRoutes.get("/all", controller.getAllTechno);
technoRoutes.get("/:id", controller.getTechnoById);
technoRoutes.post("/new-techno", controller.newTechno);
technoRoutes.put("/update-techno/:id", controller.updateTechno);
technoRoutes.delete("/delete-techno/:id", controller.deleteTechnoById);
technoRoutes.delete("/delete-techno/all", controller.deleteAllTechno);

module.exports = technoRoutes;
