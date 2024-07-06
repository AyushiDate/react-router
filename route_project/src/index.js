import React from "react"
import ReactDom from "react-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./App.jsx"

let root = ReactDom.createRoot(document.getElementById("root"))

root.render(<App />)