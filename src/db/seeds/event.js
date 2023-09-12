const Event = require('../../models/concert');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// Should i be using the models here?
// Or just directly use knex
exports.seed = async (knex) => {
  // Check into this
  await Event.deleteAll();
  // needs email and passwords
  await Event.create({
    name: "Fallen Embers Tour",
    date: "17-10-2016 20:00:00",
    concertId: 1,
    venueId: 1,
    thumbnail: "https://i0.wp.com/discotech.me/wp-content/uploads/2021/08/illenium_fallen_embers_tour.jpeg?ssl=1",
  });

  await Event.create({
    name: "Tickets to my downfall Tour",
    date: "29-07-2022 20:00:00",
    concertId: 2,
    venueId: 2,
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/b/bb/Machine_Gun_Kelly_-_Tickets_to_My_Downfall.png",
  });

  await Event.create({
    name: "After Dawn Tour",
    date: "16-07-2022 20:30:00",
    concertId: 3,
    venueId: 3,
    thumbnail: "https://www.theweeknd.com/files/2022/12/weeknd-header-v2-300x169.jpg",
  });

  await Event.create({
    name: "All 4 Nothing Tour",
    date: "26-08-2022 22:30:00",
    concertId: 4,
    venueId: 2,
    thumbnail: "https://embracepresents.com/wp-content/uploads/2022/04/LAUV_IG-2-scaled.jpg",
  });

  await Event.create({
    name: "World's Hottest Tour",
    date: "29-08-2022 20:00:00",
    concertId: 5,
    venueId: 4,
    thumbnail: "https://www.allegiantstadium.com/assets/img/RG_AllegiantStadium_0923_BadBunny_DG_860x540-1-503022ff35.jpg",
  });

  await Event.create({
    name: "Strip Love Tour ",
    date: "16-09-2022 20:45:00",
    concertId: 6,
    venueId: 5,
    thumbnail: "https://rogersarena.com/wp-content/uploads/2022/04/karol-g-strip-love-tour-800x450.jpeg",
  });

  await Event.create({
  name: "Save Yourself Tour",
    date: "30-09-2022 20:00:00",
    concertId: 7,
    venueId: 6,
    thumbnail:"https://asiapacificarts.org/wp-content/uploads/2022/07/attachment-One-OK-Rock-2022-Tour-Admat.jpg",
  });

  await Event.create({
    name: "Saturno World Tour",
      date: "29-08-2022 20:00:00",
      concertId: 8,
      venueId: 5,
      thumbnail:"https://www.pdxpipeline.com/wp-content/uploads/2023/05/RauwSaturno101080x1080_v2-300x300.jpg",
    });
        
    await Event.create({
        name: "D-Day American Tour",
        date: "29-04-2023 20:00:00",
        concertId: 9,
        venueId: 7,
        thumbnail:"https://images.squarespace-cdn.com/content/v1/5aa2069c25bf02363bf5c7c4/1676953135559-GY7RVPK3ABYTMDIOF60P/Tour4.jpg",
        });

    await Event.create({
        name: "Radwimps American Tour",
          date: "30-04-2023 20:00:00",
          concertId: 10,
          venueId: 8,
          thumbnail:"https://src-radwimps.s3.ap-northeast-1.amazonaws.com/wp-content/uploads/2023/02/13223342/RADWIMPS2023_0213-1024x723.jpg",
    });

    await Event.create({
        name: "Formula V3 Tour",
          date: "10-06-2023 19:00:00",
          concertId: 11,
          venueId: 9,
          thumbnail:"https://www.billboard.com/wp-content/uploads/2022/02/Romeo-Santos-cr-Natalia-Aguilera-press-2022-billboard-1548.jpg?w=942&h=623&crop=1&resize=942%2C623",
    });
    
    await Event.create({
        name: "+-%* Tour",
          date: "11-06-2023 20:00:00",
          concertId: 12,
          venueId: 3,
          thumbnail:"https://upload.wikimedia.org/wikipedia/en/5/50/Ed_Sheeran_mathematics_tour_dates.jpeg",
    });

    await Event.create({
        name: "Martin Garrix",
          date: "15-06-2023 22:00:00",
          concertId: 13,
          venueId: 10,
          thumbnail:"https://edmjoy.com/wp-content/uploads/2019/06/Martin-Garrix-ADE-Flyer.png",
    });

    await Event.create({
        name: "Portals Tour",
          date: "07-06-2023 21:45:00",
          concertId: 14,
          venueId: 10,
          thumbnail:"https://images.discovery-prod.axs.com/2023/04/black-tiger-sex-machine-tickets_10-22-23_17_642c564d41dd7.png",
    });

    await Event.create({
        name: "Soy Rebelde Tour",
          date: "09-01-2023 20:30:00",
          concertId: 15,
          venueId: 2,
          thumbnail:"https://s.hdnux.com/photos/01/31/16/05/23388497/3/ratio3x2_960.webp",
    });

    await Event.create({
        name: "Manana Sera Bonito Tour ",
          date: "09-09-2023 20:00:00",
          concertId: 6,
          venueId: 3,
          thumbnail:"https://latinoedge.files.wordpress.com/2023/06/kag.jpg",
    });

    await Event.create({
        name: "Ascend Universe Tour",
        date: "10-09-2023 22:10:00",
        concertId: 1,
        venueId: 3,
        thumbnail:"https://i0.wp.com/themusicuniverse.com/wp-content/uploads/2023/07/bigtimerushnash.jpg?w=800&ssl=1",
      });
      
      await Event.create({
        name: "Mainstream Sellout Tour",
        date: "11-09-2023 20:00:00",
        concertId: 2,
        venueId: 11,
        thumbnail:"https://newscdn2.weigelbroadcasting.com/NFiUL-1647861729-221683-blog-machine%20gun.PNG",
      });
      
      await Event.create({
        name: "Blinding Lights World Tour",
        date: "12-09-2023 20:30:00",
        concertId: 3,
        venueId: 2,
        thumbnail:"https://www.bpmcdn.com/f/files/agassiz/import/2021-02/24115879_web1_210411-SUL-WeekndEvent-main_1.jpg;w=960",
      });
      
      await Event.create({
        name: "Modern Loneliness Tour",
        date: "13-09-2023 20:45:00",
        concertId: 4,
        venueId: 12,
        thumbnail:"https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:735596ef-dfb9-11ec-a53e-164563049251?quality=0.7&gen=ntrn&legacyStatusCode=true&format=webp&height=337.5&width=600&crop=true",
      });
      
      await Event.create({
        name: "YHLQMDLG World Tour",
        date: "14-09-2023 22:15:00",
        concertId: 5,
        venueId: 13,
        thumbnail:"https://upload.wikimedia.org/wikipedia/en/2/2d/BadBunnyTour2022Poster.jpg",
      });
      
      await Event.create({
        name: "Ocean American Tour",
        date: "15-09-2023 20:30:00",
        concertId: 6,
        venueId: 3,
        thumbnail:"https://upload.wikimedia.org/wikipedia/en/8/82/Karol_G_-_Ocean.png",
      });
      
      await Event.create({
        name: "Ambitions World Tour",
        date: "16-09-2023 20:30:00",
        concertId: 7,
        venueId: 14,
        thumbnail:"https://www.oneokrock.com/en/wp-content/uploads/2022/10/Ambitions_live_H1_small-copy-copy-e1521963538855.jpg",
      });
      
      await Event.create({
        name: "Tattoo Remix Tour",
        date: "17-09-2023 18:00:00",
        concertId: 8,
        venueId: 15,
        thumbnail:"https://static01.nyt.com/images/2022/11/14/arts/14rauw-alejandro1/merlin_216444957_1d92763f-4a43-4530-81cb-81bdd65f4f2e-jumbo.jpg?quality=75&auto=webp",
      });
      
      await Event.create({
        name: "Agust D Universe Tour",
        date: "18-09-2023 20:15:00",
        concertId: 9,
        venueId: 16,
        thumbnail:"https://www.allkpop.com/upload/2023/03/content/021132/1677774767-untitled-1.jpg",
      });
      
      await Event.create({
        name: "Tenki no Ko Live Tour",
        date: "19-09-2023 20:00:00",
        concertId: 10,
        venueId: 17,
        thumbnail:"https://img.mipon.org/wp-content/uploads/2019/06/02070413/tenki-no-ko.jpg",
      });
      
      await Event.create({
        name: "Golden Utopia Tour",
        date: "20-09-2023 20:45:00",
        concertId: 11,
        venueId: 18,
        thumbnail:"https://www.metlifestadium.com/images/default-source/events/2019-events/romeo-santos/romeo-santos-press-release-image.jpg?sfvrsn=2a5e6f7b_2",
      });
      
      await Event.create({
        name: "Shape of You World Tour",
        date: "21-09-2023 18:00:00",
        concertId: 12,
        venueId: 19,
        thumbnail:"https://www.shapeofyoushow.com/site/templates/img/ed.png",
      });
      
      await Event.create({
        name: "Helix Tour",
        date: "22-09-2023 20:00:00",
        concertId: 13,
        venueId: 20,
        thumbnail:"https://pmstudio.com/pmstudio/images/Martin-Garrix80.jpg",
      });
      
      await Event.create({
        name: "Futuristic Thriller Tour",
        date: "23-11-2023 22:00:00",
        concertId: 14,
        venueId: 21,
        thumbnail:"https://theflaggang.com/cdn/shop/articles/960x0_540x.jpg?v=1585058241",
      });
      
      await Event.create({
        name: "RBD Live Tour",
        date: "24-09-2023 20:00:00",
        concertId: 15,
        venueId: 22,
        thumbnail:"https://upload.wikimedia.org/wikipedia/commons/1/1b/Soy-Rebelde-Tour.jpg",
      });

      await Event.create({
        name: "Ascend Redux Tour",
        date: "25-09-2023 18:00:00",
        concertId: 1,
        venueId: 23,
        thumbnail:"https://edmidentity.com/wp-content/uploads/2019/06/1-2-1068x1651.jpg",
      });
      
      await Event.create({
        name: "Save Your Tears Tour",
        date: "26-09-2023 20:15:00",
        concertId: 3,
        venueId: 24,
        thumbnail:"https://ratedrnb.com/cdn/2021/04/the-weeknd-ariana-grande-save-your-tears-scaled.jpg",
      });
      
      await Event.create({
        name: "Eye of the Storm Tour",
        date: "27-09-2023 20:00:00",
        concertId: 7,
        venueId: 25,
        thumbnail:"https://www.oneokrock.com/en/wp-content/uploads/2022/10/one-ok-rock_tour_0710v3-e1563508374628-2.jpg",
      });
      
      await Event.create({
        name: "Divide and Conquer Tour",
        date: "28-09-2023 22:00:00",
        concertId: 12,
        venueId: 26,
        thumbnail:"https://upload.wikimedia.org/wikipedia/en/0/01/Ed_Sheeran_Divide_Tour.jpg",
      });
      
      await Event.create({
        name: "High Voltage Tour",
        date: "29-09-2023 23:00:00",
        concertId: 14,
        venueId: 27,
        thumbnail:"https://liveatthebluestone.com/wp-content/uploads/2022/02/631A4516-65BD-4AE8-8111-6A52E141F055.jpeg",
      });
      
   
};
