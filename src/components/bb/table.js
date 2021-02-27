import React from "react"
import { css } from "@emotion/react"

const bb_css = css`
  overflow-y: scroll;
  table{
    padding: 24px;
    width: 100%;
  }
  td {
    padding: 12px;
    border-bottom: solid rgba(0, 0, 0, 0.2) 1px;
  }
`

export default function Table(props) {
    return (
        <table css={bb_css}>
            <tbody>
                {props.data.map((rowData,i) => {
                    return <tr key={i}>
                        {rowData.map((cellData, y) => {
                            return <td key={y}>{cellData}</td>
                        })}
                    </tr>
                  })}
            </tbody>
        </table>
    )
}
