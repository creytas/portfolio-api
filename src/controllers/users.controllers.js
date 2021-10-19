const getAllUsers = async (req, res) => {
  res.send({ message: "voici toutes les technos" });
};
const getUserById = async (req, res) => {
  res.send({ message: "voici la techno " + req.params.id + " ." });
};
const newUser = async (req, res) => {
  res.send({
    message: "la techno " + req.body.id + " a ete creee avec succes",
  });
};
const updateUser = async (req, res) => {
  res.send({
    message:
      "la mise a jour de la techno " +
      req.params.id +
      " a ete faite avec succes",
  });
};
const deleteUserById = async (req, res) => {
  res.send({
    message:
      "la suppression de la techno " +
      req.params.id +
      " a ete faite avec succes",
  });
};
const deleteAllUsers = async (req, res) => {
  res.send({ message: "toutes les technos ont ete supprimes" });
};

module.exports = {
  getAllUsers,
  getUserById,
  newUser,
  updateUser,
  deleteUserById,
  deleteAllUsers,
};
