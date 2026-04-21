import Navbarr from "./Components/Navbar/Navbarr"
import Headersection from "./Components/HeaderSection/Headersection"
import Categories from "./Components/Categories/Categories"
import TrendNow from "./Components/TrendNow/TrendNow"
import ComboOffer from "./Components/ComboOffer/ComboOffer"
import Menudisplay from "./Components/Menudisplay/Menudisplay"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cart from "./Components/Addtocart/Cart"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Footer from "./Components/Footer/Footer"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Signin from "./Components/Signin/Signin"
import Checkout from "./Components/Checkout/Checkout"
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbarr />
        <Routes>
          <Route path='/' element={<>
            <Headersection /> <Categories /> <TrendNow /> <ComboOffer /> <Footer />
          </>} />
          <Route path='/menu' element={<Menudisplay />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>


        {/* <Headersection />
        <Categories />
        <TrendNow />
        <ComboOffer /> */}
        {/* <Menudisplay /> */}
      </BrowserRouter>
      <ToastContainer />

    </>
  )
}
export default App
