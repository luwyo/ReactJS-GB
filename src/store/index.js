import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { getPublicGistsApi, searchGistsByNameApi } from "../api/gists";
import { profileReducer } from "./profile";
import { conversationsReducer } from "./conversations";
import { messagesReducer } from "./messages";
import { gistsReducer } from "./gists";

import {
  logger,
  botMessage,
  timeScheduler,
  crashReporter,
} from "./middlewares";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["messages"],
  whitelist: ["profile"],
};

const reducer = combineReducers({
  profile: profileReducer,
  conversations: conversationsReducer,
  messages: messagesReducer,
  gists: gistsReducer,
});

export const store = createStore(
  persistReducer(persistConfig, reducer),
  compose(
    applyMiddleware(
      crashReporter,
      thunk.withExtraArgument({ getPublicGistsApi, searchGistsByNameApi }),
      logger,
      botMessage,
      timeScheduler
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (args) => args
  )
);

export const persistor = persistStore(store);
