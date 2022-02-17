import axios from 'axios'
import { APIDOMAIN } from '../../Util/Constant'

export const HomeService = {
    getBannerAPI: () => (
        axios({
            url:`${APIDOMAIN}/QuanLyPhim/LayDanhSachBanner`,
            method: 'GET',
        })
    ),

    getFilmReviewsAPI: () => (
        axios({
            url:`${APIDOMAIN}/QuanLyPhim/LayDanhSachPhim?maNhom=GP03`,
            method: 'GET',
        })
    ),
    loginAPI: (userLogin) => (
        axios({
            url:`${APIDOMAIN}/QuanLyNguoiDung/DangNhap`,
            method: 'POST',
            data:userLogin
        })
    )
}