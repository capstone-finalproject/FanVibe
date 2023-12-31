const createComment = async (req, res) => {
  const {
    session, // this req.session property is put here by the handleCookieSessions middleware
    db: { Comment }, // this req.db.User property is put here by the addModelsToRequest middleware
    body: {
      text,
      eventId,
      threadId,
    },
  } = req;

  try {
    const { userId } = session;

    const comment = await Comment.create({
      text,
      userId,
      eventId,
      threadId,
    });

    res.send(comment);
  } catch (err) {
    console.error(err);
  }
};

module.exports = createComment;
