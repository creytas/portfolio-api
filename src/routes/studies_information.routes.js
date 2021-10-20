const express = require("express");
const studyInfoRoutes = express.Router();
const controller = require("../controllers/studies_information.controllers");

studyInfoRoutes.get("/all", controller.getAllStudies);
studyInfoRoutes.get("/:id", controller.getStudyById);
studyInfoRoutes.post("/new-study", controller.newStudy);
studyInfoRoutes.put("/update-study/:id", controller.updateStudy);
studyInfoRoutes.delete("/delete-study/all", controller.deleteAllStudies);
studyInfoRoutes.delete("/delete-study/:id", controller.deleteStudyById);

module.exports = studyInfoRoutes;
