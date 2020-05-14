import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const Bio = ({ data }) => (
  <div>
    <SEO
      title="Bio - Warrior Soul - Official Band Website - Kory Clarke"
      keywords={[
        `Warrior Soul`,
        `Kory Clarke`,
        `rock 'n roll`,
        `Rock 'n Roll Disease`,
      ]}
    />
    <Layout>
      <section className="section">
        <div className="container">
          <h1 className="title is-1">Bio</h1>
        </div>
      </section>

      <section className="section">
        <div className="container content">
          <h3 className="title is-3">
            Warrior Soul is the critically acclaimed international Alt Hard Rock
            Band formed by lead singer / songwriter / producer, Kory Clarke.
            Here is what people are saying about them...
          </h3>
          <div className="columns">
            <div className="column">
              <Img fluid={data.file.childImageSharp.fluid} />
            </div>
            <div className="column is-italic is-size-4">
              <p>
                "I am even more convinced than ever that Clarke is one of the
                greatest living rock stars around. A modern day poet with
                ruminations about the state of the world, Clarke and Warrior
                Soul bring you down into the gutter while showing you how to
                have a good time."{" "}
              </p>
              <p>
                Not unlike a rock n’ roll Dante that shows the layers of hell
                that stand before us, all set to a rock n’ roll soundtrack that
                would make AC/DC, The Sex Pistols and Motorhead proud.{" "}
              </p>
              <p>
                Forget all of the musical genres, sub genres and so forth.
                Warrior Soul isn’t just metal. It isn’t just punk either. It’s
                what rock n’ roll should be. Rebellion, a black eye to the
                fascists of our society, chaotic reflection and ultimately a
                musical party to drown our sorrows in."
              </p>
              <p>- <a href="https://xsrock.com/" target="_blank" rel="noopener noreferrer">XS Rock 2018</a></p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  </div>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "kory-rocking-the-stage.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 412) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Bio
