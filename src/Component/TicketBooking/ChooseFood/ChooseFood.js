import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { bookingTicketType } from '../../../Redux/Type/BookingTicketType/BookingTicketType'
import { HomeType } from '../../../Redux/Type/HomeType/HomeType'
import { DelayTime } from '../../../Util/Constant'
import { BookingInfo } from '../BookingInfo/BookingInfo'

export const ChooseFood = () => {

    const { bookingFilmInfo, foodInfo, foodChosenList, tongDonHang } = useSelector(state => state.BookingTicketReducer)
    const { state, pathname } = useLocation();
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const bookingInfo = {
        hinhAnh: state.hinhAnh,
        tenPhim: state.tenPhim,
        ngayChieu: state.ngayChieu,
        rapChieu: state.rapChieu,
        tongGiaTien: bookingFilmInfo.tongGiaTien,
        foodChosenList: foodChosenList,
        tongDonHang: tongDonHang
    }



    const renderFoodInfo = () => (
        foodInfo.map((food, index) => (
            <div key={index} className="food">
                <img src={require(`../../../Assets/img/Food/${food.foodImage}`)} />
                <p className="food__name">
                    {food.foodName}
                </p>
                <p className="food__price">
                    145,000
                </p>
                <div className="pick-number-of-food">
                    <button
                        onClick={() => dispatch({
                            type: bookingTicketType.COUNT_FOOD,
                            foodInfo: food,
                            countType: 'minus'
                        })}
                        className="count-btn">
                        <i className="fas fa-minus"></i>
                    </button>
                    <span className="count-food">{food.foodCount}</span>
                    <button
                        onClick={() => dispatch({
                            type: bookingTicketType.COUNT_FOOD,
                            foodInfo: food,
                            countType: 'plus'
                        })}
                        className="count-btn">
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        ))
    )
    return (
        <div className="choose-food">
            <BookingInfo bookingInfo={bookingInfo} hideFilmInfo={true} />
            <div className="food-choosing-container">
                <div className="food-choosing-header__container">
                    <h2>CHỌN THỰC PHẨM</h2>
                    <p>Chọn thực phẩm sau đó kiểm tra lại</p>
                </div>
                <div className="food-choosing__space">

                    <div className="food-list">

                        {renderFoodInfo()}
                    </div>

                </div>
                <button
                    onClick={() => {
                        if (bookingFilmInfo.numberOfTickets > 0) {
                            dispatch({ type: HomeType.OPEN_LOADING })

                            setTimeout(() => {
                                navigate(`../ticketbooking/confirm`, { state: state })
                                dispatch({ type: HomeType.CLOSE_LOADING })
                            }, DelayTime.BOOKING_TICKET_DELAY)
                        }
                    }}
                    style={{ display: bookingFilmInfo.numberOfTickets === 0 ? 'none' : 'block' }}
                    className="next-step-btn">
                    XÁC NHẬN
                </button>
            </div>
        </div>
    )
}
