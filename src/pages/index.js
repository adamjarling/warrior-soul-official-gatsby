import React from "react";
import { Link } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Img from "gatsby-image";
import ExternalLink from "../components/external-link";
import MerchLayout from "../components/merch/Layout";
import { graphql } from "gatsby";
import ReviewMelodyMan from "../components/albums/ReviewMelodyMan";
import Video from "../components/videos/Video";

const IndexPage = ({ data }) => {
  console.log("IndexPage -> data", data);

  return (
    <div>
      <SEO
        title="Warrior Soul - Official Band Website - Kory Clarke"
        keywords={[
          `Warrior Soul`,
          `Kory Clarke`,
          `rock 'n roll`,
          `Rock 'n Roll Disease`,
        ]}
      />
      <Layout>
        <section className="hero is-large has-background" style={{ minHeight: "80vh"}}>
          <Img
            fluid={data.outOnBail.childImageSharp.fluid}
            className="hero-background"
          />
          
        </section>
        <section className="section">
          <div className="container">
          <h2 className="title">NEW Warrior Soul Album Pre-Sale Pledge is still on but not for long!</h2>
          <div className="content">

          <p>Warrior Soul's New Record 'OUT ON BAIL' is going on for signed copies. Official release will be in November/December 2021.</p>
          <p>For Info Contact: <a href="mailto:warriorsoulmgmt@gmail.com">warriorsoulmgmt@gmail.com</a> Thanks for your continued support...'And We Rock And Roll' 'F**k The Pigs'</p>
          </div>
          


          </div>
          </section>

        <section className="section">
          <div className="container">
            <h2 className="title">
              "Cocaine... and Other Good Stuff" official videos!
            </h2>
            <p>
              The first 2 singles off the new Warrior Soul album ‘Cocaine.. and
              other good stuff’ out now! These rockin’ takes on stone-cold Alice
              Cooper and Van Halen classics will hopefully get yer’ ass shakin’
              and politic juices flowing.
            </p>
            <div className="my-6">
              <figure class="image is-16by9">
                <iframe
                  className="has-ratio"
                  width="640"
                  height="360"
                  src="https://www.youtube.com/embed/RmejvhvPUBg"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </figure>
            </div>
            <div className="my-6">
              <figure class="image is-16by9">
                <iframe
                  className="has-ratio"
                  width="640"
                  height="360"
                  src="https://www.youtube.com/embed/lcx0pzXt2GQ"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </figure>
            </div>

            <ReviewMelodyMan />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <MerchLayout />
          </div>
        </section>

        <section className="hero is-medium has-background">
          <Img
            fluid={data.cocaine.childImageSharp.fluid}
            className="hero-background"
          />
          <div className="hero-body">
            <div className="container">
              <div className="columns is-centered">
                <div className="column is-4 has-text-left">
                  {/* <Img fluid={data.logo.childImageSharp.fluid} />} */}
                </div>
              </div>
              <h2 className="title is-uppercase">
                Cocaine and Other Good Stuff
              </h2>
              <h3 className="subtitle"> New covers album</h3>
              <a
                href="mailto:warriorsoulmgmt@gmail.com?subject=Cocaine covers album pre-order"
                className="button"
              >
                Buy Now
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column content">
                <div className="card">
                  <div className="card-image">
                    <Img fluid={data.albumImg.childImageSharp.fluid} />
                  </div>
                  <div className="card-content">
                    <h3 className="title is-3">
                      WARRIOR SOUL new album{" "}
                      <span className="chaos-font">'ROCK 'N ROLL DISEASE</span>{" "}
                      out now!
                    </h3>
                    <h4>Release June 2019 on Cargo Records / Livewire</h4>
                    <blockquote>
                      <span className="is-italic">
                        "Approach with care, and be warned: the hangover here is
                        going to be vicious."
                      </span>{" "}
                      <cite>- Maximum Volume Music</cite>
                    </blockquote>
                    <blockquote>
                      <span className="is-italic">
                        "A little metal, a little punk and a lot of just
                        straight ahead rock n’ roll. If it’s an epidemic you’re
                        looking for, you’ve found it and then some with the
                        excellent “Rock n’ Roll Disease” by Warrior Soul."
                      </span>{" "}
                      <cite>- XS Rock</cite>
                    </blockquote>
                    <blockquote>
                      <span className="is-italic">
                        "This is low down and dirty Rock and Roll of the highest
                        order."
                      </span>{" "}
                      <cite>- The Rockpit</cite>
                    </blockquote>

                    <a
                      className="button is-primary is-fullwidth is-medium"
                      href="https://cargorecordsdirect.co.uk/products/warrior-soul-rock-n-roll-disease"
                    >
                      Buy the Album
                    </a>
                  </div>
                </div>

                <div className="card">
                  <div className="card-image">
                    <Img fluid={data.ruins.childImageSharp.fluid} />
                  </div>
                  <div className="card-content">
                    <h3 className="title is-3">Kory Clark Artwork</h3>
                    <p>Coming Soon!!</p>
                  </div>
                </div>
              </div>

              <div className="column content">
                <div className="card">
                  <div className="card-image">
                    <Img fluid={data.crowdSurfingImg.childImageSharp.fluid} />
                  </div>
                  <div className="card-content">
                    <h3 className="title is-3">Tour Dates</h3>
                    <p>
                      Germany, Denmark, UK, Detroit, New York City, Warrior Soul
                      is spreading the Rock 'N Roll Disease (bad timing eh?)
                      across all continents this year. Click here to check out
                      all Warrior Soul 2020 Tour Dates
                    </p>
                    <Link
                      to="tour-dates"
                      className="button is-primary is-fullwidth is-medium"
                    >
                      See All Tour Dates
                    </Link>
                  </div>
                </div>

                <div className="card">
                  <div className="card-image">
                    <Img fluid={data.logo.childImageSharp.fluid} />
                  </div>
                  <div className="card-content">
                    <h3 className="title is-3">New Press Kit</h3>
                    <p>
                      Check out the latest press kit, featuring a
                      career-spanning narrative on Warrior Soul by{" "}
                      <ExternalLink href="https://www.loudersound.com/classic-rock">
                        Classic Rock Magazine
                      </ExternalLink>
                      .
                    </p>
                    <Link
                      to="tour-dates"
                      className="button is-primary is-fullwidth is-medium"
                    >
                      View Press Kit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query HomeQuery {
    albumImg: file(relativePath: { eq: "album-rnr-disease-gradient.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cocaine: file(relativePath: { eq: "cocaine-and-stuff.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    liveShot: file(relativePath: { eq: "photo-live-crowd-bw.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    heroImg: file(relativePath: { eq: "portfolio/KORY-CLARKE-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    crowdSurfingImg: file(
      relativePath: { eq: "portfolio/crowdsurfing-lores.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logo: file(relativePath: { eq: "warrior-soul-logo-full-white.png" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    outOnBail: file(relativePath: { eq: "album-out-on-bail.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ruins: file(relativePath: { eq: "portfolio/ruins-2013-pinterest.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
