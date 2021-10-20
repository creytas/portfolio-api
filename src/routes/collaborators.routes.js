const express = require("express");
const collaboRoutes = express.Router();
const controller = require("../controllers/collaborators.controllers");

collaboRoutes.get("/", controller.getAllCollaborators);
collaboRoutes.get("/:id", controller.getCollaboratorById);
collaboRoutes.post("/", controller.newCollaborator);
collaboRoutes.put("/:id", controller.updateCollaborator);
collaboRoutes.delete("/", controller.deleteAllCollaborators);
collaboRoutes.delete("/:id", controller.deleteCollaboratorById);

module.exports = collaboRoutes;
