import React from "react";
import cargo from "../images/logo-cargo-records.jpg";
import livewire from "../images/logo-livewire.png";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const styles = {
  logo: {
    maxWidth: "100px",
  },
  footerWrap: {
    width: "70%",
  },
};

export default () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      cargo: file(relativePath: { eq: "logo-cargo-records.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      livewire: file(relativePath: { eq: "logo-livewire-white.png" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ws: file(relativePath: { eq: "warrior-soul-logo-white.png" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <footer className="footer">
      <div className="container has-text-centered">
        <p>Copyright 2020 Warrior Soul Official</p>
        <div className="columns ">
          {/* <div className="column one-third">
            <a
              href="http://www.cargorecords.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure className="image">
                <Img fluid={data.cargo.childImageSharp.fluid} />
              </figure>
            </a>
          </div>
          <div className="column one-third">
            <p>Copyright 2020 Warrior Soul Official</p>
          </div>
          <div className="column one-third">
            <figure className="image">
              <Img fluid={data.livewire.childImageSharp.fluid} />
            </figure>
          </div> */}
        </div>
      </div>
    </footer>
  );
};
