import React from "react"
import { css } from "@emotion/react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <SEO title="" />
      <div>
        <h1>
          A Building Blocks Example
        </h1>
      </div>
      {/* <Img fixed={data.file.childImageSharp.fixed} alt="yes" /> */}
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
  }
`

// Query info for *.md file content loaded into page

// allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//   totalCount
//   edges {
//     node {
//       id
//       frontmatter {
//         title
//         date(formatString: "DD MMMM, YYYY")
//       }
//       fields {
//         slug
//       }
//       excerpt
//     }
//   }
// }
