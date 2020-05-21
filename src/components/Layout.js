import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <div>
          <img
            style={{
              width: 80,
              height: 80,
              display: `inline`,
              float: `left`,
              marginRight: `15px`,
            }}
            src="/images/site-logo.original.png"
          />
          <h1
            style={{
              ...scale(1.5),
              marginBottom: rhythm(1.5),
              marginTop: 0,
              display: `block`,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h1>
          <h3 style={{ color: `#666`, paddingBottom: `40px` }}>
            Where the rising ape meets the falling angel
          </h3>
          <Link to={`/about`}>About me</Link>
        </div>
      )
    } else {
      header = (
        <div>
          <img
            style={{
              width: 50,
              height: 50,
              display: `inline`,
              float: `left`,
              marginRight: `15px`,
            }}
            src="/images/site-logo.original.png"
          />
          <h3
            style={{
              ...scale(1),
              fontFamily: `Montserrat, sans-serif`,
              marginTop: 0,
              paddingBottom: `40px`,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h3>
        </div>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children}
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          <div>
            <a href="https://archive.ochronus.com/">
              Check out my older, more technical blog
            </a>
          </div>
        </footer>
      </div>
    )
  }
}

export default Layout
