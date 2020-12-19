import React from "react"
import { Global, css } from "@emotion/react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

const globalCSS = css`
  .wrapper {
    display: grid;
    grid-template-columns: 1fr min(60ch, calc(100% - 64px)) 1fr;
    grid-column-gap: 32px;
  }
  .wrapper > * {
    grid-column: 2;
  }
  .full-bleed {
    width: 100%;
    grid-column: 1 / 4;
  }
  .splash {
    background-image: url("https://source.unsplash.com/random");
    background-position: center;
    background-size: cover;
    height: 400px;
  }
`

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="wrapper">
      <Global styles={globalCSS} />
      <nav>
        <Link
          css={css`
            margin: ${rhythm(1 / 2)} 0;
            background-image: unset;
          `}
          to={`/`}
        >
          {data.site.siteMetadata.title}
        </Link>
        <Link
          css={css`
            margin: ${rhythm(1 / 2)} 0;
            background-image: unset;
          `}
          to={`/about/`}
        >
          About
        </Link>
      </nav>
      <div className="full-bleed splash" />
      {children}
    </div>
  )
}
