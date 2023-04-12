import { Route, Routes } from "react-router-dom";
import Welcome from "./components/WelcomePage/Welcome";
import About from "./components/AboutPage/About"
import Home from "./components/Homepage/Homepage"
import Category from "./components/Category/CategoryDance"
import Kathak from "./components/kathak/Kathak"
import Navbar from "./components/Navbar and footer/Navbar";
import Favoritelist from "./components/FavoriteList/Favoritelist"
// import { link } from "fs";


function App() {

  let danceCategory = [
    {img:"../Images/kathak.jpeg", link:"/kathak" } ,
   {img:"../Images/jazzdance.jpeg", link:"/jazz"}, 
   {img:"../Images/tapdance.jpeg", link:"/tap-Dance"},
   {img:"../Images/contemporary.jpeg", link:"/contemporary"},
   {img:"../Images/hiphop.jpg", link:"/hiphop"} 
  ]

  return (
    <>
     <Navbar />
    <Routes>
       <Route path="/" element={<Welcome /> } />
       <Route path="/about" element ={<About />} />
       <Route path="/homepage" element={<Home />} />
       {/* <Route path="/category" element={<CategoryDance />} /> */}
       <Route path="/Navbar" element={<Navbar />} />
       <Route path ="/favoritelist" element={<Favoritelist />} />



       <Route path="/potrait" element={<Kathak name="Potrait" link="PLnWaXZaVfDBee0conbZOBdJfZLlDcU9im" />} />
       <Route path="/architecture" element={<Kathak name="Architecture" link="PLejnOfiq1zb8YQwUw8o6mk9Krw5-Icd_D" />} />
       <Route path="/acrylic" element={<Kathak name="Acrylic" link="PLS0YZ0hpio5Mai0JKKffaBXBEg4S_6xQk" />} />
       <Route path="/cartoon" element={<Kathak name="Cartoon-Drawing" link="PLto5a4TmMN4Ev7Z4ipkJNDNa5wcS7b5p2" />} />
       <Route path="/caricature" element={<Kathak name="Caricature-Drawing" link="PLtG4P3lq8RHEkeRGn6aFRct0kq4oDwwTa" />} />
       <Route path="/chinese" element={<Kathak name="Chinese-Food" link="PL00a0G6_TRLXzWrRKb38oDfxBa5iAq1xk" />} />
       <Route path="/vegan" element={<Kathak name="Vegan-Food" link="PLRjjXwx2PUIUyhej4Pzelz03jDgQrYRHW" />} />
       <Route path="/non-veg" element={<Kathak name="Non-Vegiterian" link="PLmNvVoj_286myrmB1o3Hgzf-RiLOmPUNy" />} />
       <Route path="/thai" element={<Kathak name="Thai-Food" link="PL1F34F04113C35AD7" />} />
       <Route path="/south-indian" element={<Kathak name="South-Indian Food" link="PLDD49B3EF5B6C48AE" />} />
       <Route path="/kathak" element={<Kathak name="Kathak" link="PLl77z0Axq7so5alsHkiTKYbrLRbxjFFgI" />} />
       <Route path="/hiphop" element={<Kathak name="Hip-Hop" link="PLV3v0Ysm26sNk2CHfNJTvJ3hweTmwQO-P" />} />
       <Route path="/tap-Dance" element={<Kathak name="Tap-Dance" link="PLtwfISBgAaVTWbsPCk6gxbL6Hd9yAF64r" />} />
       <Route path="/contemporary" element={<Kathak name="Contemporary" link="PLXSToRkLrp7KX9Ejs-uAf68NrX9IUFT0A" />} />
       <Route path="/jazz" element={<Kathak name="Jazz-Dance" link="PLF6166F725D8AA1DE" />} />

       <Route path="/homepage/dance" element={<Category heading="Dance-Categories" data={danceCategory} rec1={{img:"../Images/kathak.jpeg", link:"/kathak" } } rec2="../Images/tapdance.jpeg" rec3="../Images/contemporary.jpg" rec4="../Images/hiphop.jpg" rec5="../Images/jazzdance.jpg"/> }/>
       <Route path="/homepage/cooking" element={<Category heading="Cooking-Categories" rec1="../Images/chinese.jpeg" rec2="../Images/thaifood.jpg" rec3="../Images/nonveg.jpg" rec4="../Images/vegan.jpg" rec5="../Images/south-indian.jpeg" />} />
       <Route path="/homepage/drawing" element={<Category heading = "Painting-categories" rec1="../Images/caricature.jpeg" rec2="../Images/potrait.jpeg" rec3="../Images/cartoon.jpeg" rec4="../Images/acrylic.jpg" rec5="../Images/architecture.jpg" />} />
      </Routes>
      {/* // <Footer /> */}

      </>
  )
}
export default App


// rec1{img= "./hwyg.png" ,link to =/ueji}