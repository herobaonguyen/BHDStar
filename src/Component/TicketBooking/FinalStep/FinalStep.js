import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { HomeType } from '../../../Redux/Type/HomeType/HomeType'
import { DelayTime } from '../../../Util/Constant'

export const FinalStep = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
  return (
    <div className="final-step">
        <h1>BẠN ĐÃ ĐẶT VÉ THÀNH CÔNG</h1>
        <p>Thông tin vé sẽ được gửi vào mail của bạn ngay lập tức, hãy trình bày nội dung email cho nhân viên tại rạp để nhận vé tại quầy</p>
        <p style={{color: 'white'}}>Nhấn nút dưới đây để quay lại màn hình chính:</p>
        <button
         onClick={() => {
          dispatch({ type: HomeType.OPEN_LOADING })
                setTimeout(() => {
                  navigate("../")
                  dispatch({ type: HomeType.CLOSE_LOADING })
          }, DelayTime.BOOKING_TICKET_DELAY)
        }} 
        >HOME</button>
    </div>
  )
}
