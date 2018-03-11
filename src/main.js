import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { BrowserRouter,Route,Switch,HashRouter} from "react-router-dom";
import App from "@/views/App";
import * as stores from '@/stores';
let isShowLoading = true;
// css
ReactDOM.render(
  <Provider {...stores}>
    <HashRouter>
      <Switch>
        <App/>
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById("app")
);
