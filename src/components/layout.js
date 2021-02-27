import React from "react"
import { Global, css } from "@emotion/react"
// import { useStaticQuery, graphql } from "gatsby"
// import { rhythm } from "../utils/typography"
import Navbar from "./bb/navbar"
import { Link } from "gatsby"

const globalCSS = css`
  :root{
      --primary: #3e3e3e; /* dark grey */
      --primaryalt: 62, 62, 62; /* the same in RGB */
      --secondary: #9c27b0 ; /* purple */
      --secondaryalt: 156, 39, 176; /* RGB */
      
    }
  .wrapper {
    display: grid;
    grid-template-columns: 1fr min(60ch, calc(100% - 48px)) 1fr;
    grid-column-gap: 24px;
  }
  .wrapper > * {
    grid-column: 2;
  }
  .full-bleed {
    width: 100%;
    grid-column: 1 / 4;
  }
`

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <Global styles={globalCSS} />
      <Navbar>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/#about">About</Link>
          <Link to="/#contact">Contact</Link>
        </div>
      </Navbar>
      {children}
      {/* <Footer/> */}
    </div>
  )
}
