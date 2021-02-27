import React from "react"
import { css } from "@emotion/react"

const bb_css = css`
  *{
    display: block;
    padding: 8px;
    margin: 12px;
    border: 1px solid #0000;
    border-radius: 8px;
    box-shadow: 0px 0px 4px #0006;
    width:100%;
  }

  [id=submit]{
  padding: 8px 16px;
  border: 0px;
  color: rgb(233,233,233);
  background-color: var(--primary);
  outline: none;
  transition: all 0.4s;
  text-align: center;
  }
  [id=submit]:hover, [id=submit]:focus {
    filter: brightness(1.5);
    box-shadow: 4px 5px 12px rgba(0,0,0,0.4);
  }
`;

export default function Form(props) {
  return (
    <form action={props.action} method="post" css={bb_css}>
        {props.children}
    </form>
  );
}
