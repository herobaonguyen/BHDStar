import { call, delay, put, takeLatest } from "redux-saga/effects";
import { HomeService } from "../../../Service/HomeService/HomeService";
import { DelayTime, localStorageItems } from "../../../Util/Constant";
import { poppupNoti } from "../../../Util/Notification";

import { takeBanners } from "../../Action/HomeAction/HomeAction";
import { HomeType } from "../../Type/HomeType/HomeType";
import { SagaType } from "../SagaType/SagaType";

function* getHomeBanners(action) {
    try{
        const {data,status} = yield call(HomeService.getBannerAPI)

        yield put({
            type: HomeType.TAKE_BANNERS,
            bannerList: data.content
        })
    }catch(err){
        console.log(err)
    } 

}

export function* TrackingGetHomeBanners() {
    yield takeLatest(SagaType.GET_HOME_BANNER,getHomeBanners)
}

function* getFilmReviews(action) {
    try{
        const {data,status} = yield call(HomeService.getFilmReviewsAPI)
        

        yield put({
            type: HomeType.GET_FILM_REVIEW,
            filmReviewList:data.content
        })
    }catch(err){
        console.log(err)
    }
}

export function* TrackingGetFilmReviews() {
    yield takeLatest(SagaType.GET_FILM_REVIEWS_API,getFilmReviews)
}


function* loginAPI(action) {
    try{
        const {data,status} = yield call(() => HomeService.loginAPI(action.userLogin))
        yield delay(DelayTime.LOGIN_DELAY)
        

        if(status == 200){
            
            localStorage.setItem(localStorageItems.TOKEN,data.content.accessToken)
            localStorage.setItem(localStorageItems.USER_LOGIN,JSON.stringify(data.content))
            poppupNoti.loginSuccess()
            
            yield put({
                type: HomeType.LOGIN,
                userLogin:data.content
            })
         
        }
        

        
    }catch(err){
        yield delay(DelayTime.LOGIN_DELAY)
       poppupNoti.loginFailure()
    }
}

export function* trackLoginAPI() {
    yield takeLatest(SagaType.LOGIN_API,loginAPI)
}