const stateDefaults = {
    navigate: () => {}
}

export const NavigateReducer = (state= stateDefaults,action) => {
    switch(action.type) {
        case 'navigate' : {
            state.navigate = action.navigate
            return {...state}
        }
        default : return{...state}
    }
}