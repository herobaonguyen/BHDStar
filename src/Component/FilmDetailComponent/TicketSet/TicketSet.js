import React from 'react';
import { useSelector } from 'react-redux';
import { FilmShowtimes } from '../FilmShowtimes/FilmShowtimes';


const date = new Date();
const weekDay = ['Chủ Nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7']


export const TicketSet = () => {

    const { heThongRap } = useSelector(state => state.FilmDetailReducer)

    const rap = heThongRap ? heThongRap.find((rap) => {
        return rap.maHeThongRap === 'BHDStar'
    }): {}

    const cumRapChieu = rap ? rap.cumRapChieu : []



    const renderWeekDay = () => {
        let nodeItems = []
        let currentDay = date.getDay()
        let autoDate = new Date()
        for (let i = 0; i < 10; i++) {
            if (currentDay == 7)
                currentDay = 0

            if(autoDate.getDate() === date.getDate())  {
                nodeItems.push(
                    <li key={i} className='date-active'>
                        <p style={{textAlign:'center'}}>{weekDay[currentDay]}</p>
                        <p style={{textAlign:'center'}}>{autoDate.toISOString().slice(5, 10)}</p>
                    </li>)
            } 
            else nodeItems.push(
                <li key={i}>
                    <p style={{textAlign:'center'}}>{weekDay[currentDay]}</p>
                    <p style={{textAlign:'center'}}>{autoDate.toISOString().slice(5, 10)}</p>
                </li>)
  
            autoDate = new Date(autoDate.setDate(date.getDate() + 1))
            currentDay = currentDay + 1

        }

        return nodeItems
    }

    const renderCumRap = () => {
        return cumRapChieu.map((rap,index) => (
            <FilmShowtimes key={index} rap={rap}/>
        ))
    }

    return <div id="ticket-set" className="ticket-set">
        <h2 className="ticket-set__header">VUI LÒNG CHỌN THÔNG TIN VÉ</h2>
        <div className="pick-day">
            <ul>

                {renderWeekDay()}
            </ul>
        </div>
        <div className="choose-time">
            {renderCumRap()}
        </div>
    </div>
};
