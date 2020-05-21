import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'

function Bio() {
  return (
    <StaticQuery
      query  = {bioQuery}
      render = {(data) => {
        const { author, social } = data.site.siteMetadata
        return (
          <div>
            <div
              style={{
                display     : `flex`,
                marginBottom: rhythm(2.5),
              }}
            >
              <Image
                fixed = {data.avatar.childImageSharp.fixed}
                alt   = {author}
                style = {{
                  marginRight : rhythm(1 / 2),
                  marginBottom: 0,
                  minWidth    : 50,
                  borderRadius: `100%`,
                }}
              />
              <p>
                Written by <strong>{author}</strong> who lives and works in
                Berlin leading an amazing engineering team @ Contentful.
                {` `}
                <div>
                  <a href={`https://twitter.com/ochronus`}>
                    You should follow him on Twitter
                  </a>
                  <span> or </span>
                  <a href="https://www.linkedin.com/in/ochronus/">
                    add him on LinkedIn
                  </a>
                </div>
              </p>
            </div>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
