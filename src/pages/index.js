import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Splashimg from "../components/custom/splashimg"
import Button from "../components/bb/button"
import Table from "../components/bb/table"
import Card from "../components/bb/card"
import Smartgrid from "../components/bb/smartgrid"
import Slideshow from "../components/bb/slideshow"
import Loader from "../components/bb/loader"
// import { css } from "@emotion/react"
import Img from "gatsby-image"
import Form from "../components/bb/form"

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <SEO title="" />
      <Splashimg />

      <div id="section 1">
        <h1>This is a title</h1>
        <h2>This is a subtitle</h2>
        <p>this is a block of text</p>
        <h2>A Basic Table</h2>
        <Table data={[
                      ["Thing#1", 2, "Apple"],
                      ["Thing#2", 5, "Orange"],
                      ["Thing#3", 8, "Pear"],
                    ]} 
        />

        <h2>Smartgrid</h2>

        <Smartgrid maxcolumns={3}>
          <Card>
            <Img fluid={data.file.childImageSharp.fluid} alt="yes" />
            These are cards in a Smartgrid component. They also include a border attribute.
            <br/>
            <Button value="click here" to="#"/>
          </Card>
          <Card>
            <Img fluid={data.file.childImageSharp.fluid} alt="yes" />
            These are cards in a Smartgrid component. They also include a border attribute.
            <br/>
            <Button value="click here" to="#"/>
          </Card>
          <Card>
            <Img fluid={data.file.childImageSharp.fluid} alt="yes" />
            These are cards in a Smartgrid component. They also include a border attribute.
            <br/>
            <Button value="click here" to="#"/>
          </Card>
        </Smartgrid>

        <Smartgrid maxcolumns={2}>
          <Card border>
            <Img fluid={data.file.childImageSharp.fluid} alt="yes" />
            These are cards in a Smartgrid component. They also include a border attribute.
            <br/>
            <Button value="click here" to="#"/>
          </Card>
          <Card border>
            <Img fluid={data.file.childImageSharp.fluid} alt="yes" />
            These are cards in a Smartgrid component. They also include a border attribute.
            <br/>
            <Button value="click here" to="#"/>
          </Card>
        </Smartgrid>

        <h2>Slideshow</h2>
        <Slideshow imagefilter="avatar"/>

        <h2>Forms</h2>
        <Form>
          <input type="text" placeholder="text input" />
          <textarea placeholder="textarea" />
        </Form>
        <h2>Loader Icon</h2>
        <Loader />
      </div>
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
        fluid {
          ...GatsbyImageSharpFluid
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
