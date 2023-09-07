import React from "react";
import { Fragment } from "react";
import { useNavigate } from 'react-router';
function Phone() {
  const navigate=useNavigate()
const handle= (buttonName) => {
  navigate(`/${buttonName}`);
  // console.log(category)
}
  return (
    <Fragment>
      <button name="Phone" className='header-item-button' onClick={() => handle('Phone')}>Phone</button>

    </Fragment>
  )
}

export default Phone;
