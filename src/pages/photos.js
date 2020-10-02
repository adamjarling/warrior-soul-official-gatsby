import React, { useState, useCallback } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import crowdSurfing from "../images/portfolio/crowdsurfing.jpeg";
import kory2 from "../images/portfolio/KORY-CLARKE-2.jpg";
import korySingingLive from "../images/portfolio/kory-singing-live.jpg";
import trump from "../images/portfolio/american-idol-background.jpg";
import loveDrug from "../images/portfolio/love-is-the-drug.jpg";
import metalInvader from "../images/portfolio/metal-invader-kory-interview.jpg";
import logo from "../images/portfolio/warrior-soul-logo-white.png";
import liveCrowd from "../images/portfolio/photo-live-crowd.jpeg";
import liveBigStage from "../images/portfolio/kory-live-on-the-big-stage.jpg";
import italyRocking from "../images/portfolio/KC Ph by Irene Fitipaldi Trieste Sold Out Festival Italy  2016.jpg";
import christian from "../images/portfolio/Christian Kimmett 2016.jpg";
import koryDoorway from "../images/portfolio/kory-doorway.jpg";
import wsCross from "../images/portfolio/ws-cross.jpg";
import merch from "../images/t-shirt-rnr-disease.jpg";
import laGramola1 from "../images/portfolio/2019-la-gramola1.jpg";
import spainBackstage from "../images/photo-spain-backstage-2019.jpg";
import Img from "gatsby-image";

const photos = [
  { src: korySingingLive, width: 4, height: 2 },
  { src: laGramola1, width: 5, height: 3 },
  { src: merch, width: 4, height: 3 },
  { src: kory2, width: 4, height: 3 },

  { src: spainBackstage, width: 4, height: 4 },
  { src: trump, width: 4, height: 4 },
  { src: crowdSurfing, width: 4, height: 3 },
  { src: logo, width: 4, height: 2 },
  { src: loveDrug, width: 4, height: 3 },
  { src: metalInvader, width: 4, height: 2 },
  { src: wsCross, width: 4, height: 4 },

  { src: italyRocking, width: 4, height: 5 },
  { src: liveCrowd, width: 4, height: 3 },
  { src: liveBigStage, width: 4, height: 3 },

  { src: christian, width: 4, height: 4 },
  { src: koryDoorway, width: 4, height: 6 },
];

const PhotosPage = ({ data }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <SEO
        title="Photos - Warrior Soul - Official Band Website - Kory Clarke"
        keywords={[`Warrior Soul`, `Kory Clarke`, `Warrior Soul photos`]}
      />
      <Layout>
        <section className="hero is-large has-background">
          <Img
            fluid={data.heroBg.childImageSharp.fluid}
            className="hero-background"
          />
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-uppercase">Photos</h1>
              <h2 className="subtitle">Live, backstage, on the bus</h2>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                  <Carousel
                    currentIndex={currentImage}
                    views={photos.map((x) => ({
                      ...x,
                      // srcset: x.srcSet,
                      // caption: x.title,
                    }))}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default PhotosPage;

export const pageQuery = graphql`
  query PhotosPageQuery {
    heroBg: file(relativePath: { eq: "portfolio/2019-la-gramola1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
