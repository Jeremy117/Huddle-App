import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import { createLogger } from "redux-logger";
import { promiseMiddleware, localStorageMiddleware } from "./middleware";

import createHistory from "history/createBrowserHistory";

import auth from "./reducers/auth";
import common from "./reducers/common";
import home from "./reducers/home";
import settings from "./reducers/settings";
import article from "./reducers/article";
import editor from "./reducers/editor";
import team from "./reducers/team";
import roster from "./reducers/roster";
import header from "./reducers/header";

//init browser history API
export const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const myRouterMiddleware = routerMiddleware(history);

const reducer = combineReducers({
  auth,
  common,
  home,
  settings,
  article,
  editor,
  router: routerReducer,
  team,
  roster,
  header
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//setting middleware based on env
const getMiddleware = () => {
  if (process.env.NODE_ENV === "production") {
    return compose(
      applyMiddleware(
        myRouterMiddleware,
        promiseMiddleware,
        localStorageMiddleware
      )
    );
  } else {
    // Enable additional logging in non-production environments.
    return composeEnhancers(
      applyMiddleware(
        myRouterMiddleware,
        promiseMiddleware,
        localStorageMiddleware,
        createLogger()
      )
    );
  }
};

export const reduxStore = createStore(reducer, getMiddleware());
