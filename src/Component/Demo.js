import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'
import { NavLink } from 'react-router-dom';

export const Demo = () => {

    const [isOpen, setOpen] = useState(false)
    return <div style={{marginTop:"300px"}}>
     
            <NavLink style={{color: 'black', marginTop:"300px"}} to="ticketbooking">Link</NavLink>
    
    </div>;
};
