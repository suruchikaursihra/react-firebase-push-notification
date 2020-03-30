import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { registerServiceWorker } from "./register-sw";

registerServiceWorker();

ReactDOM.render(<App/>, document.getElementById("root"));