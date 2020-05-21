import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const { data }     = this.props
    const siteTitle    = data.site.siteMetadata.title
    const posts        = data.allMarkdownRemark.edges
    const canonicalUrl = `https://ochronus.online${this.props.location.pathname}`
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title        = {siteTitle}
          keywords     = {[`engineering management`, `ochronus`, `csaba okrona`]}
          canonicalUrl = {canonicalUrl}
        />
        {posts.map(({ node }) => {
          const title   = node.frontmatter.title || node.fields.slug
          const excerpt = node.frontmatter.manualExcerpt || node.fields.excerpt
          const url     = node.frontmatter.url
          const image   = node.frontmatter.cover
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={url}>
                  <h2>{title}</h2>
                  <Img fluid={image ? image.childImageSharp.fluid : {}} />
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: excerpt }} />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fields: { draft: { eq: false } } }
      sort  : { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            url
            manualExcerpt
            cover {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid_withWebp
                  originalName
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
