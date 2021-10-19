const getAllCollaborators = async (req, res) => {
  res.send({ message: "voici tous les collaborateurs" });
};
const getCollaboratorById = async (req, res) => {
  res.send({ message: "voici le collaborateur " + req.params.id + " ." });
};
const newCollaborator = async (req, res) => {
  res.send({
    message: "le collaborateur " + req.body.id + " a ete creee avec succes",
  });
};
const updateCollaborator = async (req, res) => {
  res.send({
    message:
      "la mise a jour du collaborateur " +
      req.params.id +
      " a ete faite avec succes",
  });
};
const deleteCollaboratorById = async (req, res) => {
  res.send({
    message:
      "la suppression du collaborateur " +
      req.params.id +
      " a ete faite avec succes",
  });
};
const deleteAllCollaborators = async (req, res) => {
  res.send({ message: "tous les collaborateurs ont ete supprimes" });
};

module.exports = {
  getAllCollaborators,
  getCollaboratorById,
  newCollaborator,
  updateCollaborator,
  deleteCollaboratorById,
  deleteAllCollaborators,
};
