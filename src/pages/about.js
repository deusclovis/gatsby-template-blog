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
                <SEO title="ochronus online - about me" />
                <h1>About me</h1>
                <p>
                    My name is Csaba Okrona. I’m currently and engineering manager at Contentful, leading one of the infrastructure teams. I used to be an engineering manager at Prezi before. I currently live in Berlin - see my <a href="https://www.linkedin.com/in/ochronus/">LinkedIn</a> profile for more.
        </p>
                <p>
                    I’m a seasoned and business savvy engineer manager.
                    </p>
                    <p>
            Always thinking about new ways of growing engineers, improving the business, the teams and the processes.
</p>
                <p>
                    Specialties: Team & peer coaching, management.
</p>
                Being an IT executive has completely reaved, ruined and shaken my life. I can never be thankful enough for that.
                <p>
                The past:
                </p>
                <p>
                A full stack web engineer with 13+ years of experience. Keen on performance optimization of online services, scalability and architecure.
                </p>
                <p>
                Programming languages: python (django), scala, clojure, go, rust (past-past: PHP, ruby, rails, erlang)
                </p>
                <p>
                I have been managing software engineers in the last 5 years
                </p>
                <p>
                
                <b>I believe:</b>
                </p>
                <p>
                <ul>
                <li>that beliefs should be subject to revision</li>
                <li>in growth mindset vs. innate talent</li>
                <li>in the notion of ownership</li>
                <li>in roles vs. status and position</li>
                <li>that old guards and new guards can be friends (http://randsinrepose.com/archives/the-old-guard/)</li>
                <li>in lean and agile – the principles, that is, not necessarily the implementations</li>
                <li>in empowering people</li>
                
                <li>that communication and culture in and between teams make or break a business</li>
                <li>that the ‘people first’ approach wins in the long run</li>
                <li>in openness and transparency on all possible levels</li>
                <li>in ‘consult’ and ‘sell’ vs. ‘tell’</li>
                <li>that one of the greatest joys for engineering leads is to see their engineers grow both professionally and soft-skill-wise</li>
                <li>in hiring for potential vs. hiring for knowledge</li>
                <li>that soft skills should be filtered for during the hiring process with great focus</li>
                <li>that change is not only necessary but also good – though only if it’s conscious</li>
                <li>that aiming for clarity gets you 80% there in communication</li>
                </ul>
                Me on LinkedIn: <a href="https://www.linkedin.com/in/ochronus/">https://www.linkedin.com/in/ochronus/</a>
        </p>
      </Layout >
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
