const Concert = require('../../models/concert');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// Should i be using the models here?
// Or just directly use knex
exports.seed = async (knex) => {
  // Check into this
  await Concert.deleteAll();
  // needs email and passwords
  await Concert.create({
    name: "Fallen Embers Tour",
    artistId: 1,
    thumbnail: "https://i0.wp.com/discotech.me/wp-content/uploads/2021/08/illenium_fallen_embers_tour.jpeg?ssl=1",
  });

  await Concert.create({
    name: "Tickets to my downfall Tour",
    artistId: 2,
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/b/bb/Machine_Gun_Kelly_-_Tickets_to_My_Downfall.png",
  });

  await Concert.create({
    name: "After Dawn Tour",
    artistId: 3,
    thumbnail: "https://www.theweeknd.com/files/2022/12/weeknd-header-v2-300x169.jpg",
  });

  await Concert.create({
    name: "All 4 Nothing Tour",
    artistId: 4,
    thumbnail: "https://embracepresents.com/wp-content/uploads/2022/04/LAUV_IG-2-scaled.jpg",
  });

  await Concert.create({
    name: "World's Hottest Tour",
    artistId: 5,
    thumbnail: "https://www.allegiantstadium.com/assets/img/RG_AllegiantStadium_0923_BadBunny_DG_860x540-1-503022ff35.jpg",
  });

  await Concert.create({
    name: "Strip Love Tour ",
    artistId: 6,
    thumbnail: "https://rogersarena.com/wp-content/uploads/2022/04/karol-g-strip-love-tour-800x450.jpeg",
  });

  await Concert.create({
    name: "Save Yourself Tour",
    artistId: 7,
    thumbnail: "https://asiapacificarts.org/wp-content/uploads/2022/07/attachment-One-OK-Rock-2022-Tour-Admat.jpg",
  });

  await Concert.create({
    name: "Saturno World Tour",
    artistId: 8,
    thumbnail: "https://www.pdxpipeline.com/wp-content/uploads/2023/05/RauwSaturno101080x1080_v2-300x300.jpg",
  });

  await Concert.create({
    name: "D-Day American Tour",
    artistId: 9,
    thumbnail: "https://images.squarespace-cdn.com/content/v1/5aa2069c25bf02363bf5c7c4/1676953135559-GY7RVPK3ABYTMDIOF60P/Tour4.jpg",
  });

  await Concert.create({
    name: "Radwimps American Tour",
    artistId: 10,
    thumbnail: "https://src-radwimps.s3.ap-northeast-1.amazonaws.com/wp-content/uploads/2023/02/13223342/RADWIMPS2023_0213-1024x723.jpg",
  });

  await Concert.create({
    name: "Formula V3 Tour",
    artistId: 11,
    thumbnail: "https://www.billboard.com/wp-content/uploads/2022/02/Romeo-Santos-cr-Natalia-Aguilera-press-2022-billboard-1548.jpg?w=942&h=623&crop=1&resize=942%2C623",
  });

  await Concert.create({
    name: "+-%* Tour",
    artistId: 12,
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/5/50/Ed_Sheeran_mathematics_tour_dates.jpeg",
  });

  await Concert.create({
    name: "Martin Garrix",
    artistId: 13,
    thumbnail: "https://edmjoy.com/wp-content/uploads/2019/06/Martin-Garrix-ADE-Flyer.png",
  });

  await Concert.create({
    name: "Portals Tour",
    artistId: 14,
    thumbnail: "https://images.discovery-prod.axs.com/2023/04/black-tiger-sex-machine-tickets_10-22-23_17_642c564d41dd7.png",
  });

  await Concert.create({
    name: "Soy Rebelde Tour",
    artistId: 15,
    thumbnail: "https://s.hdnux.com/photos/01/31/16/05/23388497/3/ratio3x2_960.webp",
  });

  await Concert.create({
    name: "Manana Sera Bonito Tour ",
    artistId: 6,
    thumbnail: "https://latinoedge.files.wordpress.com/2023/06/kag.jpg",
  });

  await Concert.create({
    name: "Ascend Universe Tour",
    artistId: 1,
    thumbnail: "https://i0.wp.com/themusicuniverse.com/wp-content/uploads/2023/07/bigtimerushnash.jpg?w=800&ssl=1",
  });

  await Concert.create({
    name: "Mainstream Sellout Tour",
    artistId: 2,
    thumbnail: "https://newscdn2.weigelbroadcasting.com/NFiUL-1647861729-221683-blog-machine%20gun.PNG",
  });

  await Concert.create({
    name: "Blinding Lights World Tour",
    artistId: 3,
    thumbnail: "https://www.bpmcdn.com/f/files/agassiz/import/2021-02/24115879_web1_210411-SUL-WeekndConcert-main_1.jpg;w=960",
  });

  await Concert.create({
    name: "Modern Loneliness Tour",
    artistId: 4,
    thumbnail: "https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:735596ef-dfb9-11ec-a53e-164563049251?quality=0.7&gen=ntrn&legacyStatusCode=true&format=webp&height=337.5&width=600&crop=true",
  });

  await Concert.create({
    name: "YHLQMDLG World Tour",
    artistId: 5,
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/2/2d/BadBunnyTour2022Poster.jpg",
  });

  await Concert.create({
    name: "Ocean American Tour",
    artistId: 6,
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/8/82/Karol_G_-_Ocean.png",
  });

  await Concert.create({
    name: "Ambitions World Tour",
    artistId: 7,
    thumbnail: "https://www.oneokrock.com/en/wp-content/uploads/2022/10/Ambitions_live_H1_small-copy-copy-e1521963538855.jpg",
  });

  await Concert.create({
    name: "Tattoo Remix Tour",
    artistId: 8,
    thumbnail: "https://static01.nyt.com/images/2022/11/14/arts/14rauw-alejandro1/merlin_216444957_1d92763f-4a43-4530-81cb-81bdd65f4f2e-jumbo.jpg?quality=75&auto=webp",
  });

  await Concert.create({
    name: "Agust D Universe Tour",
    artistId: 9,
    thumbnail: "https://www.allkpop.com/upload/2023/03/content/021132/1677774767-untitled-1.jpg",
  });

  await Concert.create({
    name: "Tenki no Ko Live Tour",
    artistId: 10,
    thumbnail: "https://img.mipon.org/wp-content/uploads/2019/06/02070413/tenki-no-ko.jpg",
  });

  await Concert.create({
    name: "Golden Utopia Tour",
    artistId: 11,
    thumbnail: "https://www.metlifestadium.com/images/default-source/events/2019-events/romeo-santos/romeo-santos-press-release-image.jpg?sfvrsn=2a5e6f7b_2",
  });

  await Concert.create({
    name: "Shape of You World Tour",
    artistId: 12,
    thumbnail: "https://www.shapeofyoushow.com/site/templates/img/ed.png",
  });

  await Concert.create({
    name: "Helix Tour",
    artistId: 13,
    thumbnail: "https://pmstudio.com/pmstudio/images/Martin-Garrix80.jpg",
  });

  await Concert.create({
    name: "Futuristic Thriller Tour",
    artistId: 14,
    thumbnail: "https://theflaggang.com/cdn/shop/articles/960x0_540x.jpg?v=1585058241",
  });

  await Concert.create({
    name: "RBD Live Tour",
    artistId: 15,
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Soy-Rebelde-Tour.jpg",
  });

  await Concert.create({
    name: "Ascend Redux Tour",
    artistId: 1,
    thumbnail: "https://edmidentity.com/wp-content/uploads/2019/06/1-2-1068x1651.jpg",
  });

  await Concert.create({
    name: "Save Your Tears Tour",
    artistId: 3,
    thumbnail: "https://ratedrnb.com/cdn/2021/04/the-weeknd-ariana-grande-save-your-tears-scaled.jpg",
  });

  await Concert.create({
    name: "Eye of the Storm Tour",
    artistId: 7,
    thumbnail: "https://www.oneokrock.com/en/wp-content/uploads/2022/10/one-ok-rock_tour_0710v3-e1563508374628-2.jpg",
  });

  await Concert.create({
    name: "Divide and Conquer Tour",
    artistId: 12,
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/0/01/Ed_Sheeran_Divide_Tour.jpg",
  });

  await Concert.create({
    name: "High Voltage Tour",
    artistId: 14,
    thumbnail: "https://liveatthebluestone.com/wp-content/uploads/2022/02/631A4516-65BD-4AE8-8111-6A52E141F055.jpeg",
  });


};
