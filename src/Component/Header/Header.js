import React, { useRef, useState } from 'react';
import { useSpring, animated } from '@react-spring/web'
import LoginForm from '../LoginForm/LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import { HomeType } from '../../Redux/Type/HomeType/HomeType';
import { toast } from 'react-toastify';
import { poppupNoti } from '../../Util/Notification';
import { useNavigate } from 'react-router-dom';

export const Header = () => {


    const [state, toggle] = useState(false)
    const navigate = useNavigate()
    const [openLogin, setOpenLogin] = useState(false)
    const dispatch = useDispatch()
    const { userLogin } = useSelector(state => state.UserReducer)
    const firstAnimate = useSpring({
        from: { transform: 'rotate(0deg) translate(0px,0px)' },
        transform: state ? 'rotate(45deg) translate(3px,5px)' : 'rotate(0deg) translate(0px,0px)'
    })
    const secondAnimate = useSpring({
        from: { opacity: 1 },
        opacity: state ? 0 : 1
    })
    const thirstAnimate = useSpring({
        from: { transform: 'rotate(0deg) translate(0px,0px)' },
        transform: state ? 'rotate(-47deg) translate(7.5px,-8px)' : 'rotate(0deg) translate(0px,0px)'
    })
    const textAnimate = useSpring({
        from: { text: 'MENU' },
        text: state ? 'CLOSE' : 'MENU'
    })

    const menuAnimate = useSpring({
        from: { transform: 'translateX(-100%)' },
        transform: state ? 'translateX(0%)' : 'translateX(-100%)'
    })

    const renderRightHeader = () => {
        if (userLogin === null)
            return (
                <div className="header__right d-flex">

                    <ul className="Social-media d-flex align-items-center">
                        <li>
                            <a className="social-media__link" href="#"><i style={{ fontSize: "30px" }} className="fab fa-instagram"></i></a>

                        </li>
                        <li>
                            <a className="social-media__link" href="#"><i style={{ fontSize: "27px" }} className="fab fa-tiktok"></i></a>

                        </li>
                        <li>
                            <a className="social-media__link" href="#"><i style={{ fontSize: "24px" }} className="fab fa-youtube"></i></a>

                        </li>
                        <li> <a className="social-media__link" href="#"><i style={{ fontSize: "27px" }} className="fab fa-facebook-f"></i></a></li>
                    </ul>
                    <button
                        onClick={() => {
                            setOpenLogin(!openLogin)

                        }}
                        className="myBtn padding-10">
                        ĐĂNG NHẬP
                    </button>
                </div>

            )
        else return (
            <div className="header__right d-flex">
                <p className="user-name">Nguyen</p>
                <span>|</span>
                <p
                    onClick={() => {
                        dispatch({
                            type: HomeType.LOGOUT
                        })
                        poppupNoti.logoutSuccess()
                    }}
                    className="logout">THOÁT</p>

            </div>
        )
    }





    return <div className="container-fluid header d-flex justify-content-between">
        <a className="logo">
            <img src={require('../../Assets/img/logo.png')} />
        </a>
        <div className="header__left">
            <button className="menu-btn" onClick={() => {
                toggle(!state)
            }}>
                <animated.img style={firstAnimate} src={require('../../Assets/img/bg-button-menu.jpg')} />
                <animated.img style={secondAnimate} src={require('../../Assets/img/bg-button-menu.jpg')} />
                <animated.img style={thirstAnimate} src={require('../../Assets/img/bg-button-menu.jpg')} />
                <animated.span>{textAnimate.text}</animated.span>
            </button>
            <animated.ul style={menuAnimate} className="menu-list">
                <li><a>LỊCH CHIẾU</a></li>
                <li><a>HỆ THỐNG RẠP</a></li>
                <li><a>KHUYẾN MÃI | SỰ KIỆN</a></li>
                <li><a>DỊCH VỤ QUẢNG CÁO</a></li>
                <li><a>TUYỂN DỤNG</a></li>
                <li><a>VỀ CHÚNG TÔI</a></li>
            </animated.ul>
            <button className="c myBtn padding-10-25">
                MUA VÉ
            </button>
        </div>
        {renderRightHeader()}
        <img className="header__bottom" src={require('../../Assets/img/line-header1.png')}></img>
        <LoginForm openLogin={openLogin} setOpenLogin={setOpenLogin} />
    </div>
};
