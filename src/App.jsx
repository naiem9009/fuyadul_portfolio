

import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar.component.jsx";
import HomePage from "./pages/Home.page.jsx";
import Footer from "./components/Footer.component.jsx";
import PortfolioPage from "./pages/Portfolio.page.jsx";
import TestimonialPage from "./pages/Testimonial.page.jsx";

function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<Navbar />} >
              <Route index element={<HomePage />} />
              <Route path="portfolio" element={<PortfolioPage />} />
              <Route path="about-me" element={<PortfolioPage />} />
              <Route path="testimonial" element={<TestimonialPage />} />
          </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
