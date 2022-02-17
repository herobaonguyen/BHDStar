import { all} from 'redux-saga/effects';
import * as HomeSaga from './HomSaga/HomeSaga'
import * as FilmDetailSaga from './FilmDetailSaga/FilmDetailSaga'
import * as BookingTicketSaga from './BookingTicketSaga/BookingTicketSaga'


export function* rootSaga() {
    yield all([
        HomeSaga.TrackingGetHomeBanners(),
        HomeSaga.TrackingGetFilmReviews(),
        HomeSaga.trackLoginAPI(),

        FilmDetailSaga.TrackingGetFilmDetail(),
        BookingTicketSaga.TrackingGetSeatList()
    ])
}