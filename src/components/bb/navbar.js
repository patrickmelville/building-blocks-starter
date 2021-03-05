import React from "react"
// import { Link } from "gatsby"
// import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/react"
// import { rhythm } from "../../utils/typography"

const css_base = css`
  background-color: var(--primary);
  text-shadow:none;
  .nav-links{
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr;
    gap: 24px 24px;
    margin: 25px 0;
    }
    .nav-links > div{
      margin: 0 auto;
    }
  a{
    text-transform: uppercase;
    margin: 0 auto;
    text-align:center;
    color: white;
    text-decoration: none;
    position: relative;
  }
  a:after{
    content: "";
    position: absolute;
    bottom:-2px;
    left:50%;
    border-bottom: 3px solid var(--secondary);
    width: 0%;
    transition: all 0.2s;
  }
  a:hover:after{
    left: 0;
    width: 100%;
  }

  @media screen and (min-width: 769px){
    .nav-links{
      grid-template-rows: 1fr;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }  
`

export default function Navbar(props) {
  return (
    <div css={css_base} className="full-bleed" >
      <div className="wrapper">
        <div>{props.children}</div>
      </div>
    </div>
  )
}
