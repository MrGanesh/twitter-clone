import React from "react";
import ReactDOM from "react-dom";
import {DataLayer} from './DataLayer'
import reducer, {initialState} from './reducer'
import App from "./App";

ReactDOM.render(
<DataLayer initialState={initialState} reducer={reducer}>
      <App />
</DataLayer >, 

document.getElementById("root"));
