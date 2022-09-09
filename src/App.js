import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Index from "./components/Index";
import Profile from "./components/Profile";
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
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
