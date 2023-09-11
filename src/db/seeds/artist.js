const Artist = require('../../models/artist');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// Should i be using the models here?
// Or just directly use knex
exports.seed = async (knex) => {
  // Check into this
  await Artist.deleteAll();
  await Artist.create({
    id: 1, 
    name: "Illenium",
    genre: "EDM",
    thumbnail: "URL_FOR_ILLENIUM_THUMBNAIL",
  });

  await Artist.create({
    id: 2,
    name: "Machine Gun Kelly",
    genre: "Rock",
    thumbnail: "URL_FOR_MGK_THUMBNAIL",
  });

  await Artist.create({
    id: 3,
    name: "The Weeknd",
    genre: "R&B",
    thumbnail: "URL_FOR_THEWEEKND_THUMBNAIL",
  });

  await Artist.create({
    id: 4,
    name: "Lauv",
    genre: "Pop",
    thumbnail: "URL_FOR_LAUV_THUMBNAIL",
  });

  await Artist.create({
    id: 5,
    name: "Bad Bunny",
    genre: "Reggaeton",
    thumbnail: "URL_FOR_BADBUNNY_THUMBNAIL",
  });

  await Artist.create({
    id: 6,
    name: "Karol G",
    genre: "Reggaeton",
    thumbnail: "URL_FOR_KAROLG_THUMBNAIL",
  });

  await Artist.create({
    id: 7,
    name: "ONE OK ROCK",
    genre: "Rock",
    thumbnail: "URL_FOR_ONEOKROCK_THUMBNAIL",
  });

await Artist.create({
    id: 8,
    name: "Rauw Alejandro",
    genre: "Reggaeton",
    thumbnail: "URL_FOR_EDSHEERAN_THUMBNAIL",
  });

  await Artist.create({
    id: 9,
    name: "Suga",
    genre: "K-Pop",
    thumbnail: "URL_FOR_EDSHEERAN_THUMBNAIL",
  });

  await Artist.create({
    id: 10,
    name: "Radwimps",
    genre: "J-Rock",
    thumbnail: "URL_FOR_EDSHEERAN_THUMBNAIL",
  });

  await Artist.create({
    id: 11,
    name: "Romeo Santos",
    genre: "Reggaeton",
    thumbnail: "URL_FOR_EDSHEERAN_THUMBNAIL",
  });

  await Artist.create({
    id: 12,
    name: "Ed Sheeran",
    genre: "Pop",
    thumbnail: "URL_FOR_EDSHEERAN_THUMBNAIL",
  });

  await Artist.create({
    id: 13,
    name: "Martin Garrix",
    genre: "EDM",
    thumbnail: "URL_FOR_EDSHEERAN_THUMBNAIL",
  });

  await Artist.create({
    id: 14,
    name: "Black Tiger Sex Machine",
    genre: "EDM",
    thumbnail: "URL_FOR_EDSHEERAN_THUMBNAIL",
  });

  await Artist.create({
    id: 15,
    name: "Rebelde",
    genre: "Pop",
    thumbnail: "URL_FOR_EDSHEERAN_THUMBNAIL",
  });


};
