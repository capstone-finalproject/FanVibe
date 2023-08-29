const showMe = async (req, res) => {
  const {
    session,
    db: { User }, // this req.db.User property is put here by the addModelsToRequest middleware
  } = req;

  const user = await User.find(session.userId);
  res.send(user);
};

module.exports = showMe;
