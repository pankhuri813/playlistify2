import { Route, Routes } from "react-router-dom";
import Welcome from "./components/WelcomePage/Welcome";
import About from "./components/AboutPage/About"
import Home from "./components/Homepage/Homepage"
import CategoryDance from "./components/Category/CategoryDance"
import Kathak from "./components/kathak/Kathak"
import Navbar from "./components/Navbar and footer/Navbar";
import Favoritelist from "./components/FavoriteList/Favoritelist"


function App() {
  return (
    <>
     <Navbar />
    <Routes>
       <Route path="/" element={<Welcome /> } />
       <Route path="/about" element ={<About />} />
       <Route path="/homepage" element={<Home />} />
       <Route path="/category" element={<CategoryDance />} />
       <Route path="/kathak" element={<Kathak />} />
       <Route path="/Navbar" element={<Navbar />} />
       <Route path ="/favoritelist" element={<Favoritelist />} />
      </Routes>
      {/* // <Footer /> */}

      </>
  )
}
export default App