import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Albums from "../components/albums";
import Img from "gatsby-image";
import NewAlbumFeature from "../components/albums/new-album-feature";
import { graphql } from "gatsby";

const AlbumsPage = ({ data }) => (
  <div>
    <SEO
      title="Albums - Warrior Soul - Official Band Website - Kory Clarke"
      keywords={[
        `Warrior Soul`,
        `Kory Clarke`,
        `rock 'n roll`,
        `Rock 'n Roll Disease`,
      ]}
    />
    <Layout>
      <section className="hero is-medium has-background">
        <Img
          fluid={data.heroBg.childImageSharp.fluid}
          className="hero-background"
        />
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-uppercase">Albums</h1>
            <h2 className="subtitle">30 years of anti-authority anthems</h2>
          </div>
        </div>
      </section>

      <NewAlbumFeature />

      <section className="section">
        <div className="container">
          <Albums />
        </div>
      </section>
    </Layout>
  </div>
);

export default AlbumsPage;

export const pageQuery = graphql`
  query AlbumsQuery {
    heroBg: file(relativePath: { eq: "portfolio/love-is-the-drug.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
