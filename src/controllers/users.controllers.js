const getAllUsers = async (req, res) => {
  res.send({ message: "voici tous les utilisateurs" });
};
const getUserById = async (req, res) => {
  res.send({ message: "voici l'utilisateur " + req.params.id + " ." });
};
const newUser = async (req, res) => {
  res.send({
    message: "l'utilisateur " + req.body.id + " a ete creee avec succes",
  });
};
const updateUser = async (req, res) => {
  res.send({
    message:
      "la mise a jour de l'utilisateur " +
      req.params.id +
      " a ete faite avec succes",
  });
};
const deleteUserById = async (req, res) => {
  res.send({
    message:
      "la suppression de l'utilisateur " +
      req.params.id +
      " a ete faite avec succes",
  });
};
const deleteAllUsers = async (req, res) => {
  res.send({ message: "tous les utilisateurs ont ete supprimes" });
};

module.exports = {
  getAllUsers,
  getUserById,
  newUser,
  updateUser,
  deleteUserById,
  deleteAllUsers,
};
