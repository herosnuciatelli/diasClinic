import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/home/Index";
import Services from '../../pages/Services'
import NotFound from "../../pages/NotFound";
import React from 'react'

const RoutesConfig = () => {

  return (
    <Router>
        <Routes>
            <Route path="/" element= { <Home />} />
            <Route path="services" element = { <Services /> } />
            <Route path="*" element={<NotFound />}/>
        </Routes>
    </Router>
  )
}

export default RoutesConfig;