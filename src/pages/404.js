import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'

import { graphql } from 'gatsby'

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <h1>Not Found</h1>
        <img src="/images/sad.jpg" />
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <h2>Go to the <a href="/">index page</a> instead and look around</h2>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
