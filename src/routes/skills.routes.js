const express = require("express");
const skillRoutes = express.Router();
const controller = require("../controllers/skills.controllers");

skillRoutes.get("/", controller.getAllSkills);
skillRoutes.get("/:id", controller.getSkillById);
skillRoutes.post("/", controller.newSkill);
skillRoutes.put("/:id", controller.updateSkill);
skillRoutes.delete("/", controller.deleteAllSkills);
skillRoutes.delete("/:id", controller.deleteSkillById);

module.exports = skillRoutes;
