import { combineReducers, createStore } from "redux";
import { profileReducer } from "./profile";
// import { createStore } from "./my-redux";

export const store = createStore(combineReducers({ profile: profileReducer }));
