/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => Promise.all([
  knex.schema.createTable('user', (table) => {
    table.increments().primary();
    table.string('first_name', 256).notNullable();
    table.string('last_name', 256).notNullable();
    table.string('username').unique().notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  }),
  knex.schema.createTable('concert', (table) => {
    table.increments().primary();
    table.string('name').notNullable();
    table.integer('artist_id').notNullable();
    table.string('location', 256);
    table.date('date');
    table.string('thumbnail',1000);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  }),
  knex.schema.createTable('comment', (table) => {
    table.increments().primary();
    table.integer('user_id').notNullable();
    table.integer('concert_id').notNullable();
    table.integer('parent_comment_id');
    table.string('text').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  }),
  knex.schema.createTable('artist', (table) => {
    table.increments().primary();
    table.string('name', 500).notNullable();
    table.string('genre', 256);
    table.string('bio', 256);
    table.string('thumbnail', 1000);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  }),
]);

/*
  
  This will be the notifications table
  knex.createTable('notification', (table) => {
    table.increments('id').primary();
    table.integer('user_id').notNullable();
    table.integer('concert_id').notNullable();
    table.integer('parent_comment_id');
    table.string('text').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
  */

// May create a table for locations
// May create logic to get events nearby

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => Promise.all([
  knex.schema.dropTableIfExists('user'),
  knex.schema.dropTableIfExists('concert'),
  knex.schema.dropTableIfExists('comment'),
  knex.schema.dropTableIfExists('artist'),
]);
