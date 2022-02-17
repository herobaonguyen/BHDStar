import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { HomeType } from '../../../Redux/Type/HomeType/HomeType';
import { DelayTime } from '../../../Util/Constant';





const date = new Date()
date.setHours(7)
date.setMinutes(30)

export const FilmShowtimes = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {filmDetail,giaVe,maLichChieu} = useSelector(state => state.FilmDetailReducer)
    console.log(filmDetail)

    const {tenCumRap,diaChi,lichChieuPhim} = props.rap
    


    const renderThoiGianChieuPhim = () => {
        let timeNodes = []
        for(let i = 0; i < 8;i++){
            timeNodes.push(
                <span onClick={() => {
                    dispatch({type: HomeType.OPEN_LOADING })
                    setTimeout(() => {
                        navigate("../ticketbooking/numberofseats",{state: {
                                hinhAnh: filmDetail.hinhAnh,
                                tenPhim: filmDetail.tenPhim,
                                rapChieu: tenCumRap,
                                ngayChieu: date,
                                gioChieu: date.getHours() + ":" + date.getMinutes(),
                                giaVe: giaVe,
                                maLichChieu:maLichChieu
                            }})
                        dispatch({type: HomeType.CLOSE_LOADING })
                    },DelayTime.BOOKING_TICKET_DELAY)
                }}key={i}>{date.getHours() + ":" + date.getMinutes()}</span>
            )
            date.setMinutes(date.getMinutes() + lichChieuPhim[0].thoiLuong)
        }
        return timeNodes
    }

 

    return <div className="row">
        <div className="cum-rap d-flex">
            <div className="col-12 col-lg-4">
                <div className="showtimes-container" >
                    <div className="rapInfo" >
                        <h3>{tenCumRap}</h3>
                        <p>{diaChi}</p>
                        <button className="myBtn"><i className="fas fa-map-marker-alt"></i> Xem vị trí</button>
                    </div>

                </div>
            </div>
            <div className="col-12 col-lg-8">
                <div className="picktime-container">
                    <div className="film-tag">
                        <span>
                            <p>2D</p>
                            <p>SUB</p>
                        </span>
                        <span>C16</span>
                    </div>
                    <div className="time-picker">
                        {renderThoiGianChieuPhim()}
                    </div>
                </div>
            </div>
        </div>
    </div>
};
