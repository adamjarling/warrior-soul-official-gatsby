export type Venue = {
  name: string;
  city: string;
  stateProvince: string;
  country: string;
  url?: {
    facebook?: string;
    website?: string;
  };
};

export type Show = {
  datetime: string;
  notes?: string;
  venue: Venue;
  url: {
    facebook: string;
    image: string;
    ticket: string;
  };
};

export const tourDates: Show[] = [
  {
    datetime: "2024-07-10T20:00:00",
    notes: "",
    venue: {
      name: "Bannermans",
      city: "Edinburgh",
      stateProvince: "",
      country: "Scotland",
      url: {
        facebook: "",
        website: "https://www.bannermanslive.co.uk/",
      },
    },
    url: {
      facebook: "",
      image: "",
      ticket:
        "https://tickets-scotland.com/events.html?event_method=viewevent&event_id=cae0ac2a-d6ea-11ee-9fae-068c61e4c6eb",
    },
  },
  {
    datetime: "2024-07-11T20:00:00",
    notes: "",
    venue: {
      name: "Waterloo Music Bar",
      city: "Blackpool",
      stateProvince: "",
      country: "England",
      url: {
        facebook: "",
        website: "https://www.waterloomusicbar.com/",
      },
    },
    url: {
      facebook: "",
      image: "",
      ticket:
        "https://www.seetickets.com/event/warrior-soul/the-waterloo-music-bar/2965281",
    },
  },
  {
    datetime: "2024-07-12T20:00:00",
    notes: "w/ Molly Karloff",
    venue: {
      name: "Cart and Horses",
      city: "London",
      stateProvince: "",
      country: "England",
      url: {
        facebook: "http://www.facebook.com/CartnHorsesE15",
        website: "https://www.cartandhorses.london/",
      },
    },
    url: {
      facebook: "",
      image: "",
      ticket:
        "https://www.ticketweb.uk/event/warrior-souls-space-age-playboys-cart-horses-tickets/13617413",
    },
  },
  {
    datetime: "2024-07-13T20:00:00",
    notes: "",
    venue: {
      name: "Bootleggers",
      city: "Nottingham",
      stateProvince: "",
      country: "England",
      url: {
        facebook: "https://www.facebook.com/billybootleggersnottingham/",
        website: "",
      },
    },
    url: {
      facebook: "https://www.facebook.com/events/1107028030441358",
      image: "",
      ticket:
        "https://www.gigantic.com/warrior-soul-tickets/nottingham-billy-bootlegger-s/2024-07-13-18-30",
    },
  },
  {
    datetime: "2024-07-14T18:00:00",
    notes: "",
    venue: {
      name: "The Victoria Bikers Pub",
      city: "Coalville",
      stateProvince: "",
      country: "England",
      url: {
        facebook: "https://www.facebook.com/thevicbikerspub/",
        website: "https://www.vicbikerspub.co.uk/",
      },
    },
    url: {
      facebook: "",
      image: "",
      ticket: "https://www.wegottickets.com/event/611927",
    },
  },
  {
    datetime: "2024-07-17T18:00:00",
    notes: "",
    venue: {
      name: "Trillian's Rock Bar",
      city: "Newcastle",
      stateProvince: "",
      country: "England",
      url: {
        facebook: "https://www.facebook.com/trillians.bookingpage/",
        website: "https://trilliansnewcastle.co.uk/",
      },
    },
    url: {
      facebook: "",
      image: "",
      ticket:
        "https://tickets-scotland.com//artists.html?event_method=viewevent&event_id=aee06f6e-d70c-11ee-9fae-068c61e4c6eb",
    },
  },
  {
    datetime: "2024-07-18T19:00:00",
    notes: "",
    venue: {
      name: "Classic Grand",
      city: "Glasgow",
      stateProvince: "",
      country: "Scotland",
      url: {
        facebook: "http://www.facebook.com/TheClassicGrand",
        website: "https://classicgrand.com/",
      },
    },
    url: {
      facebook: "",
      image: "",
      ticket:
        "https://tickets-scotland.com//venues.html?event_method=viewevent&event_id=070ceacf-d70b-11ee-9fae-068c61e4c6eb",
    },
  },
  {
    datetime: "2024-07-19T18:30:00",
    notes: "The Distortion Project presents.  w/ Wild Heat",
    venue: {
      name: "Voodoo",
      city: "Belfast",
      stateProvince: "",
      country: "Northern Ireland",
      url: {
        facebook: "https://www.facebook.com/VoodooBelfast/",
        website: "https://www.voodoobelfast.com/",
      },
    },
    url: {
      facebook: "https://www.facebook.com/events/1150806319677387",
      image: "",
      ticket: "https://www.wegottickets.com/event/619274",
    },
  },
  {
    datetime: "2024-09-09T21:00:00",
    notes: "",
    venue: {
      name: "Hard Rock Hell Sleaze",
      city: "Leicester",
      stateProvince: "",
      country: "England",
      url: {
        facebook: "",
        website: "https://hrhsleaze.com/",
      },
    },
    url: {
      facebook: "",
      image: "",
      ticket:
        "https://hrhsleaze.com/product-category/sleaze-7/ticket-and-extras/",
    },
  },
  {
    datetime: "2024-10-18T21:00:00",
    notes: "",
    venue: {
      name: "Louie Louie Live",
      city: "Estepona",
      stateProvince: "",
      country: "Spain",
      url: {
        facebook: "https://www.facebook.com/louielouierockbar",
        website: "https://louielouierockbar.com/",
      },
    },
    url: {
      facebook: "",
      image: "",
      ticket:
        "https://www.woutick.es/evento/58261/entradas-warrior-soul?busqueda=warrior&place=916&date=18-10-2024&time=23:00&showId=78093",
    },
  },
  {
    datetime: "2024-10-19T22:00:00",
    notes: "w/ The Black Halos",
    venue: {
      name: "La Guarida del Angel",
      city: "Jerez",
      stateProvince: "",
      country: "Spain",
      url: {
        facebook: "",
        website:
          "https://laguaridadelangel.com/en/eventos/black-halos-warrior-soul/",
      },
    },
    url: {
      facebook: "",
      image: "/images/poster_2024_10_19.jpg",
      ticket: "https://mutick.com/e/entradas-warrior-soul-black-halos-jerez",
    },
  },
  {
    datetime: "2024-10-21T21:30:00",
    notes: "",
    venue: {
      name: "Babylon",
      city: "León",
      stateProvince: "",
      country: "Spain",
      url: {
        facebook: "https://www.facebook.com/Babylonleon",
        website: "",
      },
    },
    url: {
      facebook: "",
      image: "",
      ticket:
        "https://www.woutick.es/evento/57996/entradas-warrior-soul-en-leon-babylon",
    },
  },
  {
    datetime: "2024-10-22T21:00:00",
    notes: "",
    venue: {
      name: "Sala Mardi Gras",
      city: "A Caruña",
      stateProvince: "",
      country: "Spain",
      url: {
        facebook: "https://www.facebook.com/salamardigras/",
        website: "https://www.salamardigras.com/",
      },
    },
    url: {
      facebook: "",
      image: "",
      ticket:
        "https://www.masqueticket.com/entradas/warrior-soul-a-coruna-2024-tickets",
    },
  },
  {
    datetime: "2024-10-24T21:00:00",
    notes: "",
    venue: {
      name: "Gruta 77",
      city: "Madrid",
      stateProvince: "",
      country: "Spain",
      url: {
        facebook: "https://www.facebook.com/gruta77madrid/",
        website: "https://gruta77.com/",
      },
    },
    url: {
      facebook: "",
      image: "/images/poster_2024_10_24.jpg",
      ticket:
        "https://movingtickets.com/Entradas-Warrior-Soul-Los-Magnetics-concierto-en-Gruta77-Madrid/",
    },
  },
  {
    datetime: "2024-10-26T21:00:00",
    notes: "Fon Rock Festival w/ Los Tiki Phantoms, The Lizards, Piedra",
    venue: {
      name: "Sala Canalla Live",
      city: "Pamplona",
      stateProvince: "",
      country: "Spain",
      url: {
        facebook: "https://www.facebook.com/salacanalla",
        website: "https://www.canalla.es/",
      },
    },
    url: {
      facebook: "https://www.facebook.com/events/470633208855870",
      image: "/images/poster_2024_10_26.jpg",
      ticket: "https://logiticket.com/artista/fonrock-2024--184",
    },
  },
  {
    datetime: "2024-12-05T21:00:00",
    notes: "",
    venue: {
      name: "The Cellar",
      city: "Hamden",
      stateProvince: "CT",
      country: "USA",
      url: {
        facebook: "",
        website: "",
      },
    },
    url: {
      facebook: "",
      image: "",
      ticket: "",
    },
  },
  {
    datetime: "2024-12-06T21:00:00",
    notes: "",
    venue: {
      name: "Koto",
      city: "Salem",
      stateProvince: "MA",
      country: "USA",
      url: {
        facebook: "",
        website: "",
      },
    },
    url: {
      facebook: "",
      image: "",
      ticket: "",
    },
  },
  {
    datetime: "2024-12-07T21:00:00",
    notes: "",
    venue: {
      name: "The Wood Shop",
      city: "Brooklyn",
      stateProvince: "NY",
      country: "USA",
      url: {
        facebook: "",
        website: "",
      },
    },
    url: {
      facebook: "",
      image: "",
      ticket: "",
    },
  },
  {
    datetime: "2024-12-08T21:00:00",
    notes: "",
    venue: {
      name: "Dingbats",
      city: "Clifton",
      stateProvince: "NJ",
      country: "USA",
      url: {
        facebook: "",
        website: "",
      },
    },
    url: {
      facebook: "",
      image: "",
      ticket: "",
    },
  },
  {
    datetime: "2025-03-20T21:00:00",
    notes: "MUSIC FACTORY - Cremona",
    venue: {
      name: "MUSIC FACTORY",
      city: "Cremona",
      stateProvince: "",
      country: "Italy",
      url: {
        facebook: "https://www.facebook.com/events/1652098592063567",
        website: "",
      },
    },
    url: {
      facebook: "https://www.facebook.com/events/1652098592063567",
      image: "",
      ticket: "",
    },
  },
  {
    datetime: "2025-03-21T21:00:00",
    notes: "MONSTERS A-LIVE - Lawn",
    venue: {
      name: "MONSTERS A-LIVE",
      city: "Lawn",
      stateProvince: "",
      country: "Italy",
      url: {
        facebook: "https://www.facebook.com/events/591930723643440",
        website: "",
      },
    },
    url: {
      facebook: "https://www.facebook.com/events/591930723643440",
      image: "",
      ticket: "",
    },
  },
  {
    datetime: "2025-03-22T21:00:00",
    notes: "METROPOLIS LIVE CLUB – Piedimonte San Germano (FR)",
    venue: {
      name: "METROPOLIS LIVE CLUB",
      city: "Piedimonte San Germano",
      stateProvince: "FR",
      country: "Italy",
      url: {
        facebook: "https://www.facebook.com/events/564519203263272",
        website: "",
      },
    },
    url: {
      facebook: "https://www.facebook.com/events/564519203263272",
      image: "",
      ticket: "",
    },
  },
  {
    datetime: "2025-03-23T21:00:00",
    notes: "MIDNIGHT LIVE - Matera",
    venue: {
      name: "MIDNIGHT LIVE",
      city: "Matera",
      stateProvince: "",
      country: "Italy",
      url: {
        facebook: "https://www.facebook.com/events/1126407985456540",
        website: "",
      },
    },
    url: {
      facebook: "https://www.facebook.com/events/1126407985456540",
      image: "",
      ticket: "",
    },
  },
  {
    datetime: "2025-03-25T20:00:00",
    notes: "Escape Metal Bar",
    venue: {
      name: "Escape Metal Bar",
      city: "Vienna",
      stateProvince: "",
      country: "Austria",
      url: {
        facebook: "https://www.escape-metalcorner.at/",
        website: "",
      },
    },
    url: {
      facebook: "https://www.facebook.com/events/1041658837723512",
      image: "",
      ticket: "https://www.ticketmaster.at/event/1372044836",
    },
  },
  {
    datetime: "2025-03-27T21:00:00",
    notes: "Padova",
    venue: {
      name: "TBA",
      city: "Padova",
      stateProvince: "",
      country: "Italy",
      url: {
        facebook: "",
        website: "",
      },
    },
    url: {
      facebook: "",
      image: "",
      ticket: "",
    },
  },
  {
    datetime: "2025-03-28T21:00:00",
    notes: "Brescia",
    venue: {
      name: "TBA",
      city: "Brescia",
      stateProvince: "",
      country: "Italy",
      url: {
        facebook: "",
        website: "",
      },
    },
    url: {
      facebook: "",
      image: "",
      ticket: "",
    },
  },
  {
    datetime: "2025-03-29T21:00:00",
    notes: "Milano",
    venue: {
      name: "TBA",
      city: "Milano",
      stateProvince: "",
      country: "Italy",
      url: {
        facebook: "",
        website: "",
      },
    },
    url: {
      facebook: "",
      image: "",
      ticket: "",
    },
  },
  {
    datetime: "2025-09-07T21:00:00",
    notes: "",
    venue: {
      name: "Hard Rock Hell Sleaze VIII",
      city: "Leicester",
      stateProvince: "",
      country: "England",
      url: {
        facebook: "",
        website: "https://hrhsleaze.com/",
      },
    },
    url: {
      facebook: "",
      image: "",
      ticket:
        "https://hrhsleaze.com/product-category/sleaze-8/tickets-and-extras-sleaze-8/",
    },
  },
];
