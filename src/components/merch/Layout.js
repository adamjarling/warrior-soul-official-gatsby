import { graphql, useStaticQuery } from "gatsby";

import Img from "gatsby-image";
import React from "react";

const storeLink =
  "https://warrior-soul-official-store.myshopify.com/collections/all";

const MerchLayout = () => {
  const data = useStaticQuery(graphql`
    query MerchLayoutQuery {
      cocaine: file(relativePath: { eq: "cocaine-and-stuff.jpg" }) {
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
      rnr1: file(relativePath: { eq: "merch/RockNRollDiseaseViynl.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      newShirt: file(relativePath: { eq: "merch/tshirt5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      handWritten: file(
        relativePath: { eq: "merch/RNRDTestPresshandwrittenlyrics.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      assKickin: file(relativePath: { eq: "merch/Ass-Kickin-tee.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rnr: file(relativePath: { eq: "merch/RockNRollDiseaseVinylDec19.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      turntable: file(relativePath: { eq: "merch/TomArysTurntable.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      testPressWide: file(
        relativePath: { eq: "merch/RNRDTESTPRESSINGhandwrittenLyrics.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      finger: file(relativePath: { eq: "merch/finger-disease.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div>
      <h2 className="title is-size-1 is-uppercase has-text-centered">
        Merch: Get some
      </h2>
      <div className="columns is-multiline content">
        <div className="column is-one-third">
          <div className="card">
            <div className="card-image">
              <Img fluid={data.outOnBail.childImageSharp.fluid} />
            </div>
            <div className="card-content">
              <h3 className="title is-3">Out On Bail</h3>
              <p>Latest Warrior Soul album, out now!</p>
              <a href={storeLink} target="_blank" className="button">
                Buy Now
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <Img fluid={data.cocaine.childImageSharp.fluid} />
            </div>
            <div className="card-content">
              <h3 className="title is-3">Cocaine and Other Good Stuff</h3>
              <p>Covers done in Kory Clarke style</p>
              <a href={storeLink} target="_blank" className="button">
                Buy Now
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <Img fluid={data.rnr1.childImageSharp.fluid} />
            </div>
            <div className="card-content">
              <h3 className="title is-3">Rock N Roll Disease Vinyl</h3>
              <p>Wicked cool vinyl pressing</p>
              <a href={storeLink} target="_blank" className="button">
                Buy Now
              </a>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <Img fluid={data.assKickin.childImageSharp.fluid} />
            </div>
            <div className="card-content">
              <h3 className="title is-3">Ass Kickin Rockin Roll Tees</h3>
              <p>(Silver print on black and white on black)</p>
              <a href={storeLink} target="_blank" className="button">
                Buy Now
              </a>
            </div>
          </div>
        </div>
        <div className="column is-one-third">
          <div className="card">
            <div className="card-image">
              <Img fluid={data.newShirt.childImageSharp.fluid} />
            </div>
            <div className="card-content">
              <h3 className="title is-3">Warrior Soul NEW Tour Shirt</h3>

              <a href={storeLink} target="_blank" className="button">
                Buy Now
              </a>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <Img fluid={data.rnr.childImageSharp.fluid} />
              <Img fluid={data.turntable.childImageSharp.fluid} />
            </div>
            <div className="card-content">
              <h3 className="title is-3"></h3>
              <p>Warrior Soul 'Rock n Roll Disease' VINLY unsigned</p>
              <a href={storeLink} target="_blank" className="button">
                Buy Now
              </a>
            </div>
          </div>
        </div>
        <div className="column is-one-third">
          <div className="card">
            <div className="card-image">
              <Img fluid={data.handWritten.childImageSharp.fluid} />
              <Img fluid={data.testPressWide.childImageSharp.fluid} />
            </div>
            <div className="card-content">
              <h3 className="title is-3">
                Limited Test Pressings Vinyl 'Rock n Roll Disease' Signed
              </h3>
              <p>
                This includes a handwritten song of your choice on the sleeve of
                the album and signed of course.
              </p>
              <a href={storeLink} target="_blank" className="button">
                Buy Now
              </a>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <Img fluid={data.finger.childImageSharp.fluid} />
            </div>
            <div className="card-content">
              <h3 className="title is-3">Rock N Roll Disease Tour Tees</h3>
              <p>(Gold print on black) - Clearance or Sale item</p>
              <a href={storeLink} target="_blank" className="button">
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MerchLayout;
