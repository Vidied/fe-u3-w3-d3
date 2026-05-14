import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favouritesReducer";
import jobReducer from "../reducers/jobReducer";

const mainReducer = combineReducers({
  favourites: favouritesReducer,
  jobs: jobReducer,
});

const store = configureStore({
  reducer: mainReducer,
});

export default store;
