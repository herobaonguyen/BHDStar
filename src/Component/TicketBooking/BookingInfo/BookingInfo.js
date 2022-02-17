import React from 'react';

export const BookingInfo = (props) => {

  const renderChosenFoodList = () => {
    if (props.bookingInfo.foodChosenList) {
      return props.bookingInfo.foodChosenList.map((food, index) => {
        return <div key={index} className="price-food">
          <div>
            <h3>{food.foodName}</h3>
            <span>x{food.foodCount}</span>
          </div>
          <p>{food.foodCount * food.foodPrice}</p>
        </div>
      })
    }
  }

  return <div className="booking-info" style={{ justifyContent: props.hideFilmInfo === true ? 'flex-end' : 'space-between', }}>
    <div className="booking-info__film" style={{ display: props.hideFilmInfo === true ? 'none' : 'flex', }}>
      <div className="film__image">
        <img src={props.bookingInfo.hinhAnh} />
      </div>
      <div className="film__info" >
        <h3>{props.bookingInfo.tenPhim}</h3>
        <p>Showing on {props.bookingInfo.ngayChieu.toDateString().slice(0, 10)} {props.bookingInfo.gioChieu}</p>
        <p>{props.bookingInfo.rapChieu} </p>
      </div>
    </div>
    <div className="booking-info__order">
      <h1>ĐƠN HÀNG CỦA BẠN</h1>
      <div className="price-info">
        <h3>{props.bookingInfo.tenPhim}</h3>
        <p>{props.bookingInfo.tongGiaTien}.00</p>
      </div>
      {renderChosenFoodList()}
      <div className="price-total">
        <p>Tổng cộng</p>
        <p>VND{props.bookingInfo.tongDonHang}.00</p>
      </div>
    </div>
  </div>;
};
