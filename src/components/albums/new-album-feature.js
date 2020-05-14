import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import ExternalLink from "../external-link";

const NewAlbumFeature = ({}) => {
  const data = useStaticQuery(graphql`
    query NewAlbumQuery {
      rnrDisease: file(relativePath: { eq: "album-rnr-disease-gradient.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <section className="section">
      <div className="container">
        <h2 className="title">Latest Release</h2>
        <div className="columns">
          <div className="column is-half">
            <Img fluid={data.rnrDisease.childImageSharp.fluid} />
            <ExternalLink
              href="https://cargorecordsdirect.co.uk/products/warrior-soul-rock-n-roll-disease"
              className="button is-fullwidth"
            >
              Buy Now
            </ExternalLink>
          </div>
          <div className="column is-half">
            <div className="content ">
              <p>
                WARRIOR SOUL released a new studio album, titled "Rock 'N' Roll
                Disease", on June 7, 2019 via{" "}
                <a
                  href="https://cargorecordsdirect.co.uk/products/warrior-soul-rock-n-roll-disease"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Livewire/Cargo Records
                </a>
                .
              </p>

              <blockquote>
                <span className="is-italic">
                  "A little metal, a little punk and a lot of just straight
                  ahead rock n’ roll. If it’s an epidemic you’re looking for,
                  you’ve found it and then some with the excellent “Rock n’ Roll
                  Disease” by Warrior Soul."
                </span>{" "}
                <cite>- XS Rock</cite>
              </blockquote>

              <p>"Rock 'N' Roll Disease" track listing:</p>

              <ul>
                <li>01. Up The Dose</li>
                <li>02. Rock 'N' Roll Disease</li>
                <li>03. Off My Face</li>
                <li>04. Melt Down</li>
                <li>05. Rock On</li>
                <li>06. War Ride Children</li>
                <li>07. Going Mental</li>
                <li>08. After The Show</li>
              </ul>

              <p>
                The album was produced by <a href="|">Clarke</a> and{" "}
                <ExternalLink href="https://www.facebook.com/adam.arling">
                  Adam Arling
                </ExternalLink>
                . It was mixed and mastered by{" "}
                <ExternalLink href="https://www.facebook.com/miguelmartinsnexus">
                  Miguel Martins
                </ExternalLink>
                and engineered by{" "}
                <a
                  href="https://www.facebook.com/adam.arling"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Adam Arling
                </a>
                . The album artwork was created by{" "}
                <a
                  href="https://www.facebook.com/mark.procter.9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mark Procter
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewAlbumFeature;
