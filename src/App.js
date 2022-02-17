
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Router, Routes, useNavigate } from 'react-router-dom'
import { Header } from './Component/Header/Header';
import { Home } from './Page/Home/Home';
import "./Sass/Main.scss"
import { HomeTemplate } from './Template/HomeTemplate/HomeTemplate';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "swiper/css/bundle";
import { Demo } from './Component/Demo';
import { FilmDetail } from './Page/FilmDetail/FilmDetail';
import { MainTicketBooking } from './Template/TicketBookingTemplate/MainTicketBooking';
import { NumberOfSeats } from './Component/TicketBooking/NumberOfSeats/NumberOfSeats';
import { ChooseSeats } from './Component/TicketBooking/ChooseSeats/ChooseSeats';
import { ChooseFood } from './Component/TicketBooking/ChooseFood/ChooseFood';
import { ConfirmTicket } from './Component/TicketBooking/ConfirmTicket/ConfirmTicket';
import { FinalStep } from './Component/TicketBooking/FinalStep/FinalStep';

// init Swiper:





function App() {

  // const navigate = useNavigate()
  // const dispatch = useDispatch()
  // useEffect(() => [
  //   dispatch({type:'navigate',navigate})
  // ],[])


  return (
    <BrowserRouter>
      <Routes>

        <Route path=""  element={<HomeTemplate />}>
          <Route path="filmdetail/:maPhim"  element={<FilmDetail />} />
          <Route path="/"  element={<Home />} />
          <Route path="/demo"  element={<Demo />} />
          <Route path="/"  element={<MainTicketBooking />} >
            <Route path="ticketbooking/numberofseats"  element={<NumberOfSeats />} />
            <Route path="ticketbooking/chooseseats" element={<ChooseSeats/>}/>
            <Route path="ticketbooking/choosefoods" element={<ChooseFood/>}/>
            <Route path="ticketbooking/confirm" element={<ConfirmTicket/>}/>
            <Route path="ticketbooking/finalstep" element={<FinalStep/>}/>
          </Route>
        
        </Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
