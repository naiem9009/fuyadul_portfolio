

import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar.component.jsx";
import HomePage from "./pages/Home.page.jsx";
import Footer from "./components/Footer.component.jsx";

function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<Navbar />} >
              <Route index element={<HomePage />} />
          </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
