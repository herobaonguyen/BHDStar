import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { HomeType } from '../../Redux/Type/HomeType/HomeType';
import { DelayTime } from '../../Util/Constant';

export const MainTicketBooking = () => {

  const { bookingFilmInfo, chooseCounter } = useSelector(state => state.BookingTicketReducer)
  const { maLichChieu } = useSelector(state => state.FilmDetailReducer)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { pathname, state } = useLocation()

  const step2ClassName = () => {
    if (pathname === '/ticketbooking/chooseseats' || pathname === '/ticketbooking/choosefoods' || pathname === '/ticketbooking/confirm' || pathname === '/ticketbooking/finalstep')
      return 'step active progressing'
    else if (bookingFilmInfo.numberOfTickets === 0)
      return 'step'
    else return 'step active'

  }

  const step3ClassName = () => {
    if (pathname === '/ticketbooking/choosefoods' || pathname === '/ticketbooking/confirm' || pathname === '/ticketbooking/finalstep')
      return 'step active progressing'
    else if (chooseCounter >= 0 || chooseCounter < bookingFilmInfo.numberOfTickets)
      return 'step'
    else if (chooseCounter === bookingFilmInfo.numberOfTickets)
      return 'step active'

  }

  const step4ClassName = () => {
    if (pathname === '/ticketbooking/confirm' || pathname === '/ticketbooking/finalstep') {
      return 'step active progressing'
    } else if (pathname === '/ticketbooking/choosefoods') {
      return 'step active'
    } else return 'step'
  }

  const step5ClassName = () => {
    if (pathname === '/ticketbooking/finalstep') {
      return 'step active progressing'
    } else if (pathname === '/ticketbooking/confirm') {
      return 'step active'
    } else return 'step'
  }

  return <div className="main-ticket-booking" >
    <div className="my-container">
      <div className="step-bar">
        <span
          onClick={() => {
            if (pathname === `/ticketbooking/chooseseats`) {
              dispatch({ type: HomeType.OPEN_LOADING })
              setTimeout(() => {
                navigate(-1)
                dispatch({ type: HomeType.CLOSE_LOADING })
              }, DelayTime.BOOKING_TICKET_DELAY)
            }
          }}
          className="step progressing first">1. Chọn vé</span>
        <span
          onClick={() => {
            if (bookingFilmInfo.numberOfTickets > 0) {
              if (pathname === `/ticketbooking/numberofseats`) {
                dispatch({ type: HomeType.OPEN_LOADING })
                setTimeout(() => {
                  navigate(`../ticketbooking/chooseseats`, { state: state })
                  dispatch({ type: HomeType.CLOSE_LOADING })
                }, DelayTime.BOOKING_TICKET_DELAY)
              }
            }
          }}
          className={step2ClassName()}>
          2. Chọn ghế
        </span>
        <span
          onClick={() => {
            if (chooseCounter === bookingFilmInfo.numberOfTickets) {
              if (pathname === `/ticketbooking/chooseseats`) {
                dispatch({ type: HomeType.OPEN_LOADING })
                setTimeout(() => {
                  navigate(`../ticketbooking/choosefoods`, { state: state })
                  dispatch({ type: HomeType.CLOSE_LOADING })
                }, DelayTime.BOOKING_TICKET_DELAY)
              }
            }
          }}
          className={step3ClassName()}>3. Chọn đồ ăn</span>
        <span
          onClick={() => {

            if (pathname === `/ticketbooking/choosefoods`) {
              dispatch({ type: HomeType.OPEN_LOADING })
              setTimeout(() => {
                navigate(`../ticketbooking/confirm`, { state: state })
                dispatch({ type: HomeType.CLOSE_LOADING })
              }, DelayTime.BOOKING_TICKET_DELAY)
            }

          }}
          className={step4ClassName()}>4. Xác nhận</span>
        <span
          onClick={() => {

            if (pathname === `/ticketbooking/confirm`) {
              dispatch({ type: HomeType.OPEN_LOADING })
              setTimeout(() => {
                navigate(`../ticketbooking/finalstep`)
                dispatch({ type: HomeType.CLOSE_LOADING })
              }, DelayTime.BOOKING_TICKET_DELAY)
            }

          }}
          className={step5ClassName()}>5. Đặt vé thành công</span>
      </div>
      <Outlet />
    </div>
  </div>
};
