const knex = require('../db/knex');

class Comment {
  constructor({ id, text, parent_comment_id, replies, concert_id }) {
    this.id = id;
    this.text = text;
    this.concertId = concert_id;
    this.parentThreadId = parent_comment_id;
    this.replies = replies;
  }

  static async list({ concertId }) {
    // Might actually split this out, to replies and comment tables
    const comments = await knex
      .select('*')
      .from('comment')
      .where('concert_id', concertId)
      .andWhere('parent_comment_id', null);

    // Map through the comments and attach the replies array from the subquery
    const commentsWithReplies = await Promise.all(
      comments.map(async (comment) => {
        const replies = await knex
          .select('*')
          .from('comment')
          .where('concert_id', concertId)
          .andWhere('parent_comment_id', comment.id);

        return { ...comment, replies };
      }),
    );

    return commentsWithReplies.map((comment) => new Comment(comment));
  }

  static async find({ id, userId }) {
    const [comment] = await knex
      .select('*')
      .from('comment')
      .where({ id })
      .andWhere({ user_id: userId })
      .returning('*');

    return comment ? new Comment(comment) : null;
  }

  static async create({ text, userId, concertId, threadId }) {
    const [comment] = await knex('comment')
      .insert({
        text,
        user_id: userId,
        concert_id: concertId,
        parent_comment_id: threadId,
      })
      .returning('*');

    return new Comment(comment);
  }

  static async delete({ id }) {
    return knex('comment').del().where({ id });
  }

  update = async ({ text, userId }) => {
    const [updatedComment] = await knex('comment')
      .where({ id: this.id, user_id: userId })
      .update({ text })
      .returning('*');

    return updatedComment ? new Comment(updatedComment) : null;
  };
}

module.exports = Comment;
