import React from 'react'
import { Fragment } from "react";
import { useNavigate } from 'react-router';
function HeadPhone() {
  const navigate=useNavigate()
const handle= (buttonName) => {
  navigate(`/${buttonName}`);
  // console.log(category)
}
  return (
    <Fragment>
      <button name="HeadPhone" className='header-item-button' onClick={() => handle('HeadPhone')}>Head Phone</button>

    </Fragment>
  )
}

export default HeadPhone