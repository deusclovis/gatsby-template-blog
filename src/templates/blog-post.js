import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Disqus from 'disqus-react'
import VirtualContainer from 'react-virtual-container'
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'

const Placeholder = () => <div>🙈</div>

class BlogPostTemplate extends React.Component {
  render() {
    const post               = this.props.data.markdownRemark
    const siteTitle          = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const canonicalUrl       = `https://ochronus.online${this.props.location.pathname}`
    const disqusConfig       = {
      url       : canonicalUrl,
      identifier: `${this.props.location.pathname}`,
      title     : post.frontmatter.title,
    }
    
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title        = {post.frontmatter.title}
          description  = {post.excerpt}
          SEOImage     = {post.frontmatter.cover.childImageSharp.fluid}
          canonicalUrl = {canonicalUrl}
        />
        <Img fluid={post.frontmatter.cover.childImageSharp.fluid} />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display     : `block`,
            marginBottom: rhythm(1),
            marginTop   : rhythm(-1),
          }}
        >
          {post.frontmatter.date}
        </p>

        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <div style={{ margin: `10px` }}>
          <div style={{ margin: `10px` }}>
            If you liked this article you can share it with others easily: {' '}
          </div>
          <div
            style={{
              ...scale(-1 / 5),
              display     : `block`,
              marginBottom: rhythm(1),
              marginTop   : rhythm(-1),
              cursor      : `pointer`,
              display     : `inline-block`,
              margin      : `5px`,
            }}
          >
            <FacebookShareButton
              url   = {canonicalUrl}
              quote = {post.frontmatter.title}
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          </div>
          <div
            style={{
              ...scale(-1 / 5),
              display     : `block`,
              marginBottom: rhythm(1),
              marginTop   : rhythm(-1),
              cursor      : `pointer`,
              display     : `inline-block`,
              margin      : `5px`,
            }}
          >
            <TwitterShareButton
              url   = {canonicalUrl}
              title = {post.frontmatter.title}
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </div>
          <div
            style={{
              ...scale(-1 / 5),
              display     : `block`,
              marginBottom: rhythm(1),
              marginTop   : rhythm(-1),
              cursor      : `pointer`,
              display     : `inline-block`,
              margin      : `5px`,
            }}
          >
            <LinkedinShareButton
              url          = {canonicalUrl}
              title        = {post.frontmatter.title}
              windowWidth  = {750}
              windowHeight = {600}
            >
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
          </div>
        </div>

        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />

        <Bio />

        <ul
          style={{
            display       : `flex`,
            flexWrap      : `wrap`,
            justifyContent: `space-between`,
            listStyle     : `none`,
            padding       : 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
        <div>
          <VirtualContainer placeholder={Placeholder}>
            {() => (
              <Disqus.DiscussionEmbed
                shortname = "ochronuscom"
                config    = {disqusConfig}
              />
            )}
          </VirtualContainer>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
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
`
