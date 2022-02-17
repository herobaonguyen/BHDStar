import { bookingTicketType } from "../Type/BookingTicketType/BookingTicketType"

const stateDefaults = {
    bookingFilmInfo: {
        numberOfTickets: 0,
        tongGiaTien: 0
    },
    foodInfo: [
        {foodName:'Combo1 Man Nong - Ga Lac - Caramel 32Oz',foodImage: '662052.png',foodPrice:145000,foodCount:0},
        {foodName:'Combo1 Man Nong - Xuc Xich Loc Xoay - Cheese 32Oz',foodImage: '662055.png',foodPrice:145000,foodCount:0},
        {foodName:'Combo1 Man Nong - Xuc Xich Pho Mai - Caramel 32Oz',foodImage: '662058.png',foodPrice:145000,foodCount:0}, 
    ],
    foodChosenList: [],
    chosenSeatList: [],
    seatList: [],
    chooseCounter: 0,
    tongDonHang: 0
}

export const BookingTicketReducer = (state = stateDefaults, action) => {
    switch (action.type) {

        case bookingTicketType.COUNT_FOOD: {
            const baseIndex = state.foodInfo.findIndex((food) => food.foodName === action.foodInfo.foodName)
            const cartIndex = state.foodChosenList.findIndex((food) => food.foodName === action.foodInfo.foodName)
            if(action.countType === 'minus'){
                if(action.foodInfo.foodCount > 1){
                    state.foodInfo[baseIndex].foodCount--;
                    
                    state.tongDonHang -= state.foodInfo[baseIndex].foodPrice
                } else if(action.foodInfo.foodCount === 1){
                    state.foodInfo[baseIndex].foodCount--;
                    state.foodChosenList.splice(cartIndex,1)
                    
                    state.tongDonHang -= state.foodInfo[baseIndex].foodPrice
                }
            } else if(action.countType === 'plus'){
                if(action.foodInfo.foodCount === 0){
                    state.foodInfo[baseIndex].foodCount++;
                    state.foodChosenList.push(state.foodInfo[baseIndex])
                    
                    state.tongDonHang += state.foodInfo[baseIndex].foodPrice

                } else if(action.foodInfo.foodCount >= 1){
                    state.foodInfo[baseIndex].foodCount++;
                    
                    state.tongDonHang += state.foodInfo[baseIndex].foodPrice

                }
            }
        }

        case bookingTicketType.GET_TICKET_BOOKING_DETAIL: {
            if (action.countType === "plus") {
                if (state.bookingFilmInfo.numberOfTickets < 10) {
                    state.bookingFilmInfo.numberOfTickets++;
                    // state.bookingFilmInfo.tongGiaTien += action.giaVe
                }
            } else if (action.countType === "minus") {
                if (state.bookingFilmInfo.numberOfTickets >= 1) {
                    state.bookingFilmInfo.numberOfTickets--;
                    // state.bookingFilmInfo.tongGiaTien -= action.giaVe
                }
            } else if (action.countType === "reset") {
                state.bookingFilmInfo.numberOfTickets = 0;
                state.bookingFilmInfo.tongGiaTien = 0;
                state.chooseCounter = 0;
                state.foodChosenList = []
                state.chosenSeatList = []
                state.tongDonHang = 0
                state.foodInfo.forEach((food) => food.foodCount = 0)
            }
            return { ...state }
        }

        case bookingTicketType.GET_SEAT_LIST: {
            const newSeatList = action.seatList
            newSeatList.forEach((seat) => {
                seat.choosing = false;
            })
            state.seatList = newSeatList
            return { ...state }
        }

        case bookingTicketType.CHOOSE_SEAT: {
            const index = state.seatList.findIndex((seat) => (
                seat === action.seat
            ))
                
            
            if (state.seatList[index].taiKhoanNguoiDat === null) {

                if (state.chooseCounter < state.bookingFilmInfo.numberOfTickets) {

                    state.seatList[index].choosing = !state.seatList[index].choosing;
                    if (state.seatList[index].choosing === true) {
                        state.chooseCounter++
                        state.bookingFilmInfo.tongGiaTien += action.seat.giaVe
                        state.tongDonHang += action.seat.giaVe
                        state.chosenSeatList.push(action.seat)
                    } else {
                        state.chooseCounter--
                        state.bookingFilmInfo.tongGiaTien -= action.seat.giaVe
                        state.tongDonHang -= action.seat.giaVe
                        const index = state.chosenSeatList.findIndex(seat => seat.tenGhe === action.seat.tenGhe)
                        state.chosenSeatList.splice(index,1)
                    }

                } else if (state.chooseCounter === state.bookingFilmInfo.numberOfTickets) {
                    if (state.seatList[index].choosing === true) {
                        state.seatList[index].choosing = false
                        state.chooseCounter--
                        state.bookingFilmInfo.tongGiaTien -= action.seat.giaVe
                        state.tongDonHang -= action.seat.giaVe
                        const index2 = state.chosenSeatList.findIndex(seat => seat.tenGhe === action.seat.tenGhe)
                        state.chosenSeatList.splice(index2,1)
                        
                    }
                }
            }
            return { ...state }

        }

        default: {
            return { ...state }
        }
    }
}