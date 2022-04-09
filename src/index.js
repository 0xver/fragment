import React from "react"
import ReactDOM from "react-dom"
import Detector from "./detector"
import Connector from "./connector"
import Account from "./account"

ReactDOM.render(
  <Detector />,
  document.getElementById("detector")
)

ReactDOM.render(
  <Connector />,
  document.getElementById("connector")
)

ReactDOM.render(
  <Account />,
  document.getElementById("account")
)
