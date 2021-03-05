import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Splashimg from "../components/custom/splashimg"
import Card from "../components/bb/card"
import { css } from "@emotion/react"
// import Img from "gatsby-image"

const title = css`
  padding: 0px !important;
  * {
    padding: 0 !important;
    color: var(--primary) !important;
  }
  a:hover{
    color: var(--secondary) !important;
  }
`;

export default function Blog({ data }) {
  console.log(data)
  return (
    <Layout>
      <SEO title="" />
      <Splashimg text="The Building Blocks Blog" />
      <h1>Blog Posts</h1>
      { data.posts.edges.map((p)=>{
        let post = p.node;
        return(
          <Card border>
            <h2 css={title}><Link to={post.fields.slug}>{post.frontmatter.title}</Link></h2>
            <p>{post.excerpt}</p>
            <p><Link to={post.fields.slug}>Read more &gt;&gt;</Link></p>
          </Card>
        )
      })}    
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
    posts: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
