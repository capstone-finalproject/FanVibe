const listComments = async (req, res) => {
  const {
    db: { Comment }, // this req.db.User property is put here by the addModelsToRequest middleware
    query: { eventId }, // Should it be a query instead?
  } = req;

  try {
    const comments = await Comment.list({ eventId });

    res.send(comments);
  } catch (err) {
    console.error(err);
  }
};

module.exports = listComments;
