const express = require("express");
const technoRoutes = express.Router();

technoRoutes.get("/all");
technoRoutes.get("/:id");
technoRoutes.post("/new-techno");
technoRoutes.put("/update-techno/:id");
technoRoutes.delete("/delete-techno/:id");
technoRoutes.delete("/delete-techno/all");

module.exports = technoRoutes;
