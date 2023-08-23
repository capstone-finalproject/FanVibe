const listComments = async (req, res) => {
  const { 
    db: { Comment } // this req.db.User property is put here by the addModelsToRequest middleware
  } = req; 

  const comments = await Comment.list();
  res.send(comments);
};

module.exports = listComments;
