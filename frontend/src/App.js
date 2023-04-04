import { Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";



function App() {
  return (
    <>
    {/* // <Navbar /> */}
    <Routes>
       <Route path="/" element={<Welcome /> } />

      </Routes>
      {/* // <Footer /> */}

      </>
  )
}
export default App