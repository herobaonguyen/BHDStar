import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { SagaType } from '../../../Redux/Saga/SagaType/SagaType';
import { bookingTicketType } from '../../../Redux/Type/BookingTicketType/BookingTicketType';
import { HomeType } from '../../../Redux/Type/HomeType/HomeType';
import { DelayTime } from '../../../Util/Constant';
import { BookingInfo } from '../BookingInfo/BookingInfo';

export const ChooseSeats = () => {

  const { state, pathname } = useLocation();
  const dispatch = useDispatch();
  const { bookingFilmInfo, seatList, chooseCounter,tongDonHang } = useSelector(state => state.BookingTicketReducer)
  const { maLichChieu } = useSelector(state => state.FilmDetailReducer)
  const navigate = useNavigate()


  const bookingInfo = {
    hinhAnh: state.hinhAnh,
    tenPhim: state.tenPhim,
    ngayChieu: state.ngayChieu,
    rapChieu: state.rapChieu,
    tongGiaTien: bookingFilmInfo.tongGiaTien,
    tongDonHang:tongDonHang
  }




  useEffect(() => {
    if (bookingFilmInfo.numberOfTickets === 0) {
      dispatch({ type: HomeType.OPEN_LOADING })
      setTimeout(() => {
        navigate(-1)
        dispatch({ type: HomeType.CLOSE_LOADING })
      }, DelayTime.BOOKING_TICKET_DELAY)
    }
    dispatch({
      type: SagaType.GET_SEAT_LIST_API,
      maLichChieu: maLichChieu
    })
  }, [])

  const renderSeatList = () => {
    if (seatList) {
      return seatList.map((seat) => {
        let nodeClassName = 'seat'
        if (seat.taiKhoanNguoiDat !== null) {
          nodeClassName = 'seat seat-already-sold'
        } else if (seat.choosing === true) {
          nodeClassName = 'seat seat-choosing'
        } else if (seat.loaiGhe === 'Vip') {
          nodeClassName = 'seat seat-vip'
        }
        return <span
          key={seat.maGhe}
          className={nodeClassName}
          onClick={() => dispatch({
            type: bookingTicketType.CHOOSE_SEAT,
            seat: seat
          })}
        >
          {seat.tenGhe}
        </span>
      })
    }
  }


  return <div className="choose-seats">
    <BookingInfo bookingInfo={bookingInfo} />

    <div className="booking-notify">
      <h2>CHỌN GHẾ</h2>
      <p>- Bạn đã đặt <span>{bookingFilmInfo.numberOfTickets}</span> vé </p>
      <p>- Vui lòng chọn số ghế tương ứng với số vé đã đặt</p>
      <p>- Nếu bạn muốn thay đổi số lượng vé, vui lòng quay lại bước 1 để chọn số lượng vé mong muốn</p>
    </div>
    <div className="seat-display">
      <div className="seat-info">
        <span className="seat-info-detail">
          <span className="seat seat-choosing"></span>
          <p>Ghế đang chọn</p>
        </span>
        <span className="seat-info-detail">
          <span className="seat seat-vip"></span>
          <p>Ghế trống (VIP)</p>
        </span>
        <span className="seat-info-detail">
          <span className="seat"></span>
          <p>Ghế trống (Thường)</p>
        </span>
        <span className="seat-info-detail">
          <span className="seat seat-already-sold"></span>
          <p>Ghế đã bán</p>
        </span>
      </div>
      <div className="seat-display__main-display">
        <div className="seat-choose-space">
          <span className="display">SCREEN</span>
          {renderSeatList()}

        </div>
        <div style={{display: 'flex', flexDirection:'row-reverse'}}>
          <button
            onClick={() => {
              if (bookingFilmInfo.numberOfTickets > 0) {
                dispatch({ type: HomeType.OPEN_LOADING })
                setTimeout(() => {
                  navigate(`../ticketbooking/choosefoods`, { state: state })
                  dispatch({ type: HomeType.CLOSE_LOADING })
                }, DelayTime.BOOKING_TICKET_DELAY)
              }
            }}
            style={{ display: chooseCounter < bookingFilmInfo.numberOfTickets ? 'none' : 'block', marginLeft: '76.5%' }}
            className="next-step-btn">
            CHỌN ĐỒ ĂN
          </button>
          <button
            onClick={() => {
              if (bookingFilmInfo.numberOfTickets > 0) {
                dispatch({ type: HomeType.OPEN_LOADING })
                setTimeout(() => {
                  navigate(-1, { state: state })
                  dispatch({ type: HomeType.CLOSE_LOADING })
                }, DelayTime.BOOKING_TICKET_DELAY)
              }
            }}
            style={{ marginLeft: '30px' }}
            className="next-step-btn return">
            QUAY VỀ
          </button>
        </div>
      </div>
    </div>
  </div>;
};
