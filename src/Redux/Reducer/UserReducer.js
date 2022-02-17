
import { localStorageItems } from "../../Util/Constant";
import { HomeType } from "../Type/HomeType/HomeType";


let userLogin = null;
if(localStorage.getItem(localStorageItems.USER_LOGIN)){
    userLogin = JSON.parse(localStorage.getItem(localStorageItems.USER_LOGIN))
}

const stateDefaults = {
    userLogin,
}

export const UserReducer = (state = stateDefaults,action) => {
    switch(action.type) {
        case HomeType.LOGIN: {
            state.userLogin = action.userLogin
            return {...state}
        }

        case HomeType.LOGOUT: {
            localStorage.removeItem(localStorageItems.USER_LOGIN)
            localStorage.removeItem(localStorageItems.TOKEN)
            state.userLogin = null
            return {...state}
        }

        default: {
            return {...state}
        }
    }
}