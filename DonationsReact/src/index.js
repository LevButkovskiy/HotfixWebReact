import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import bridge from "@vkontakte/vk-bridge";
import App from "./App";
import {createBrowserHistory} from 'history'


// Init VK  Mini App
bridge.send("VKWebAppInit");


ReactDOM.render((
  <BrowserRouter>
    <App/>
  </BrowserRouter>
), document.getElementById("root"));
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}
