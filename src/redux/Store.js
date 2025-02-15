import { createStore } from "redux";
import cartReducer from "./reducer";

// const toEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
export const cartStore = createStore(cartReducer)

