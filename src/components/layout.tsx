/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';

import '../styles/styles.scss';

import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

import Header from './header';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (

    <div className="full-bleed">
      <SiteHeader />
      <main className="site-width">
        {children}
        <SiteFooter />
      </main>
    </div>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
