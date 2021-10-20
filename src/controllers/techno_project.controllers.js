const getAllProjectsAllTechnos = async (req, res) => {
  res.send({
    message: "voici toutes les technos utilise dans tous les projets",
  });
};
const getProjectAllTechnos = async (req, res) => {
  res.send({
    message:
      "voici toutes les technos utilise pour le projet " +
      req.params.id_project +
      " .",
  });
};
const getTechnoByProjectIdAndTechnoId = async (req, res) => {
  res.send({
    message:
      "voici la techno " +
      req.params.id_techno +
      " utilise pour le projet " +
      req.params.id_project +
      " .",
  });
};
const newTechnoProject = async (req, res) => {
  res.send({
    message:
      "la techno " +
      req.body.id_techno +
      " a ete ajoutee au projet " +
      req.body.id_project +
      " avec succes",
  });
};
const updateTechnoProject = async (req, res) => {
  res.send({
    message:
      "la mise a jour de la techno " +
      req.params.id_techno +
      " du projet " +
      req.params.id_project +
      " a ete faite avec succes",
  });
};
const deleteTechnoProjectById = async (req, res) => {
  res.send({
    message:
      "la suppression de la techno " +
      req.params.id_techno +
      " du projet " +
      req.params.id_project +
      " a ete faite avec succes",
  });
};
const deleteAllTechnoProjects = async (req, res) => {
  res.send({
    message:
      "toutes les technos du projet " +
      req.params.id_project +
      " ont ete supprimes",
  });
};

module.exports = {
  getAllProjectsAllTechnos,
  getProjectAllTechnos,
  getTechnoByProjectIdAndTechnoId,
  newTechnoProject,
  updateTechnoProject,
  deleteTechnoProjectById,
  deleteAllTechnoProjects,
};
