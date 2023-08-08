import React, { useEffect, useState } from "react";

import CovidAnnouncement from "../components/covid-announcement";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import TourRowMediaObject from "../components/tour/TourRowMediaObject";
import { graphql } from "gatsby";

const TourDatesPage = ({ data }) => {
  const [dates, setDates] = useState([
    {
      datetime: "2023-11-09:19:00",
      description: "",
      id: 1,
      lineup: ["Warrior Soul"],
      title: "Live in Buckley",
      venue: {
        city: "Buckley",
        country: "England",
        name: "Tivoli",
      },
      url: "http://tivolivenue.com/product/warrior-soul-thursday-9th-november-2023/",
    },
    {
      datetime: "2023-11-10:19:00",
      description: "",
      id: 2,
      lineup: ["Warrior Soul"],
      title: "Live in Reading",
      venue: {
        city: "Reading",
        country: "England",
        name: "Facebar",
      },
      url: "https://www.wegottickets.com/event/590031",
    },
    {
      datetime: "2023-11-12:19:00",
      description: "",
      id: 3,
      lineup: ["Warrior Soul"],
      title: "Live in Crumlin",
      venue: {
        city: "Crumlin",
        country: "England",
        name: "The Patriot",
      },
      url: "https://home-of-rock.co.uk/shop/events/warrior-soul/",
    },
    {
      datetime: "2023-11-16:19:00",
      description: "",
      id: 4,
      lineup: ["Warrior Soul"],
      title: "Live in Blackpool",
      venue: {
        city: "Blackpool",
        country: "England",
        name: "Waterloo Music Bar",
      },
      url: "https://www.seetickets.com/event/warrior-soul/the-waterloo-music-bar/2701372",
    },
    {
      datetime: "2023-11-17:19:00",
      description: "",
      id: 5,
      lineup: ["Warrior Soul"],
      title: "Live in Glasgow",
      venue: {
        city: "Glasgow",
        country: "Scotland",
        name: "Classic Grand",
      },
      url: "https://tickets-scotland.com/events.html?event_method=viewevent&event_id=bf09a3e4-11da-11ee-ac9c-06a5e5ebaf0a",
    },
    {
      datetime: "2023-11-18:19:00",
      description: "",
      id: 6,
      lineup: ["Warrior Soul"],
      title: "Live in Edinburgh",
      venue: {
        city: "Edinburgh",
        country: "Scotland",
        name: "Bannermans",
      },
      url: "https://tickets-scotland.com/events.html?event_method=viewevent&event_id=62b08891-119a-11ee-ac9c-06a5e5ebaf0a",
    },
  ]);

  // useEffect(() => {
  //   async function fn() {
  //     const response = await fetch(
  //       "https://rest.bandsintown.com/artists/warriorsoul/events?app_id=479f600310e79e4c65edd7b6c286adef"
  //     );
  //     const responseData = await response.json();
  //     console.log("fn -> responseData", responseData);
  //     setDates(responseData);
  //   }
  //   fn();
  // }, []);

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

        {/* <CovidAnnouncement /> */}

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
