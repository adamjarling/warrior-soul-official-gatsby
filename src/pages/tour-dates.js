import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Img from "gatsby-image";
import TourRowMediaObject from "../components/tour/TourRowMediaObject";
import CovidAnnouncement from "../components/covid-announcement";

const TourDatesPage = ({ data }) => {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    async function fn() {
      const response = await fetch(
        "https://rest.bandsintown.com/artists/warriorsoul/events?app_id=479f600310e79e4c65edd7b6c286adef"
      );
      const responseData = await response.json();
      console.log("fn -> responseData", responseData);
      setDates(responseData);
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

        <CovidAnnouncement />

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
