const createUser = async (req, res) => {
  const {
    session, // this req.session property is put here by the handleCookieSessions middleware
    db: { User }, // this req.db.User property is put here by the addModelsToRequest middleware
    body: {
      username,
      password,
      firstName,
      lastName,
      email,
    }, // this req.body property is put here by the client
  } = req;

  try {
    // TODO: check if username is taken, what should you return?
    // TODO: SANITIZE values to prevent hacks

    const user = await User.create({ username, password, firstName, lastName, email });
    session.userId = user.id;

    res.send(user);
  } catch (err) {
    // Wanna send a error status here
    console.error(err);
  }
};

module.exports = createUser;
