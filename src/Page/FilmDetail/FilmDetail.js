import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FilmInfo } from '../../Component/FilmDetailComponent/FilmInfo/FilmInfo';
import { TicketSet } from '../../Component/FilmDetailComponent/TicketSet/TicketSet';

import { SagaType } from '../../Redux/Saga/SagaType/SagaType';

export const FilmDetail = () => {

    const params = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({
            type: SagaType.GET_FILM_DETAIL_API,
            maPhim: params.maPhim
        })
    },[])

  return <div className="film-detail-container">
    <FilmInfo/> 
    <TicketSet/>
  </div>;
};
