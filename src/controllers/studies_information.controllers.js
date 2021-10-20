const getAllStudies = async (req, res) => {
  res.send({ message: "voici toutes les etudes" });
};
const getStudyById = async (req, res) => {
  res.send({ message: "voici l'etude " + req.params.id + " ." });
};
const newStudy = async (req, res) => {
  res.send({
    message: "l'etude " + req.body.id + " a ete creee avec succes",
  });
};
const updateStudy = async (req, res) => {
  res.send({
    message: "l'etude " + req.params.id + " a ete faite avec succes",
  });
};
const deleteStudyById = async (req, res) => {
  res.send({
    message:
      "la suppression de l'etude " + req.params.id + " a ete faite avec succes",
  });
};
const deleteAllStudies = async (req, res) => {
  res.send({ message: "toutes les etudes ont ete supprimes" });
};

module.exports = {
  getAllStudies,
  getStudyById,
  newStudy,
  updateStudy,
  deleteStudyById,
  deleteAllStudies,
};
