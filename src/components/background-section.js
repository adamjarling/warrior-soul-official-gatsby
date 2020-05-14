import React from "react"
import { graphql, StaticQuery } from "gatsby"

import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "Cover-graphic-no-back.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          fluid={imageData}
          backgroundColor={`#000`}
          style={{
            width: "100%",
            minHeight: '600px',
            backgroundPosition: 'top'
          }}
        >
          {children}
        </BackgroundImage>
      )
    }}
  />
)

export default BackgroundSection
