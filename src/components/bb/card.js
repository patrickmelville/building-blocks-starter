import React from "react"
import { css } from "@emotion/react"

const base = css`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  margin: 24px 0;
  p,h6{
    flex-grow: 2;
  }
  .gatsby-image-wrapper{
    overflow:visible !important;
  }
`;

const bordered_card = css`
  margin: 24px 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  img {
    margin-bottom: 8px;
    background-position: center;
    background-size: cover;
    border-radius: 8px 8px 0 0;
  }
  *:not(img):not(button):not(a){
    margin: 0px 0px 12px;
    padding: 0px 12px 0px;
  }
  a:not(p > a), button:not(p > button){
    display: block;
    margin: 22px 12px 22px;
    padding: 8px 16px;
  } 
`;

const borderless_card = css`
  ${base};
  img {
    border-radius: 8px;
    margin-bottom: 8px;
    box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.2);
    transition: all 0.5s !important;
  }
  img:hover {
    box-shadow: 3px 6px 12px 3px rgba(0, 0, 0, 0.2);
  }
  *:not(img){
    margin: 0px 0px 12px;
  }
`;

export default function Card(props) {
  let style = borderless_card;
  if (props.border) style = bordered_card;
  return <div css={style}>{props.children}</div>
}
