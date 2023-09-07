import React, { Fragment } from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Laptop from './pages/Laptop'
import Phone from './pages/Mobile'
import CameraPage from './pages/CameraPage'
import Headphone from './pages/Headphone'


function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/laptop"} element={<Laptop/>} />
          <Route path={"/phone"} element={<Phone />} />
          <Route path="/camera" element={<CameraPage />} />
          <Route path={"/headphone"} element={<Headphone />} />
        </Routes>
      </Router>
    </Fragment>
  )
}

export default App
