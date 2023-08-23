const deleteComment = async (req, res) => {
    const {
      db: { Comment },
      params: { user_id,concert_id,text,parent_comment_id},
    } = req
    const result = await Comment.deleteTicket(user_id,concert_id,text,parent_comment_id);
   
    res.sendStatus(result ? 204 : 404);
  };
  module.exports = deleteComment;