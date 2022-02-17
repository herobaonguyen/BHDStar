import { call, delay, put, takeLatest } from "redux-saga/effects";
import { FilmDetailService } from "../../../Service/FilmDetailService/FilmDetailService";
import { DelayTime } from "../../../Util/Constant";
import { FilmDetailType } from "../../Type/FilmDetailType/FilmDetailType";
import { HomeType } from "../../Type/HomeType/HomeType";
import { SagaType } from "../SagaType/SagaType";


function* getFilmDetail(action) {
    yield put({
        type: HomeType.OPEN_LOADING
    })
    try {
        const {data,status} = yield call(() => (FilmDetailService.GetFilmDetailAPI(action.maPhim)))

        
        yield delay(DelayTime.GET_FILM_DETAIL_DELAY)

        if(status == 200) {
            yield put({
                type: FilmDetailType.GET_FILM_DETAIL,
                filmDetail: data.content
            })
        }

        yield put({
            type: HomeType.CLOSE_LOADING
        })
    }catch(err) {
        console.log(err);
    }
}

export function* TrackingGetFilmDetail() {
    yield takeLatest(SagaType.GET_FILM_DETAIL_API,getFilmDetail)
}