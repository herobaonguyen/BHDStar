import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { SagaType } from '../../Redux/Saga/SagaType/SagaType'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"




// import Swiper core and required modules
import SwiperCore, {
    Pagination,
    Navigation
} from 'swiper';
import { NavLink } from 'react-router-dom';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);




export const ViewFilm = () => {


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({
            type: SagaType.GET_FILM_REVIEWS_API
        })
    }, [])

    const { filmReviewList } = useSelector(state => state.CarouselReducer)


    const renderFilmReviewList = () => {
        return filmReviewList.map((film, index) => {

            return <SwiperSlide key={index} style={{ backgroundColor: 'transparent', display: 'flex', flexDirection: 'column', height: '390px', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <NavLink exact="true" to={`/filmdetail/${film.maPhim}`}>
                        <img className="film-image" style={{ height: 270, marginBottom: '15px', width: 200 }} src={film.hinhAnh} />
                    </NavLink>
                    <p style={{ fontSize: '15px', fontWeight: 'bold' }}>{film.tenPhim}</p>

                </div>
                <NavLink exact="true" to={`/filmdetail/${film.maPhim}`}>
                    <button className="myBtn padding-10-25"><i className="fas fa-ticket-alt"></i> MUA VÉ</button>
                </NavLink>
            </SwiperSlide>
        })
    }




    return <div className="view-film-slider">
        <p className="view-film-slider__header" >PHIM ĐANG CHIẾU</p>
        <Swiper slidesPerView={7} spaceBetween={20} className="mySwiper" breakpoints={{

            "200": {
                "slidesPerView": 2,
                "spaceBetween": 20
            },

            "576": {
                "slidesPerView": 3,
                "spaceBetween": 20
            },

            "768": {
                "slidesPerView": 4,
                "spaceBetween": 20
            },

            "992": {
                "slidesPerView": 5,
                "spaceBetween": 20
            },

            "1200": {
                "slidesPerView": 7,
                "spaceBetween": 20
            }
        }} >

            {renderFilmReviewList()}

        </Swiper>

    </div>;
};
