const login = async (req, res) => {
    const {
      session, // this req.session property is put here by the handleCookieSessions middleware
      db: { User }, // this req.db.User property is put here by the addModelsToRequest middleware
      body: { username, password }, // this req.body property is put here by the client
    } = req;
  
    // Can't login if already logged in
    // Look into this more though
    if (session.userId) return res.sendStatus(500);
  
    try {
      const user = await User.findByUsername(username);
      if (!user) return res.sendStatus(404);
  
      const isPasswordValid = await user.isValidPassword(password);
      if (!isPasswordValid) return res.sendStatus(401);
  
      session.userId = user.id;
      res.send(user);
    } catch (err) {
      console.error(err);
    }
  };
  
  const logout = (req, res) => {
    // this req.session property is put here by the handleCookieSessions middleware
    req.session = null;
    res.sendStatus(204);
  };
  
  module.exports = {
    login,
    logout,
  };
  