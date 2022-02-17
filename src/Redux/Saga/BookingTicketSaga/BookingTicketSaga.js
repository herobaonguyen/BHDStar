import { call, put, takeLatest } from "redux-saga/effects";
import { BookingTicketService } from "../../../Service/BookingTicketService/BookingTicketService";
import { bookingTicketType } from "../../Type/BookingTicketType/BookingTicketType";
import { SagaType } from "../SagaType/SagaType";

function * getSeatList(action) {
    try{
        const {data,status} = yield call(() => (BookingTicketService.getSeatList(action.maLichChieu)))

        if(status === 200) {
            yield put({
                type:bookingTicketType.GET_SEAT_LIST,
                seatList: data.content.danhSachGhe
            })
        }
    }catch(err){
        console.log(err);
    }
}   
export function * TrackingGetSeatList () {
    yield takeLatest(SagaType.GET_SEAT_LIST_API,getSeatList)
}