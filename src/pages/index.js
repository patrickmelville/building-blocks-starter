import React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
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
import Form from "../components/bb/form"

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <SEO title="" />
      <Splashimg text="Building Blocks"/>

      <div id="section 1">
        <h1>These are some Builing Blocks</h1>
        <h2>That was an h1 tag &amp; this is an h2 </h2>
        <p>
          This is a paragraph. Links inside of p tags have a special
           style throught the site. <Link to="/#">Here is a link.
           </Link> The rest of the building blocks below are custom 
           react components that you can use and customize if needed.
        </p>
        
        <h2>Smartgrid</h2>
        <Smartgrid maxcolumns={3}>
          <Card>
            <StaticImage src="../images/icon.png" alt="Building Blocks" layout="fullWidth"/>
            <p>
              These are cards in a Smartgrid component. 
              The border attribute has been left off.
            </p>
            <Button value="click here" to="#"/>
          </Card>
          <Card>
            <StaticImage src="../images/icon.png" alt="Building Blocks" layout="fullWidth"/>
            <p>
              These are cards in a Smartgrid component. 
              The border attribute has been left off.
            </p>
            <Button value="click here" to="#"/>
          </Card>
          <Card>
            <StaticImage src="../images/icon.png" alt="Building Blocks" layout="fullWidth"/>
            <p>
              These are cards in a Smartgrid component. 
              The border attribute has been left off. asdf asdf asdf asdf asdf 
            </p>
            <Button value="click here" to="#"/>
          </Card>
        </Smartgrid>

        <Smartgrid maxcolumns={2}>
          <Card border>
            <StaticImage src="../images/icon.png" alt="Building Blocks" layout="fullWidth"/>
            <p>
              These are cards in a Smartgrid component. 
              This cards include the border attribute. 
            </p>
            <Button value="click here" to="#"/>
          </Card>
          <Card border>
            <StaticImage src="../images/icon.png" alt="Building Blocks" layout="fullWidth"/>
            <p>
              These are cards in a Smartgrid component. 
              This cards include the border attribute.
              Here is a <Link to="/#">link.</Link>
            </p>
            <Button value="click here" to="#"/>
          </Card>
        </Smartgrid>

        <h2>Slideshow</h2>
        <Slideshow imagefilter="icon"/>

        <h2>A Basic Table</h2>
        <Table data={[
                      ["Thing#1", 2, "Apple"],
                      ["Thing#2", 5, "Orange"],
                      ["Thing#3", 8, "Pear"],
                    ]} 
        />

        <h2>Forms</h2>
        <Form>
          <label htmlFor="item-1">Item 1</label>
          <input type="text" placeholder="text input" id="item-1" />
          
          <label htmlFor="item-2">Item 2</label>
          <textarea id="item-2" placeholder="textarea" />
          
          <Button id="submit" value="submit" />
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
