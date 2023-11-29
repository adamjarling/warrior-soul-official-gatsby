import React, { useEffect, useState } from "react";

import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import TourRowMediaObject from "../components/tour/TourRowMediaObject";
import { graphql } from "gatsby";

export const tourDates = [
  {
    datetime: "2023-10-19T20:00:00",
    description: "",
    lineup: ["Warrior Soul"],
    title: "Live Orihuela",
    venue: {
      city: "Orihuela",
      country: "Spain",
      name: "La Gramola",
      url: "https://www.lagramola.com/",
    },
    url: "https://entradium.com/events/warrior-soul-en-la-gramola-orihuela",
    facebook: "https://fb.me/e/1iHuJ0Qnm",
  },
  {
    datetime: "2023-10-20T23:00:00",
    description: "",
    lineup: ["Warrior Soul"],
    title: "Live in Estepona",
    venue: {
      city: "Estepona",
      country: "Spain",
      name: "Louie Louie",
      url: "https://louielouierockbar.com/",
    },
    url: "https://www.woutick.es/evento/25752/entradas-warrior-soul",
    facebook: "https://www.facebook.com/events/1352344298969322",
  },
  {
    datetime: "2023-10-21T20:00:00",
    description: "",
    lineup: ["Warrior Soul"],
    title: "Live in Jerez De La Frontera",
    venue: {
      city: "Jerez De La Frontera",
      country: "Spain",
      name: "La Guarida Del Ángel",
      url: "https://www.laguaridadelangel.es/",
    },
    url: "https://mutick.com/e/entradas-warrior-soul-jerez",
    facebook: "https://www.facebook.com/events/334159485649358",
  },
  {
    datetime: "2023-10-22T20:00:00",
    description: "",
    lineup: ["Warrior Soul"],
    title: "Live in Alenquer - Lisbon/Portugal",
    venue: {
      city: "Alenquer - Lisbon/Portugal",
      country: "Portugal",
      name: "Side B Rocks",
      url: "",
    },
    url: "https://www.facebook.com/sidebrocks/",
    facebook: "",
  },
  {
    datetime: "2023-10-23T20:00:00",
    description: "",
    lineup: ["Warrior Soul"],
    title: "Live in Vigo",
    venue: {
      city: "Vigo",
      country: "Spain",
      name: "Transylvania Vigo",
    },
    url: "https://www.facebook.com/transylvaniavigo",
    facebook: "",
  },
  {
    datetime: "2023-10-24T20:00:00",
    description: "",
    lineup: ["Warrior Soul"],
    title: "Live in Orense",
    venue: {
      city: "Orense",
      country: "Spain",
      name: "Café Cultural Auriense",
    },
    url: "https://www.facebook.com/cafeauriense",
    facebook: "",
  },
  {
    datetime: "2023-10-25T20:00:00",
    description: "",
    lineup: ["Warrior Soul"],
    title: "Live in A Coruña",
    venue: {
      city: "A Coruña",
      country: "Spain",
      name: "Mardi Gras",
      url: "https://www.salamardigras.com/",
    },
    url: "https://www.masqueticket.com/entrada/1109-warrior-soul-a-coruna",
    facebook: "",
  },
  {
    datetime: "2023-10-26T20:00:00",
    description: "",
    lineup: ["Warrior Soul"],
    title: "Live in León",
    venue: {
      city: "León",
      country: "Spain",
      name: "Babylon",
      url: "https://www.facebook.com/Babylonleon/",
    },
    url: "https://www.woutick.es/evento/25550/entradas-warrior-soul-en-leon",
    facebook: "https://www.facebook.com/events/1477119476387676",
  },
  {
    datetime: "2023-10-27T20:00:00",
    description: "",
    lineup: ["Warrior Soul"],
    title: "Live in Madrid",
    venue: {
      city: "Madrid",
      country: "Spain",
      name: "Gruta 77",
      url: "https://gruta77.com/",
    },
    url: "https://movingtickets.com/Entradas-Warrior-Soul-Del-Tornados-concierto-en-Gruta77-Madrid/",
    facebook: "https://www.facebook.com/events/1241122846564726",
  },
  {
    datetime: "2023-10-28T20:00:00",
    description: "",
    lineup: ["Warrior Soul"],
    title: "Live in Logroño",
    venue: {
      city: "Logroño",
      country: "Spain",
      name: "Sala Fundición",
      url: "https://salafundicion.es/",
    },
    url: "https://www.woutick.es/evento/25856/entradas-warrior-soul-usa--tom-killner-uk",
    facebook: "",
  },
  {
    datetime: "2023-10-29T20:00:00",
    description: "",
    lineup: ["Warrior Soul"],
    title: "Live in Bilbao",
    venue: {
      city: "Portugalete/Bilbao",
      country: "Spain",
      name: "Groove Estudios",
      url: "https://estudiosgroove.es/",
    },
    url: "https://entradium.com/es/events/warrior-soul-portugalete",
    facebook: "",
  },
  {
    datetime: "2023-11-09T20:00:00",
    description: "",
    lineup: ["Warrior Soul"],
    title: "Live in Buckley",
    venue: {
      city: "Buckley",
      country: "England",
      name: "Tivoli",
    },
    url: "http://tivolivenue.com/product/warrior-soul-thursday-9th-november-2023/",
    facebook: "https://www.facebook.com/events/309276268137778",
  },
  {
    datetime: "2023-11-10T20:00:00",
    description: "",
    lineup: ["Warrior Soul"],
    title: "Live in Reading",
    venue: {
      city: "Reading",
      country: "England",
      name: "Facebar",
    },
    url: "https://www.wegottickets.com/event/590031",
    facebook: "https://www.facebook.com/events/1233322917384692",
  },
  {
    datetime: "2023-11-12T20:00:00",
    description: "",
    lineup: ["Warrior Soul"],
    title: "Live in Crumlin",
    venue: {
      city: "Crumlin",
      country: "England",
      name: "The Patriot",
    },
    url: "https://home-of-rock.co.uk/shop/events/warrior-soul/",
    facebook: "https://www.facebook.com/events/1789954904756606",
  },
  {
    datetime: "2023-11-15T20:00:00",
    description: "",

    lineup: ["Warrior Soul", "The Fiascos", "Bite Me"],
    title: "Live in London",
    venue: {
      city: "London",
      country: "England",
      name: "Downstairs at the Dome - Tufnell Park - London",
    },
    url: "https://www.seetickets.com/event/warrior-soul/boston-music-room-tufnell-park/2750944",
  },
  {
    datetime: "2023-11-15T23:00:00",
    description: "After party!",

    lineup: [],
    title: "Official After Party",
    venue: {
      city: "London",
      country: "England",
      name: "Arno Von Detrius Presents...The Official After Party...Slim Jims Liquor Store. 11pm - 2am.  FREE",
    },
    url: "https://www.slimjimsliquorstore.com/",
  },
  {
    datetime: "2023-11-16T20:00:00",
    description: "",
    lineup: ["Warrior Soul"],
    title: "Live in Blackpool",
    venue: {
      city: "Blackpool",
      country: "England",
      name: "Waterloo Music Bar",
    },
    url: "https://www.seetickets.com/event/warrior-soul/the-waterloo-music-bar/2701372",
    facebook: "https://www.facebook.com/events/3562565400737537",
  },
  {
    datetime: "2023-11-17T20:00:00",
    description: "",
    lineup: ["Warrior Soul"],
    title: "Live in Glasgow",
    venue: {
      city: "Glasgow",
      country: "Scotland",
      name: "Classic Grand",
    },
    url: "https://tickets-scotland.com/events.html?event_method=viewevent&event_id=bf09a3e4-11da-11ee-ac9c-06a5e5ebaf0a",
    facebook: "https://www.facebook.com/events/324152460047078",
  },
  {
    datetime: "2023-11-18T20:00:00",
    description: "",
    lineup: ["Warrior Soul"],
    title: "Live in Edinburgh",
    venue: {
      city: "Edinburgh",
      country: "Scotland",
      name: "Bannermans",
    },
    url: "https://tickets-scotland.com/events.html?event_method=viewevent&event_id=62b08891-119a-11ee-ac9c-06a5e5ebaf0a",
    facebook: "https://www.facebook.com/events/949013286204589",
  },
  {
    datetime: "2023-12-07T20:00:00",
    description: "",
    lineup: ["Warrior Soul"],
    title: "Live in Bad Friedrichshall",
    venue: {
      city: "Bad Friedrichshall",
      country: "Germany",
      name: "Lemmys",
    },
    url: " https://www.eventim-light.com/de/a/5d02560698c4210001742bd3/e/64ea627850e5e819ac4ac3db",
    facebook: "",
  },
  {
    datetime: "2023-12-08T20:00:00",
    description: "",
    lineup: ["Warrior Soul"],
    title: "Live in Oldenburg",
    venue: {
      city: "Oldenburg",
      country: "Germany",
      name: "MTS Records",
    },
    url: "https://www.facebook.com/mts.lpscds/events",
    facebook: "",
  },
  {
    datetime: "2023-12-12T20:00:00",
    description: "",
    lineup: ["Warrior Soul"],
    title: "Live in Munich",
    venue: {
      city: "Munich",
      country: "Germany",
      name: "Unter Deck",
    },
    url: "https://www.eventim.de/noapp/event/17201710/",
    facebook: "",
  },
  {
    datetime: "2023-12-13T20:00:00",
    description: "",
    lineup: ["Warrior Soul"],
    title: "Live in Vienna",
    venue: {
      city: "Vienna",
      country: "Austria",
      name: "Metal Escape Corner",
    },
    url: "https://www.escape-metalcorner.at/",
    facebook: "",
  },
  {
    datetime: "2023-12-14T20:00:00",
    description: "",
    lineup: ["Warrior Soul"],
    title: "Live in Bratislava",
    venue: {
      city: "Bratislava",
      country: "Slovakia",
      name: "Múzeum obchodu Bratislava",
    },
    url: "https://muzeumobchodu.sk/",
    facebook: "",
  },
  // {
  //   datetime: "2023-12-16T20:00:00",
  //   description: "",
  //   lineup: ["Warrior Soul"],
  //   title: "Live in Döbeln",
  //   venue: {
  //     city: "Döbeln",
  //     country: "Germany",
  //     name: "KL17",
  //   },
  //   url: "https://www.eventim.de/noapp/event/17291660/",
  //   facebook: "",
  // },
];

const TourDatesPage = ({ data }) => {
  const [dates, setDates] = useState(tourDates);

  useEffect(() => {
    async function fn() {
      const response = await fetch(
        "https://rest.bandsintown.com/artists/warriorsoul/events?app_id=479f600310e79e4c65edd7b6c286adef"
      );
      const responseData = await response.json();
      console.log("fn -> responseData", responseData);
      //setDates(responseData);
    }
    fn();
  }, []);

  return (
    <div>
      <SEO
        title="Tour Dates - Warrior Soul - Official Band Website - Kory Clarke"
        keywords={[
          `Warrior Soul`,
          `Tour dates`,
          `europe hard rock`,
          `europe touring`,
        ]}
      />
      <Layout>
        <section className="hero is-medium has-background">
          <Img
            fluid={data.liveShot.childImageSharp.fluid}
            className="hero-background"
          />
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-uppercase">Tour Dates</h1>
              <h2 className="subtitle">Live, loud, and unexpected</h2>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <TourRowMediaObject dates={dates} />
            {/* <TourTable tourDates={tourDates} />
            <MobileTourDates tourDates={tourDates} />
            <Gallery columns={2} photos={photos} direction={"column"} /> */}
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default TourDatesPage;

export const pageQuery = graphql`
  query TourPageQuery {
    liveShot: file(relativePath: { eq: "photo-live-crowd-bw.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    heroImg: file(relativePath: { eq: "portfolio/band-photo-kick.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
