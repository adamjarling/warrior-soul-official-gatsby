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
        <section className="hero is-fullheight has-background">
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
              <h1 className="title is-uppercase">
                Cocaine and Other Good Stuff
              </h1>
              <h2 className="subtitle"> New covers album out soon</h2>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="title">"Elected" Single Out Now</h2>
            <p>
              1st single off the new Warrior Soul album ‘Cocaine.. and other
              good stuff’ out now! This rockin’ take on a stonecold Alice Cooper
              classic will hopefully get yer’ ass shakin’ and electorial juices
              flowing.
            </p>
            <div className="my-6">
              <figure class="image is-16by9">
                <iframe
                  className="has-ratio"
                  width="640"
                  height="360"
                  src="https://www.youtube.com/embed/LKJbu2fln_o"
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
    ruins: file(relativePath: { eq: "portfolio/ruins-2013-pinterest.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
