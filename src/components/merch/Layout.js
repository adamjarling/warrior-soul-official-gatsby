import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const MerchLayout = () => {
  const data = useStaticQuery(graphql`
    query MerchLayoutQuery {
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
              <Img fluid={data.rnr1.childImageSharp.fluid} />
            </div>
            <div className="card-content">
              <h3 className="title is-3">Rock N Roll Disease Vinyl</h3>
              <p> 20 Euros plus 18 shipping registered mail/tracking number</p>
              <a
                href="mailto:warriorsoulmgmt@gmail.com?subject=Order RnR Disease Vinyl"
                className="button"
              >
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
              <p>
                (Silver print on black and white on black) - Clearance or Sale
                item 15 euros plus 10 shipping
              </p>
              <a
                href="mailto:warriorsoulmgmt@gmail.com?subject=Order Ass Kickin T"
                className="button"
              >
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
              <p> 20 Euros plus 10 shipping</p>
              <a
                href="mailto:warriorsoulmgmt@gmail.com?subject=New Tour T-Shirt"
                className="button"
              >
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
              <p>
                Warrior Soul 'Rock n Roll Disease' VINLY unsigned. 20 Euros plus
                18 shipping
              </p>
              <a
                href="mailto:warriorsoulmgmt@gmail.com?subject=RnR Disease Vinyl"
                className="button"
              >
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
                Only 2 left out of 6 (65 Euros plus 17 shipping) - Registered
                with tracking number. This includes a handwritten song of your
                choice on the sleeve of the album and signed of course.
              </p>
              <a
                href="mailto:warriorsoulmgmt@gmail.com?subject=Limited Test Press Vinyl"
                className="button"
              >
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
              <p>
                (Gold print on black) - Clearance or Sale item 15 euros plus 10
                shipping
              </p>
              <a
                href="mailto:warriorsoulmgmt@gmail.com?subject=Rock N Roll Disease T-Shirt"
                className="button"
              >
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
