import React from "react"
import { css } from "@emotion/react"

const bb_css = css`
  background: #ebebeb;
  height: 560px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export default function Hero(props) {
  return (
    <div css={[bb_css, props.customCSS]} className="full-bleed">
      {props.children}
    </div>
  )
}
