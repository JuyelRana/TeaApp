import * as themeActionTypes from "../actions/themeActions";
import {selectedTheme} from "../../constants";
import {TOGGLE_THEME_BEGIN, TOGGLE_THEME_FAILURE, TOGGLE_THEME_SUCCESS} from "../types/themeTypes";

const initialState = {
    appTheme: selectedTheme,
    error: ''
}


const themeReducer = (state = initialState, action) => {
    let {type, payload} = action;

    switch (type) {
        case TOGGLE_THEME_BEGIN: {
            return {
                ...state,
                error: ''
            }
        }

        case TOGGLE_THEME_SUCCESS: {
            return {
                ...state,
                appTheme: payload.selectedTheme
            }
        }

        case TOGGLE_THEME_FAILURE: {
            return {
                ...state,
                error: payload.error
            }
        }

        default: {
            return state;
        }
    }
}

export default themeReducer;
