import React from 'react';

export const Footer = () => {
    return <footer className="footer">
        <div className="container myContainer">
            <img className="footer__logo" src={require('../../Assets/img/logo.png')} />
            <div className="row">
                <div className="col-12 col-xxl-3 col-xl-3 col-md-6 col-sm-12">
                    <div className="info-list">
                        <p className="list-name">VỀ BHD STAR</p>
                        <ul>
                            <li><a>Hệ Thống Rạp</a></li>
                            <li><a>Tuyển Dụng</a></li>
                            <li><a>Liên Hệ</a></li>
                            <li><a><img src={require('./../../Assets/img/dathongbao-1.png')} /></a></li>
                        </ul>
                    </div>
                </div>
               
                <div className="col-12 col-xxl-3 col-xl-3 col-md-6 col-sm-12">
                    <div className="info-list">
                        <p className="list-name">QUY ĐỊNH & ĐIỀU KHOẢN</p>
                        <ul>
                            <li><a>Quy Định Thành Viên</a></li>
                            <li><a>Điều Khoản</a></li>
                            <li><a>Hướng Dẫn Đặt vé Trực Tuyến</a></li>
                            <li><a>Quy Định Và Chính Sách Chung</a></li>
                            <li><a>Chính sách bảo vệ thông tin cá nhân của người tiêu dùng</a></li>

                        </ul>
                    </div>

                </div>
            </div>
        </div>

        <p className="footer__text">© 2015 BHD Star Cineplex</p>
    </footer>;
};
