const knex = require("../db/knex");

class Comment {
  constructor({
    id,
    text,
    parent_comment_id,
    replies,
    event_id,
    username,
    likes,
  }) {
    this.id = id;
    this.text = text;
    this.eventId = event_id;
    this.parentThreadId = parent_comment_id;
    this.replies = replies;
    this.username = username;
    this.likes = likes;
  }

  static async list({ eventId }) {
    // Might actually split this out, to replies and comment tables
    const comments = await knex
      .select("comment.*", "user.username AS username")
      .from("comment")
      .leftJoin("user", "user.id", "comment.user_id")
      .where("event_id", eventId)
      .andWhere("parent_comment_id", null)
      .orderBy('id', 'desc');

    // Map through the comments and attach the replies array from the subquery
    const commentsWithReplies = await Promise.all(
      comments.map(async (comment) => {
        const replies = await knex
          .select("comment.*", "user.username")
          .from("comment")
          .leftJoin("user", "user.id", "comment.user_id")
          .where("event_id", eventId)
          .andWhere("parent_comment_id", comment.id)
          .orderBy('id', 'desc');

        return { ...comment, replies };
      }),
    );

    return commentsWithReplies.map((comment) => new Comment(comment));
  }

  static async find({ id, userId }) {
    const [comment] = await knex
      .select("*")
      .from("comment")
      .leftJoin("user", "user.id", "comment.user_id")
      .where("comment.id", "=", id)
      .andWhere("comment.user_id", "=", userId)
      .returning("*");

    const replies = await knex
      .select("comment.*", "user.username")
      .from("comment")
      .leftJoin("user", "user.id", "comment.user_id")
      .where("event_id", comment.event_id)
      .andWhere("parent_comment_id", comment.id)
      .orderBy('id', 'desc');

    return comment ? new Comment({ ...comment, replies }) : null;
  }

  static async create({ text, userId, eventId, threadId }) {
    const [comment] = await knex("comment")
      .insert({
        text,
        user_id: userId,
        event_id: eventId,
        parent_comment_id: threadId,
      })
      .returning("*");

    return this.find({ id: comment.id, userId });
  }

  static async delete({ id }) {
    return knex("comment").del().where({ id });
  }
  static async deleteAll() {
    return knex('comment').del();
  }

  static async likeComment({ commentId, likes }) {
    const [comment] = await knex("comment")
      .update({
        likes,
      })
      .where("id", commentId)
      .returning("*");

    return new Comment(comment);
  }

  update = async ({ text, userId }) => {
    const [updatedComment] = await knex("comment")
      .where({ id: this.id, user_id: userId })
      .update({ text })
      .returning("*");

    return updatedComment ? new Comment(updatedComment) : null;
  };
}

module.exports = Comment;
