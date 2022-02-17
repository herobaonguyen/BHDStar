import { HomeType } from "../Type/HomeType/HomeType"

const stateDefaults = {
    loadingStatus:false
}

export const LoadingReducer = (state = stateDefaults,action) => {
    switch (action.type) {
        case HomeType.OPEN_LOADING: {
            state.loadingStatus = true;
            return {...state};
        }
        case HomeType.CLOSE_LOADING: {
            state.loadingStatus = false;
            return {...state};
        }
        default: {return {...state};}
    }
}