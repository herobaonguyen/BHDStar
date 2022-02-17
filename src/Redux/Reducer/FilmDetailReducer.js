import { FilmDetailType } from "../Type/FilmDetailType/FilmDetailType"

const stateDefaults = {
    filmDetail: {

    },
    heThongRap: [

    ],
    giaVe:0,
    maLichChieu: 45338,
}

export const FilmDetailReducer = (state=stateDefaults, action) => {
    switch (action.type) {
        case FilmDetailType.GET_FILM_DETAIL:{
            state.filmDetail = action.filmDetail
            state.heThongRap = action.filmDetail.heThongRapChieu
            const index = action.filmDetail.heThongRapChieu.findIndex((rap) => rap.maHeThongRap === 'BHDStar')
            state.giaVe = action.filmDetail.heThongRapChieu[index].cumRapChieu[0].lichChieuPhim[0].giaVe
            state.maLichChieu = action.filmDetail.heThongRapChieu[index].cumRapChieu[0].lichChieuPhim[0].maLichChieu

            return{...state}
        }
        default: return {...state}
    }
}