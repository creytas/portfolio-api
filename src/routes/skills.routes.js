const express = require("express");
const skillRoutes = express.Router();
const controller = require("../controllers/skills.controllers");

skillRoutes.get("/all", controller.getAllSkills);
skillRoutes.get("/:id", controller.getSkillById);
skillRoutes.post("/new-skill", controller.newSkill);
skillRoutes.put("/update-skill/:id", controller.updateSkill);
skillRoutes.delete("/delete-skill/:id", controller.deleteSkillById);
skillRoutes.delete("/delete-skill/all", controller.deleteAllSkills);

module.exports = skillRoutes;
