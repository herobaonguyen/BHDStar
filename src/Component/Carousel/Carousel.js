import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SagaType } from '../../Redux/Saga/SagaType/SagaType';


export const Carousel = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({
            type: SagaType.GET_HOME_BANNER
        })
    },[])

    const { bannerList } = useSelector(state => state.CarouselReducer)

    const renderBannerImg = () => {
        return bannerList.map((banner,index) => (

            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <img style={{height: 'auto'}} src={banner.hinhAnh} className="d-block w-100" alt="..." />
            </div>
        ))
    }

    return <div>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {renderBannerImg()}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>

};
