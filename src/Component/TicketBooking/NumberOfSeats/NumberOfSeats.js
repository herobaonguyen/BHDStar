import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate,useHref } from 'react-router-dom';
import { bookingTicketType } from '../../../Redux/Type/BookingTicketType/BookingTicketType';
import { HomeType } from '../../../Redux/Type/HomeType/HomeType';
import { DelayTime } from '../../../Util/Constant';
import { BookingInfo } from '../BookingInfo/BookingInfo';



export const NumberOfSeats = () => {

  const { state,pathname } = useLocation();
  const dispatch = useDispatch();
  const { bookingFilmInfo,tongDonHang } = useSelector(state => state.BookingTicketReducer)
  const navigate = useNavigate()

 


  const bookingInfo = {
    hinhAnh: state.hinhAnh,
    tenPhim: state.tenPhim,
    ngayChieu: state.ngayChieu,
    rapChieu: state.rapChieu,
    tongGiaTien: bookingFilmInfo.tongGiaTien,
    tongDonHang: tongDonHang
  }
  
  

  useEffect(() => {
    dispatch({
      type: bookingTicketType.GET_TICKET_BOOKING_DETAIL,
      countType: 'reset',
    })
  }, []);



  return <div className="numberOfSeats">
    <BookingInfo bookingInfo={bookingInfo} />
    <div className="booking-notify">
      <h3>LƯU Ý</h3>
      <p>- Hãy chọn kỹ loại vé và số lượng bạn muốn mua</p>
      <p>- Bạn có thể mua tối đa 10 vé trong một lần giao dịch</p>
      <p>- Để có trải nghiệm mua vé tốt nhất xin vui lòng sử dụng <a href='#'>App BHDStar</a></p>
    </div>
    <div className="choose-number-of-seats">
      <span>Standard</span>
      <div className="choose-space">
        <div className="container-fluid">
          <div className="row master">
            <div className="col-4">
              Vé
            </div>
            {/* <div className="col-2 text-center">
              Giá
            </div> */}
            <div className="col-4 text-center">
              Số lượng
            </div>
            <div style={{ textAlign: 'right' }} className="col-3">
              Tổng
            </div>
          </div>
          <div className="row main-info-ticket">
            <div className="col-4">
              Adult Standard 2D
            </div>
            {/* <div className="col-2 text-center">
              {state.giaVe.toString().toLocaleString()}
            </div> */}
            <div className="col-4 text-center">
              <div className="counter">
                <button
                  onClick={() => dispatch({
                    type: bookingTicketType.GET_TICKET_BOOKING_DETAIL,
                    countType: 'minus',
                    giaVe: state.giaVe
                  })}
                  className="count-btn">
                  <i className="fas fa-minus"></i>
                </button>
                <p className="count-number">{bookingFilmInfo.numberOfTickets}</p>
                <button
                  onClick={() => dispatch({
                    type: bookingTicketType.GET_TICKET_BOOKING_DETAIL,
                    countType: 'plus',
                    giaVe: state.giaVe
                  })}
                  className="count-btn">
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            </div>
            <div style={{ textAlign: 'right' }} className="col-3">
              {bookingFilmInfo.tongGiaTien}.00
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      onClick={() => {
        if (bookingFilmInfo.numberOfTickets > 0) {
          dispatch({ type: HomeType.OPEN_LOADING })
         
          setTimeout(() => {
            navigate(`../ticketbooking/chooseseats`,{state:state})
            dispatch({ type: HomeType.CLOSE_LOADING })
          }, DelayTime.BOOKING_TICKET_DELAY)
        }
      }}
      style={{ display: bookingFilmInfo.numberOfTickets === 0 ? 'none' : 'block' }}
      className="next-step-btn">
      CHỌN GHẾ
    </button>
  </div>;
};
