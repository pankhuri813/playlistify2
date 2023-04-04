import { Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import About from "./components/About"



function App() {
  return (
    <>
    {/* // <Navbar /> */}
    <Routes>
       <Route path="/" element={<Welcome /> } />
       <Route path="/about" element ={<About />} />

      </Routes>
      {/* // <Footer /> */}

      </>
  )
}
export default App