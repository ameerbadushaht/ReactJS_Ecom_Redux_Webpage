import React from 'react'
import { Fragment } from "react";
import { useNavigate } from 'react-router';
function Lap() {
  const navigate=useNavigate()
  const handle= (buttonName) => {
    navigate(`/${buttonName}`);
    // console.log(category)
  }
    return (
      <Fragment>
        <button name="laptop" className='header-item-button' onClick={() => handle('laptop')}>Laptop</button>
  
      </Fragment>
    )
  }

export default Lap