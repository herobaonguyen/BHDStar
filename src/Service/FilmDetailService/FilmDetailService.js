import axios from "axios";
import { APIDOMAIN } from "../../Util/Constant";

export const FilmDetailService = {
    GetFilmDetailAPI: (maPhim) => (
        axios({
            url: `${APIDOMAIN}/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
            method: 'GET',
        })
    )
}