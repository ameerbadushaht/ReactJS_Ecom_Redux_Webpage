import React from 'react'
import { Fragment } from "react";
import { useNavigate } from 'react-router';
function Camera() {
  const navigate=useNavigate()
const handle= (buttonName) => {
  navigate(`/${buttonName}`);
  // console.log(category)
}
  return (
    <Fragment>
      <button name="camera" className='header-item-button' onClick={() => handle('camera')}>Camera</button>

    </Fragment>
  )
}

export default Camera