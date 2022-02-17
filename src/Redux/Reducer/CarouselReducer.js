import { HomeType } from "../Type/HomeType/HomeType";

const stateDefaults = {
    bannerList: [],
    filmReviewList: [],
};

export const CarouselReducer = (state = stateDefaults,action) => {
    switch (action.type) {
        case HomeType.TAKE_BANNERS:{
            state.bannerList = action.bannerList
            return{...state}
        }

        case HomeType.GET_FILM_REVIEW:{
            state.filmReviewList = action.filmReviewList.slice(0,11)
            state.filmReviewList.splice(5,1);
            return{...state}
        }
        default: {
            return {...state}
        }
    }
}