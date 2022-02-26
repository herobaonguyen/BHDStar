import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { HomeType } from '../../../Redux/Type/HomeType/HomeType';
import { DelayTime } from '../../../Util/Constant';
import * as Yup from 'yup'
import { withFormik } from 'formik';


const ConfirmTicket = (props) => {

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;


  const { state, pathname } = useLocation();
  const { chosenSeatList, tongDonHang, foodChosenList } = useSelector(state => state.BookingTicketReducer)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const renderSeatsName = () => (
    chosenSeatList.map((seat, index) => (
      <span style={{ marginRight: 10 }} key={index}>{seat.tenGhe}</span>
    ))
  )


  const renderSeatsBill = () => {
    const normalSeats = chosenSeatList.filter((seat, index) => (
      seat.loaiGhe === "Thuong"
    ))
    const vipSeats = chosenSeatList.filter((seat, index) => (
      seat.loaiGhe === "Vip"
    ))

    const nodeList = []

    if (normalSeats.length > 0)
      nodeList.push(<div key={0} className="row my-row">
        <div className="col-6">
          {state.tenPhim + " (" + (normalSeats[0].loaiGhe) + ")"}
        </div>
        <div className="col-2">
          {normalSeats[0].giaVe}
        </div>
        <div className="col-2">
          {normalSeats.length}
        </div>
        <div className="col-2">
          {normalSeats[0].giaVe * normalSeats.length}
        </div>
      </div>)
    if (vipSeats.length > 0) {
      nodeList.push(<div key={1} className="row my-row">
        <div className="col-6">
          {state.tenPhim + " (" + (vipSeats[0].loaiGhe) + ")"}
        </div>
        <div className="col-2">
          {vipSeats[0].giaVe}
        </div>
        <div className="col-2">
          {vipSeats.length}
        </div>
        <div className="col-2">
          {vipSeats[0].giaVe * vipSeats.length}
        </div>
      </div>)
    }
    return nodeList;
  }



  const renderFoodBill = () => (
    foodChosenList.map((food) => {
      return <div className="row my-row food-row">
        <div className="col-6">
          {food.foodName}
        </div>
        <div className="col-2">
          {food.foodPrice}
        </div>
        <div className="col-2">
          {food.foodCount}
        </div>
        <div className="col-2">
          {food.foodCount * food.foodPrice}
        </div>
      </div>
    })
  )

  return (
    <div className="confirm-ticket">
      <div className="confirm-cart">
        <h1>ĐƠN HÀNG CỦA BẠN </h1>
        <div className="confirm-film-info">
          <div className="info--row">
            <div className="info--col">
              <p className="text-green">Phim/Title:</p>
              <p className="text-green">{state.tenPhim}</p>
            </div>
          </div>
          <div className="info--row">
            <div className="info--col">
              <p className="text--red">Rạp/Cinema:</p>
              <p className="text--red">{state.rapChieu}</p>
            </div>
          </div>
          <div className="info--row">
            <div className="info--col">
              <p>Ngày/Date:</p>
              <p>{state.ngayChieu.toDateString()}</p>
            </div>
          </div>
          <div className="info--row">
            <div className="info--col">
              <p>Suất/Session:</p>
              <p>{state.gioChieu}</p>
            </div>
          </div>
          <div className="info--row">
            <div className="info--col">
              <p>Ghế/Seats:</p>
              {renderSeatsName()}
            </div>
          </div>
          <div className="info--row">
            <div className="info--col">
              <p>Thành tiền/Total:</p>
              <p>{tongDonHang} đ</p>
            </div>
          </div>
          <div className="info--row">
            <div className="info--col--full">
              <p>Quý khách vui lòng kiểm tra lại thông tin trước khi thanh toán</p>
            </div>
          </div>
          <div className="info--row">
            <div className="info--col--full">
              <p className="text--red">Vé mua rồi không được đổi lại hoặc trả lại</p>
            </div>
          </div>
          <div className="info--row">
            <div className="info--col--full">
              <p>Please check the information before purchasing ticket</p>
            </div>
          </div>
          <div className="info--row">
            <div className="info--col--full">
              <p className="text--red" >Purchased ticket can not be changed or refunded</p>
            </div>
          </div>
        </div>
        <div className="full-cart">
          <div className="row">
            <div className="col-6 text-green">
              Mục
            </div>
            <div className="col-2 text-green">
              Giá
            </div>
            <div className="col-2 text-green">
              Số lượng
            </div>
            <div className="col-2 text-green">
              Cộng
            </div>
          </div>
          {renderSeatsBill()}
          {renderFoodBill()}
          <div className="row">
            <div className="col-6">

            </div>

            <div className="col-2">
              Tổng Cộng
            </div>
            <div className="col-2">
              VND{tongDonHang}
            </div>
          </div>
        </div>
      </div>
      <form className="user-booking-info">
        <h1>CHI TIẾT CÁ NHÂN</h1>
        <div className="input-info-container">
          <div className="row">
            <div className="col-3">
              <p>Tên*</p>
            </div>
            <div className="col-9">
              <input name='name' onChange={handleChange} />
              <p style={{ fontSize: '14px', color: 'red' }}>{errors.name}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <p>Email*</p>
            </div>
            <div className="col-9">
              <input name='email' onChange={handleChange} />
              <p style={{ fontSize: '14px', color: 'red' }}>{errors.email}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <p>Điện thoại*</p>
            </div>
            <div className="col-9">
              <input name='phoneNumber' onChange={handleChange} />
              <p style={{ fontSize: '14px', color: 'red' }}>{errors.phoneNumber}</p>
            </div>
          </div>
        </div>
      </form>
      <div className="final-btn-group">
        <button
          onClick={() => {
            dispatch({ type: HomeType.OPEN_LOADING })
            setTimeout(() => {
              navigate("../")
              dispatch({ type: HomeType.CLOSE_LOADING })
            }, DelayTime.BOOKING_TICKET_DELAY)
          }}
          className="final-btn">HỦY ĐẶT VÉ</button>
        <button 
          type="submit"
          onClick={() => {
            if (JSON.stringify(errors) === '{}' && values.name !== '' && values.email !== '' && values.phoneNumber !== '') {
              handleSubmit()
     
              dispatch({ type: HomeType.OPEN_LOADING })
              setTimeout(() => {
                navigate("../ticketbooking/finalstep")
                dispatch({ type: HomeType.CLOSE_LOADING })
              }, DelayTime.BOOKING_TICKET_DELAY)
            }
          }}
          className="final-btn">THANH TOÁN</button>
      </div>
    </div>
  )
}


const ComfirmTicketForm = withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    phoneNumber: ''
  }),

  // Custom sync validation
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Bạn cần nhập tài khoản vào đây !'),
    email: Yup.string().email('Email không hợp lệ !!').required('Bạn cần nhập mật khẩu vào !'),
    phoneNumber: Yup.string().required('Bạn cần nhập mật khẩu vào !')
  }),

  handleSubmit: (values, { props, setSubmitting }) => {
  },

  displayName: 'BasicForm',
})(ConfirmTicket);

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(ComfirmTicketForm)