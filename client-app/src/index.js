import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import { Route } from "react-router-dom";
// import { ConnectedRouter } from "react-router-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./components/App";
import { reduxStore, history } from "./store";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Provider store={reduxStore}>
    <Router history={history}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

// from killick
// ReactDOM.render(
//   <Provider store={reduxStore}>
//     <ConnectedRouter history={history}>
//       <Route path="/" component={App} />
//     </ConnectedRouter>
//   </Provider>,
//   document.getElementById("root")
// );
// registerServiceWorker();

// import React from "react";
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "./index.css";
// import App from "./components/App";
// import store from "./store";

// import registerServiceWorker from "./registerServiceWorker";

// ReactDOM.render(
//   <Provider store={store}>
//     <Router>
//       <Switch>
//         <Route path="/" component={App} />
//       </Switch>
//     </Router>
//   </Provider>,
//   document.getElementById("root")
// );
// registerServiceWorker();
