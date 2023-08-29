const listUsers = async (req, res) => {
  const {
    db: { User }, // this req.db.User property is put here by the addModelsToRequest middleware
  } = req;

  try {
    const users = await User.list();

    res.send(users);
  } catch (err) {
    console.error(err);
  }
};

module.exports = listUsers;
