import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { NavigateReducer } from './Reducer/NavigateReducer';
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './Saga/rootSaga';
import { CarouselReducer } from './Reducer/CarouselReducer';
import { UserReducer } from './Reducer/UserReducer';
import { LoadingReducer } from './Reducer/LoadingReducer';
import { FilmDetailReducer } from './Reducer/FilmDetailReducer';
import { BookingTicketReducer } from './Reducer/BookingTicketReducer';

const sagaMiddleware = createSagaMiddleware()




const rootReducer = combineReducers({
    NavigateReducer,
    CarouselReducer,
    UserReducer,
    LoadingReducer,
    FilmDetailReducer,
    BookingTicketReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk,sagaMiddleware));
sagaMiddleware.run(rootSaga)