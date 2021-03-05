import React from "react"
import { css } from "@emotion/react"

const bb_css = css`
  position: relative;
  top: 4px;
  display: inline-block;
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid var(--secondary); // standard blue #3498db;
  width: 22px;
  height: 22px;
  margin-left: 5px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 1s linear infinite;

  /* Safari */
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

export default function Loader(props) {
  
  return (
    <div css={bb_css} />
  )
}
