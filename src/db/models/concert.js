const knex = require("../knex");

class Comment {
  constructor({
    id,
    request_id,
    user_id,
    content,
    is_public,
    created_at,
    username,
    pfp_url,
    is_fabricator,
  }) {
    this.id = id;
    this.request_id = request_id;
    this.user_id = user_id;
    this.content = content;
    this.is_public = is_public;
    this.timestamp = created_at;
    this.username = username;
    this.pfp_url = pfp_url;
    this.is_fabricator = is_fabricator;
  }

  static async list(id, page) {
    page = (Number(page) - 1) * 7;
    const query = `SELECT c.id, c.request_id, c.user_id, c.content, c.is_public, c.created_at, c.is_public, u.username, u.pfp_url, u.is_fabricator
    FROM comments AS c
    INNER JOIN users AS u ON c.user_id = u.id
    WHERE c.request_id = ? AND c.is_public = TRUE
    ORDER BY 
    c.created_at DESC
    OFFSET ?
    ROWS lIMIT 7;`;
    const { rows } = await knex.raw(query, [id, page]);
    return rows.map((comments) => new Comment(comments));
  }

  static async listPrivate(id, page) {
    page = (Number(page) - 1) * 7;
    const query = `SELECT c.id, c.request_id, c.user_id, c.content, c.is_public, c.created_at, c.is_public, u.username, u.pfp_url
    FROM comments AS c
    INNER JOIN users AS u ON c.user_id = u.id
    WHERE c.request_id = ? AND c.is_public = FALSE
    ORDER BY 
    c.created_at DESC
    OFFSET ?
    ROWS lIMIT 7;`;
    const { rows } = await knex.raw(query, [id, page]);
    return rows.map((comments) => new Comment(comments));
  }

  static async createComment(request_id, user_id, content, is_public) {
    const query = `INSERT INTO comments (request_id, user_id, content, is_public)
    VALUES (?, ?, ?, ? ) RETURNING *;`;
    const {
      rows: [comment],
    } = await knex.raw(query, [request_id, user_id, content, is_public]);
    return new Comment(comment);
  }

  static async find(id) {
    try {
      const query = `SELECT * FROM comments WHERE id = ?`;
      const {
        rows: [comment],
      } = await knex.raw(query, [id]);
      return comment ? new Comment(comment) : null;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async deleteComment(id) {
    try {
      const query = `DELETE FROM comments WHERE id = ?`;
      const { rowCount: count } = await knex.raw(query, [id]);
      return count;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  update = async (content) => {
    const [updatedContent] = await knex("comments")
      .where({ id: this.id })
      .update({ content })
      .returning("*");
    return updatedContent ? new Comment(updatedContent) : null;
  };
}

module.exports = Comment;
