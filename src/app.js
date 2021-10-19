const express = require("express");
const cors = require("cors");
const path = require("./config/paths");
const collaboRoutes = require("./routes/collaborators.routes");
const projectRoutes = require("./routes/projects.routes");
const skillRoutes = require("./routes/skills.routes");
const technoRoutes = require("./routes/technos.routes");
const userRoutes = require("./routes/users.routes");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(path.collaboratorBaseURI, collaboRoutes);
app.use(path.projectBaseURI, projectRoutes);
app.use(path.skillBaseURI, skillRoutes);
app.use(path.technoBaseURI, technoRoutes);
app.use(path.userBaseURI, userRoutes);

app.listen(PORT, () => {
  console.log(`running on the PORT: ${PORT}`);
});
