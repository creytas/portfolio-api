const getAllTechno = async (req, res) => {
  res.send({ message: "voici toutes les technos" });
};
const getTechnoById = async (req, res) => {
  res.send({ message: "voici la techno " + req.params.id + " ." });
};
const newTechno = async (req, res) => {
  res.send({
    message: "la techno " + req.params.id + " a ete creee avec succes",
  });
};
const updateTechno = async (req, res) => {
  res.send({
    message:
      "la mise a jour de la techno " +
      req.params.id +
      " a ete faite avec succes",
  });
};
const deleteTechnoById = async (req, res) => {
  res.send({
    message:
      "la suppression de la techno " +
      req.params.id +
      " a ete faite avec succes",
  });
};
const deleteAllTechno = async (req, res) => {
  res.send({ message: "toutes les technos ont ete supprimes" });
};

module.exports = {
  getAllTechno,
  getTechnoById,
  newTechno,
  updateTechno,
  deleteTechnoById,
  deleteAllTechno,
};
