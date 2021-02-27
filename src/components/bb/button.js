import React from "react"
import { css } from "@emotion/react"
import {Link} from "gatsby"

const bb_css = css`
  padding: 8px 16px;
  font-size: 1rem;
  border-radius: 8px;
  border: 0px;
  color: rgb(233,233,233);
  background-color: var(--primary);
  outline: none;
  transition: all 0.4s;
  text-align: center;

  :hover, :focus {
    filter: brightness(1.25);
    box-shadow: 4px 5px 12px rgba(0,0,0,0.4);
  }
`

export default function Button(props) {
  let custom = "";
  if (props.customstyle) custom = css`${props.customstyle}`
  let button;
  if (props.href){
    button = <a css={[bb_css, custom]} href={props.href} target="_blank" rel="noreferrer">{props.value}</a>
  }else if(props.to){
    button = <Link css={[bb_css, custom]} to={props.to}>{props.value}</Link>
  }else{
    button = <button css={[bb_css, custom]}>{props.value}</button>
  }
  return button;
}
