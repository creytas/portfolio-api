const getAllPersonalInfos = async (req, res) => {
  res.send({ message: "voici toutes les infos personnelles" });
};
const getPersonalInfoById = async (req, res) => {
  res.send({ message: "voici l'info personnelle' " + req.params.id + " ." });
};
const newPersonalInfo = async (req, res) => {
  res.send({
    message: "l'info personnelle " + req.body.id + " a ete creee avec succes",
  });
};
const updatePersonalInfo = async (req, res) => {
  res.send({
    message:
      "la mise a jour de l'info personnelle " +
      req.params.id +
      " a ete faite avec succes",
  });
};
const deletePersonalInfoById = async (req, res) => {
  res.send({
    message:
      "la suppression de l'info personnelle " +
      req.params.id +
      " a ete faite avec succes",
  });
};
const deleteAllPersonalInfos = async (req, res) => {
  res.send({ message: "toutes les infos personnelles ont ete supprimes" });
};

module.exports = {
  getAllPersonalInfos,
  getPersonalInfoById,
  newPersonalInfo,
  updatePersonalInfo,
  deletePersonalInfoById,
  deleteAllPersonalInfos,
};
