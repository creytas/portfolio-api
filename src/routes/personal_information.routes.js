const express = require("express");
const personalInfoRoutes = express.Router();
const controller = require("../controllers/personal_information.controllers");

personalInfoRoutes.get("/", controller.getAllPersonalInfos);
personalInfoRoutes.get("/:id", controller.getPersonalInfoById);
personalInfoRoutes.post("/", controller.newPersonalInfo);
personalInfoRoutes.put("/:id", controller.updatePersonalInfo);
personalInfoRoutes.delete("/", controller.deleteAllPersonalInfos);
personalInfoRoutes.delete("/:id", controller.deletePersonalInfoById);

module.exports = personalInfoRoutes;
