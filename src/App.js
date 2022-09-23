import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Index from "./components/Index";
import Profile from "./components/Profile";
import Requests from "./components/Requests";
import Services from "./components/Services";
import Payments from "./components/Payments";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";

function App() {
  const [logged, setLogged] = useState(true);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/edit_profile" element={<Profile />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/services" element={<Services />} />
          <Route path="/payments" element={<Payments />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
