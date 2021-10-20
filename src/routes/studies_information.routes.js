const express = require("express");
const studyInfoRoutes = express.Router();
const controller = require("../controllers/studies_information.controllers");

studyInfoRoutes.get("/", controller.getAllStudies);
studyInfoRoutes.get("/:id", controller.getStudyById);
studyInfoRoutes.post("/", controller.newStudy);
studyInfoRoutes.put("/:id", controller.updateStudy);
studyInfoRoutes.delete("/", controller.deleteAllStudies);
studyInfoRoutes.delete("/:id", controller.deleteStudyById);

module.exports = studyInfoRoutes;
