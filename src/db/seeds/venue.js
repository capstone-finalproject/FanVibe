const Venue = require('../../models/concert');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// Should i be using the models here?
// Or just directly use knex
exports.seed = async (knex) => {
    // Check into this
    await Venue.deleteAll();
    // needs email and passwords
    await Venue.create({
        id: 1,
        name: "Forest Hills Stadium",
        address: "1 Tennis Pl",
        city: "Forest Hills",
        state: "NY",
        postalCode: parseInt("11375"),
        country: "United States",
        website: "https://www.foresthillsstadium.com/",
    });

    await Venue.create({
        id: 2,
        name:"Madison Square Garden",
        address: "4 Pennsylvania Plaza",
        city: "New York",
        state: "NY",
        postalCode: parseInt("10001"),
        country: "United States",
        website: "https://www.msg.com/venue-tours/madison-square-garden/",
    });

    await Venue.create({
        id: 3,
        name: "MetLife Stadium",
        address: "1 Metlife Stadium Dr",
        city: "East Rutherford",
        state: "NJ",
        postalCode: parseInt("07073"),
        country: "United States",
        website: "https://www.metlifestadium.com/",
    });

    await Venue.create({
        id: 4,
        name: "Yankee Stadium",
        address: "1 E 161 St",
        city: "Bronx",
        state: "NY",
        postalCode: parseInt("10451"),
        country: "United States",
        website: "https://www.mlb.com/yankees/ballpark",
    });

    await Venue.create({
        id: 5,
        name: "Barclays Center",
        address: "620 Atlantic Ave",
        city:"Brooklyn",
        state: "NY",
        postalCode: parseInt("11217"),
        country: "United States",
        website: "https://www.barclayscenter.com/",
    });

    await Venue.create({
        id: 6,
        name: "Hammerstein Ballroom",
        address: "311 W 34th St.",
        city: "New York",
        state: "NY",
        postalCode: parseInt("10001"),
        country: "United States",
        website: "https://mc34.com/",
    });

    await Venue.create({
        id: 7,
        name: "Prudential Center",
        address: "25 Lafayette St",
        city: "Newark",
        state: "NJ",
        postalCode: parseInt("07102"),
        country: "United States",
        website: "https://www.prucenter.com/",
    });

    await Venue.create({
        id: 8,
        name: "Padillium Times Square",
        address: "1515 Broadway",
        city: "New York",
        state: "NY",
        postalCode: parseInt("10036"),
        country: "United States",
        website: "https://www.palladiumtimessquare.com/",
    });

    await Venue.create({
        id: 9,
        name: "CitiField Stadium",
        address: "41 Seaver Wy",
        city: "Queens",
        state: "NY",
        postalCode: parseInt("11368"),
        country: "United States",
        website: "https://www.mlb.com/mets/ballpark",
    });

    await Venue.create({
        id: 10,
        name: "Brooklyn Mirage",
        address: "140 Stewart Ave",
        city: "Brooklyn",
        state: "NY",
        postalCode: parseInt("11237"),
        country: "United States",
        website: "https://www.avant-gardner.com/",
    });

    await Venue.create({
        id: 11,
        name: "Red Rocks Amphitheatre",
        address: "303-319 CO-8",
        city: "Morrison",
        state: "CO",
        postalCode: parseInt("80465"),
        country: "United States",
        website: "https://www.redrocksonline.com/",
    });

    await Venue.create({
        id: 12,
        name: "Staples Center",
        address: "1111 S Figueroa St",
        city: "Los Angeles",
        state: "CA",
        postalCode: parseInt("90015"),
        country: "United States",
        website: "https://business-directory.socialbilitty.com/places/united-states/california/los-angeles/attractions/staples-center/",
    });

    await Venue.create({
        id: 13,
        name: "Dodger Stadium",
        address: "1000 Vin Scully Ave",
        city: "Los Angeles",
        state: "CA",
        postalCode: parseInt("90012"),
        country: "United States",
        website: "https://www.mlb.com/dodgers/ballpark",
    });

    await Venue.create({
        id: 14,
        name: "Tokyo Dome",
        address: "1-3-61 Koraku, Bunkyo City",
        city: "Tokyo",
        state: "Tokyo",  
        postalCode: parseInt("112-0004"),
        country: "Japan",
        website: "https://www.tokyo-dome.co.jp/en/",
    });
    
    await Venue.create({
        id: 15,
        name: "Coliseo de Puerto Rico",
        address: "500 Ave Arterial B St",
        city: "San Juan",
        state: "PR",
        postalCode: parseInt("00918"),
        country: "Puerto Rico",
        website: "https://www.coliseodepuertorico.com/",
    });
    
    await Venue.create({
        id: 16,
        name: "Gocheok Sky Dome",
        address: "430 Gyeongin-ro",
        city: "Seoul",
        state: "Seoul",
        postalCode: parseInt("08389"),
        country: "South Korea",
        website: "https://www.skysportspark.co.kr/",
    });
    
    await Venue.create({
        id: 17,
        name: "Saitama Super Arena",
        address: "8 Shintoshin, Chuo Ward",
        city: "Saitama",
        state: "Saitama",
        postalCode: parseInt("330-9111"),
        country: "Japan",
        website: "https://www.saitama-arena.co.jp/",
    });
    
    await Venue.create({
        id: 18,
        name: "Estadio Cibao",
        address: "Juana Saltitopa 74",
        city: "Santiago de los Caballeros",
        state: "Santiago de los Caballeros",
        postalCode: parseInt("51000"),
        country: "Dominican Republic",
        website: "https://www.aguilas.com.do/",
    });
    
    await Venue.create({
        id: 19,
        name: "Wembley Stadium",
        address: "Wembley, London HA9 0WS",
        city: "London",
        state: "London",
        postalCode: parseInt("HA9 0WS"),
        country: "United Kingdom",
        website: "https://www.wembleystadium.com/",
    });
    
    await Venue.create({
        id: 20,
        name: "Tomorrowland Festival",
        address: "2850 Boom",
        city: "Provinciaal Recreatiedomein De Schorre",
        state: "Belgium",
        postalCode: parseInt("2850"),
        country: "Belgium",
        website: "https://www.tomorrowland.com/",
    });
    
    await Venue.create({
        id: 21,
        name: "EDC Las Vegas",
        address: "7000 Las Vegas Blvd N",
        city: "Las Vegas",
        state: "NV",
        postalCode: parseInt("89115"),
        country: "United States",
        website: "https://lasvegas.electricdaisycarnival.com/",
    });
    
    await Venue.create({
        id: 22,
        name: "Arena Ciudad de México",
        address: "Avenida de las Granjas 800",
        city: "Mexico City",
        state: "CDMX",
        postalCode: parseInt("02230"),
        country: "Mexico",
        website: "https://www.arenaciudaddemexico.com/",
    });
    
    await Venue.create({
        id: 23,
        name: "Coachella",
        address: "81-800 Avenue 51",
        city: "Indio",
        state: "CA",
        postalCode: parseInt("92201"),
        country: "United States",
        website: "https://www.coachella.com/",
    });
    
    await Venue.create({
        id: 24,
        name: "O2 Arena",
        address: "Peninsula Square, London SE10 0DX",
        city: "London",
        state: "London",
        postalCode: parseInt("SE10 0DX"),
        country: "United Kingdom",
        website: "https://www.theo2.co.uk/",
    });
    
    await Venue.create({
        id: 25,
        name: "The Forum",
        address: "3900 W Manchester Blvd",
        city: "Inglewood",
        state: "CA",
        postalCode: parseInt("90305"),
        country: "United States",
        website: "https://www.msg.com/the-forum/",
    });
    
    await Venue.create({
        id: 26,
        name: "Rose Bowl",
        address: "1001 Rose Bowl Dr",
        city: "Pasadena",
        state: "CA",
        postalCode: parseInt("91103"),
        country: "United States",
        website: "https://www.rosebowlstadium.com/",
    });
    
    await Venue.create({
        id: 27,
        name: "Ultra Miami",
        address: "301 Biscayne Blvd",
        city: "Miami",
        state: "FL",
        postalCode: parseInt("33132"),
        country: "United States",
        website: "https://ultramusicfestival.com/",
    });
    


};
