import React from "react"
import { css } from "@emotion/react"

const bb_css = css`
  display: grid;
  gap: 24px;
`

export default function Smartgrid(props) {
  let col_css = css`
    grid-template-columns: 1fr;
    @media screen and (min-width: 500px){
      grid-template-columns: 1fr 1fr 1fr;
    }
  `;
  if(props.maxcolumns){
      col_css = css`
      grid-template-columns: 1fr;
        @media screen and (min-width: 500px){
          grid-template-columns: repeat(${props.maxcolumns}, 1fr);
        }
      `;
  }
  return (
    <div css={[bb_css, col_css]} >
        {props.children}
    </div>
  )
}
