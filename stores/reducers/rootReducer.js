import {combineReducers} from "redux";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
    themeStore: themeReducer
});

export default rootReducer;
