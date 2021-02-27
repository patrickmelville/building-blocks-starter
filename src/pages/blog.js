import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Splashimg from "../components/custom/splashimg"
import Button from "../components/bb/button"
import Table from "../components/bb/table"
import Card from "../components/bb/card"
// import Hero from "../components/bb/hero"
// import { css } from "@emotion/react"
// import Img from "gatsby-image"


export default function Blog({ data }) {
  console.log(data)
  return (
    <Layout>
      <SEO title="" />
      <Splashimg />
      <h1>Blog Posts</h1>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    file(relativePath: { regex: "/avatar.jpg/" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

// allMarkdownRemark = Query info
// for *.md file content loaded into page
