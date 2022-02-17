import React from 'react';
import { useSelector } from 'react-redux';
import { Carousel } from '../../Component/Carousel/Carousel';
import { SpecialBanner } from '../../Component/SpecialBanner/SpecialBanner';
import { ViewFilm } from '../../Component/ViewFilm/ViewFilm';

export const Home = () => {

  

  return <div style={{marginTop:'75px'}}>
    <Carousel/>
   
    <ViewFilm/>

    <SpecialBanner/>
  </div>
};
