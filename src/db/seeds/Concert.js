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
    date: "June 26, 2022",
    artistId: 1,
    location: "Forest Hills Stadium",
    thumbnail: "https://i0.wp.com/discotech.me/wp-content/uploads/2021/08/illenium_fallen_embers_tour.jpeg?ssl=1",
  });

  await Concert.create({
    name: "Tickets to my downfall Tour",
    date: "June 29, 2022",
    artistId: 2,
    location: "Madison Square Garden",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/b/bb/Machine_Gun_Kelly_-_Tickets_to_My_Downfall.png",
  });

  await Concert.create({
    name: "After Dawn Tour",
    date: "July 16, 2022",
    artistId: 3,
    location: "MetLife Stadium",
    thumbnail: "https://www.theweeknd.com/files/2022/12/weeknd-header-v2-300x169.jpg",
  });

  await Concert.create({
    name: "All 4 Nothing Tour",
    date: "August 26, 2022",
    artistId: 4,
    location: "Madison Square Garden",
    thumbnail: "https://embracepresents.com/wp-content/uploads/2022/04/LAUV_IG-2-scaled.jpg",
  });

  await Concert.create({
    name: "World's Hottest Tour",
    date: "August 29, 2022",
    artistId: 5,
    location: "Yankee Stadium",
    thumbnail: "https://www.allegiantstadium.com/assets/img/RG_AllegiantStadium_0923_BadBunny_DG_860x540-1-503022ff35.jpg",
  });

  await Concert.create({
    name: "Strip Love Tour ",
    date: "September 16, 2022",
    artistId: 6,
    location: "Barclays Center",
    thumbnail: "https://rogersarena.com/wp-content/uploads/2022/04/karol-g-strip-love-tour-800x450.jpeg",
  });

  await Concert.create({
  name: "Save Yourself Tour",
    date: "September 30, 2022",
    artistId: 7,
    location: "Hammerstein Ballroom",
    thumbnail:"https://asiapacificarts.org/wp-content/uploads/2022/07/attachment-One-OK-Rock-2022-Tour-Admat.jpg",
  });

  await Concert.create({
    name: "Saturno World Tour",
      date: "August 29, 2022",
      artistId: 8,
      location: "Barclays Center",
      thumbnail:"https://www.pdxpipeline.com/wp-content/uploads/2023/05/RauwSaturno101080x1080_v2-300x300.jpg",
    });
        
    await Concert.create({
        name: "D-Day American Tour",
        date: "April 29, 2023",
        artistId: 9,
        location: "Prudential Center",
        thumbnail:"https://images.squarespace-cdn.com/content/v1/5aa2069c25bf02363bf5c7c4/1676953135559-GY7RVPK3ABYTMDIOF60P/Tour4.jpg",
        });

    await Concert.create({
        name: "Radwimps American Tour",
          date: "April 30, 2023",
          artistId: 10,
          location: "Padillium Times Square",
          thumbnail:"https://src-radwimps.s3.ap-northeast-1.amazonaws.com/wp-content/uploads/2023/02/13223342/RADWIMPS2023_0213-1024x723.jpg",
    });

    await Concert.create({
        name: "Formula V3 Tour",
          date: "June 10, 2023",
          artistId: 11,
          location: "CitiField Stadium",
          thumbnail:"https://www.billboard.com/wp-content/uploads/2022/02/Romeo-Santos-cr-Natalia-Aguilera-press-2022-billboard-1548.jpg?w=942&h=623&crop=1&resize=942%2C623",
    });
    
    await Concert.create({
        name: "+-%* Tour",
          date: "June 11, 2023",
          artistId: 12,
          location: "MetLife Stadium",
          thumbnail:"https://upload.wikimedia.org/wikipedia/en/5/50/Ed_Sheeran_mathematics_tour_dates.jpeg",
    });

    await Concert.create({
        name: "Martin Garrix",
          date: "June 15, 2023",
          artistId: 13,
          location: "Brooklyn Mirage",
          thumbnail:"https://edmjoy.com/wp-content/uploads/2019/06/Martin-Garrix-ADE-Flyer.png",
    });

    await Concert.create({
        name: "Portals Tour",
          date: "July 7, 2023",
          artistId: 14,
          location: "Brooklyn Mirage",
          thumbnail:"https://images.discovery-prod.axs.com/2023/04/black-tiger-sex-machine-tickets_10-22-23_17_642c564d41dd7.png",
    });

    await Concert.create({
        name: "Soy Rebelde Tour",
          date: "September 1, 2023",
          artistId: 15,
          location: "Madison Square Garden",
          thumbnail:"https://s.hdnux.com/photos/01/31/16/05/23388497/3/ratio3x2_960.webp",
    });

    await Concert.create({
        name: "Manana Sera Bonito Tour ",
          date: "September 9, 2023",
          artistId: 6,
          location: "Metlife Stadium",
          thumbnail:"https://latinoedge.files.wordpress.com/2023/06/kag.jpg",
    });

    await Concert.create({
        name: "Ascend Universe Tour",
        date: "September 10, 2023",
        artistId: 1,
        location: "Metlife Stadium",
        thumbnail:"https://i0.wp.com/themusicuniverse.com/wp-content/uploads/2023/07/bigtimerushnash.jpg?w=800&ssl=1",
      });
      
      await Concert.create({
        name: "Mainstream Sellout Tour",
        date: "September 11, 2023",
        artistId: 2,
        location: "Red Rocks Amphitheatre",
        thumbnail:"https://newscdn2.weigelbroadcasting.com/NFiUL-1647861729-221683-blog-machine%20gun.PNG",
      });
      
      await Concert.create({
        name: "Blinding Lights World Tour",
        date: "September 12, 2023",
        artistId: 3,
        location: "Madison Square Garden",
        thumbnail:"https://www.bpmcdn.com/f/files/agassiz/import/2021-02/24115879_web1_210411-SUL-WeekndConcert-main_1.jpg;w=960",
      });
      
      await Concert.create({
        name: "Modern Loneliness Tour",
        date: "September 13, 2023",
        artistId: 4,
        location: "Staples Center",
        thumbnail:"https://images.paramount.tech/uri/mgid:arc:imageassetref:mtv.com:735596ef-dfb9-11ec-a53e-164563049251?quality=0.7&gen=ntrn&legacyStatusCode=true&format=webp&height=337.5&width=600&crop=true",
      });
      
      await Concert.create({
        name: "YHLQMDLG World Tour",
        date: "September 14, 2023",
        artistId: 5,
        location: "Dodger Stadium",
        thumbnail:"https://upload.wikimedia.org/wikipedia/en/2/2d/BadBunnyTour2022Poster.jpg",
      });
      
      await Concert.create({
        name: "Ocean American Tour",
        date: "September 15, 2023",
        artistId: 6,
        location: "Metlife Stadium",
        thumbnail:"https://upload.wikimedia.org/wikipedia/en/8/82/Karol_G_-_Ocean.png",
      });
      
      await Concert.create({
        name: "Ambitions World Tour",
        date: "September 16, 2023",
        artistId: 7,
        location: "Tokyo Dome",
        thumbnail:"https://www.oneokrock.com/en/wp-content/uploads/2022/10/Ambitions_live_H1_small-copy-copy-e1521963538855.jpg",
      });
      
      await Concert.create({
        name: "Tattoo Remix Tour",
        date: "September 17, 2023",
        artistId: 8,
        location: "Coliseo de Puerto Rico",
        thumbnail:"https://static01.nyt.com/images/2022/11/14/arts/14rauw-alejandro1/merlin_216444957_1d92763f-4a43-4530-81cb-81bdd65f4f2e-jumbo.jpg?quality=75&auto=webp",
      });
      
      await Concert.create({
        name: "Agust D Universe Tour",
        date: "September 18, 2023",
        artistId: 9,
        location: "Gocheok Sky Dome",
        thumbnail:"https://www.allkpop.com/upload/2023/03/content/021132/1677774767-untitled-1.jpg",
      });
      
      await Concert.create({
        name: "Tenki no Ko Live Tour",
        date: "September 19, 2023",
        artistId: 10,
        location: "Saitama Super Arena",
        thumbnail:"https://img.mipon.org/wp-content/uploads/2019/06/02070413/tenki-no-ko.jpg",
      });
      
      await Concert.create({
        name: "Golden Utopia Tour",
        date: "September 20, 2023",
        artistId: 11,
        location: "Estadio Cibao",
        thumbnail:"https://www.metlifestadium.com/images/default-source/events/2019-events/romeo-santos/romeo-santos-press-release-image.jpg?sfvrsn=2a5e6f7b_2",
      });
      
      await Concert.create({
        name: "Shape of You World Tour",
        date: "September 21, 2023",
        artistId: 12,
        location: "Wembley Stadium",
        thumbnail:"https://www.shapeofyoushow.com/site/templates/img/ed.png",
      });
      
      await Concert.create({
        name: "Helix Tour",
        date: "September 22, 2023",
        artistId: 13,
        location: "Tomorrowland Festival",
        thumbnail:"https://pmstudio.com/pmstudio/images/Martin-Garrix80.jpg",
      });
      
      await Concert.create({
        name: "Futuristic Thriller Tour",
        date: "September 23, 2023",
        artistId: 14,
        location: "EDC Las Vegas",
        thumbnail:"https://theflaggang.com/cdn/shop/articles/960x0_540x.jpg?v=1585058241",
      });
      
      await Concert.create({
        name: "RBD Live Tour",
        date: "September 24, 2023",
        artistId: 15,
        location: "Arena Ciudad de México",
        thumbnail:"https://upload.wikimedia.org/wikipedia/commons/1/1b/Soy-Rebelde-Tour.jpg",
      });

      await Concert.create({
        name: "Ascend Redux Tour",
        date: "September 25, 2023",
        artistId: 1,
        location: "Coachella",
        thumbnail:"https://edmidentity.com/wp-content/uploads/2019/06/1-2-1068x1651.jpg",
      });
      
      await Concert.create({
        name: "Save Your Tears Tour",
        date: "September 26, 2023",
        artistId: 3,
        location: "O2 Arena",
        thumbnail:"https://ratedrnb.com/cdn/2021/04/the-weeknd-ariana-grande-save-your-tears-scaled.jpg",
      });
      
      await Concert.create({
        name: "Eye of the Storm Tour",
        date: "September 27, 2023",
        artistId: 7,
        location: "The Forum",
        thumbnail:"https://www.oneokrock.com/en/wp-content/uploads/2022/10/one-ok-rock_tour_0710v3-e1563508374628-2.jpg",
      });
      
      await Concert.create({
        name: "Divide and Conquer Tour",
        date: "September 28, 2023",
        artistId: 12,
        location: "Rose Bowl",
        thumbnail:"https://upload.wikimedia.org/wikipedia/en/0/01/Ed_Sheeran_Divide_Tour.jpg",
      });
      
      await Concert.create({
        name: "High Voltage Tour",
        date: "September 29, 2023",
        artistId: 14,
        location: "Ultra Miami",
        thumbnail:"https://liveatthebluestone.com/wp-content/uploads/2022/02/631A4516-65BD-4AE8-8111-6A52E141F055.jpeg",
      });
      
   
};
