const createComment = async (req, res) => {
    const {
      session, // this req.session property is put here by the handleCookieSessions middleware
      db: { Comment }, // this req.db.User property is put here by the addModelsToRequest middleware
      body: { user_id,concert_id,text,parent_comment_id }, // this req.body property is put here by the client
    } = req;
  
    // TODO: check if username is taken, what should you return?
    const comment = await Comment.create( user_id,concert_id,text,parent_comment_id);
    session.userId = user.id;
  
    res.send(comment);
  };
  
  module.exports = createComment;