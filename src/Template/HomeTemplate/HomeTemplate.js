import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../../Component/Footer/Footer';
import { Header } from '../../Component/Header/Header';
import { Loading } from '../../Component/Loading/Loading';
import { ToastContainer } from 'react-toastify';



export const HomeTemplate = () => {

  
  return <>
    <ToastContainer />
    <Loading/>
    <Header/>
    <Outlet/>
    <Footer/>
  </>
};
