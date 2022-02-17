import React  from "react";
import { useSelector } from "react-redux";
// Import Swiper React components




export const Loading = () => {

    const {loadingStatus} = useSelector(state => state.LoadingReducer)

    return <div style={{display: loadingStatus === true ? 'flex' : 'none'}} className="loading-display">
        <img src={require('../../Assets/img/logo.png')} />
        <span></span>
    </div>

};
