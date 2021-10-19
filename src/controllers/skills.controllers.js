const getAllSkills = async (req, res) => {
  res.send({ message: "voici toutes les competences" });
};
const getSkillById = async (req, res) => {
  res.send({ message: "voici la competence " + req.params.id + " ." });
};
const newSkill = async (req, res) => {
  res.send({
    message: "la competence " + req.body.id + " a ete creee avec succes",
  });
};
const updateSkill = async (req, res) => {
  res.send({
    message:
      "la mise a jour de la competence " +
      req.params.id +
      " a ete faite avec succes",
  });
};
const deleteSkillById = async (req, res) => {
  res.send({
    message:
      "la suppression de la competence " +
      req.params.id +
      " a ete faite avec succes",
  });
};
const deleteAllSkills = async (req, res) => {
  res.send({ message: "toutes les competences ont ete supprimes" });
};

module.exports = {
  getAllSkills,
  getSkillById,
  newSkill,
  updateSkill,
  deleteSkillById,
  deleteAllSkills,
};
