import React from "react"
import { css } from "@emotion/react"

const bb_css = css`
  input, textarea{
    display: block;
    position: relative;
    padding: 8px;
    margin: 0 0 18px;
    border: 2px solid #1113;
    border-radius: 8px;
    box-shadow: 0px 0px 4px #0006;
    width:100%; 
    transition: all 500ms;
    outline: none;
  }
  input:focus, textarea:focus{
    box-shadow: 0px 4px 14px rgba(62, 62, 62, 0.5);
    border: 2px solid var(--secondary);
  }

  button{
    width: 100%;
  }
`;

export default function Form(props) {
  return (
    <form action={props.action} method="post" css={bb_css}>
        {props.children}
    </form>
  );
}
