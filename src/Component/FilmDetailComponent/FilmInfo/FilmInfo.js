import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ModalVideo from 'react-modal-video'
import _ from 'lodash'

export const FilmInfo = () => {

    const { filmDetail } = useSelector(state => state.FilmDetailReducer)
    const [isOpen, setOpen] = useState(false)
   

    let trailer = filmDetail.trailer ? filmDetail.trailer : ""
    trailer = trailer.slice(trailer.length - 11)


    return <div className="film-info">
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={trailer} onClose={() => setOpen(false)} />
        <div className="row">
            <div className="col-12 film-detail__header">
                <div className="d-flex">
                    <NavLink className="return-main" exact="true" to="/">Trang Chủ</NavLink>
                    <span>|</span>
                    <p>{filmDetail.tenPhim}</p>
                </div>
            </div>
            <div className="col-12 col-lg-4">
                <img src={filmDetail.hinhAnh} />
            </div>
            <div className="col-12 col-lg-8">
                <div className="info">
                    <p className="info__header">{filmDetail.tenPhim}</p>
                    <div className="film__description">
                        <p>{filmDetail.moTa}</p>
                    </div>
                    <ul>
                        <li>
                            <span className="info__label">Phân Loại</span>
                            <span className="info--redColor">C13 - PHIM DÀNH CHO KHÁN GIẢ TỪ 13 TUỔI TRỞ LÊN</span>
                        </li>
                        <li>
                            <span className="info__label">Đạo diễn</span>
                            <span >John Cena</span>
                        </li>
                        <li>
                            <span className="info__label">Khởi chiếu</span>
                            <span >{filmDetail.ngayKhoiChieu ? filmDetail.ngayKhoiChieu.slice(0, 10) : ''}</span>
                        </li>
                        <li>
                            <span className="info__label">Thời lượng</span>
                            <span >125 phút</span>
                        </li>
                        <li>
                            <span className="info__label">Ngôn ngữ</span>
                            <span >Phụ đề tiếng Việt</span>
                        </li>
                    </ul>
                    <div className="info__button">

                        <button className="myBtn padding-10-25" onClick={() => setOpen(true)} style={{ marginRight: '10px' }}>XEM TRAILER</button>
                        <a href="#ticket-set">
                            <button className="myBtn padding-10-25"><i className="fas fa-ticket-alt"></i> MUA VÉ NGAY</button>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </div>
};
