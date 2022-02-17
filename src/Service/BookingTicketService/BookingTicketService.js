import axios from "axios";
import { APIDOMAIN } from "../../Util/Constant";

export const BookingTicketService = {
    getSeatList: (maLichChieu) => (
        axios({
            url: `${APIDOMAIN}/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
            method: 'GET'
        })
    )
}