import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../component/views/Homepage";
import Contact from "../component/views/Contact";
import Portfolio from "../component/views/Portfolio";
import Services from "../component/views/Services";
import Resumecv from "../component/views/Resumecv";


function MyRoutes() {
  return (      
        
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resumecv" element={<Resumecv />} />
        </Routes>
  
  )
}

export default MyRoutes