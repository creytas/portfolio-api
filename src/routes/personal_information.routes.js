const express = require("express");
const personalInfoRoutes = express.Router();
const controller = require("../controllers/personal_information.controllers");

personalInfoRoutes.get("/all", controller.getAllPersonalInfos);
personalInfoRoutes.get("/:id", controller.getPersonalInfoById);
personalInfoRoutes.post("/new-personal-info", controller.newPersonalInfo);
personalInfoRoutes.put(
  "/update-personal-info/:id",
  controller.updatePersonalInfo
);
personalInfoRoutes.delete(
  "/delete-personal-info/:id",
  controller.deletePersonalInfoById
);
personalInfoRoutes.delete(
  "/delete-personal-info/all",
  controller.deleteAllPersonalInfos
);

module.exports = personalInfoRoutes;
