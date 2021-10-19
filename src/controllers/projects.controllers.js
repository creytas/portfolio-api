const getAllProjects = async (req, res) => {
  res.send({ message: "voici tous les projets" });
};
const getProjectById = async (req, res) => {
  res.send({ message: "voici le projet " + req.params.id + " ." });
};
const newProject = async (req, res) => {
  res.send({
    message: "le projet " + req.params.id + " a ete creee avec succes",
  });
};
const updateProject = async (req, res) => {
  res.send({
    message:
      "la mise a jour du projet " + req.params.id + " a ete faite avec succes",
  });
};
const deleteProjectById = async (req, res) => {
  res.send({
    message:
      "la suppression du projet " + req.params.id + " a ete faite avec succes",
  });
};
const deleteAllProjects = async (req, res) => {
  res.send({ message: "tous les projets ont ete supprimes" });
};

module.exports = {
  getAllProjects,
  getProjectById,
  newProject,
  updateProject,
  deleteProjectById,
  deleteAllProjects,
};
