import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Videos from "../components/videos";
import Img from "gatsby-image";

const VideosPage = ({ data }) => (
  <div>
    <SEO
      title="Videos - Warrior Soul - Official Band Website - Kory Clarke"
      keywords={[
        `Warrior Soul`,
        `Kory Clarke`,
        `Warrior Soul music videos`,
        `Warrior Soul videos`,
      ]}
    />
    <Layout>
      <section className="hero has-background">
        <Img
          fluid={data.heroBg.childImageSharp.fluid}
          className="hero-background"
        />
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-uppercase">Videos</h1>
            <h2 className="subtitle">Official releases, live and in-studio</h2>
          </div>
        </div>
      </section>

      <Videos />
    </Layout>
  </div>
);

export default VideosPage;

export const pageQuery = graphql`
  query VideosPageQuery {
    heroBg: file(relativePath: { eq: "portfolio/photo-kory-singing-bw.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
