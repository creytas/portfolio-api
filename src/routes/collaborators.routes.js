const express = require("express");
const collaboRoutes = express.Router();
const controller = require("../controllers/collaborators.controllers");

collaboRoutes.get("/all", controller.getAllCollaborators);
collaboRoutes.get("/:id", controller.getCollaboratorById);
collaboRoutes.post("/new-collaborator", controller.newCollaborator);
collaboRoutes.put("/update-collaborator/:id", controller.updateCollaborator);
collaboRoutes.delete(
  "/delete-collaborator/all",
  controller.deleteAllCollaborators
);
collaboRoutes.delete(
  "/delete-collaborator/:id",
  controller.deleteCollaboratorById
);

module.exports = collaboRoutes;
