/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Footer from "../components/footer";
import NavBar from "./navbar";
import "./layout.scss";
import logo from "../images/header.jpg";
import sandBg from "../images/Sand-background.jpg";
import { Link } from "gatsby";

const styles = {
  bg: {
    background: `url(${sandBg})`,
  },
};

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <div>
        {/* <div className="container is-hidden-mobile">
          <Link to="/"><img src={logo} alt="Warrior Soul Rock 'N Roll Disease header logo" /></Link>
        </div> */}
        <NavBar />

        <main style={styles.bg}>{children}</main>
        <Footer />
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
