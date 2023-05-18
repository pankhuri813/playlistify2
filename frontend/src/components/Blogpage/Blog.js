import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import './Blog.css'

const Blog = () => {
    return(
        <div>
            <Navbar />
            <div className="blog-herosection">
                <div className="gif">
                    <img className="img-gif" src="https://res.cloudinary.com/dqkwom77k/image/upload/v1684431809/unnamed_mveape.gif" alt=""/>
                    <div className="blog-text"> 
                    <h3 className="blogtext-heading">BENEFITS OF USING YOUTUBE </h3> 
                    <p className="blog-content"> Availability of free, high-quality, and informative videos online on platforms like YouTube are an intuitive addition to modern learning environments. Educators, students, and parents all agree on the effectiveness of online videos as a teaching-learning tool. The best thing about YouTube videos is that they can easily be integrated into a variety of educational systems especially online education. Video-assisted learning is a new trend in the education industry as it provides students an interesting way to learn and understand complex concepts and subjects.</p>
                 <button className="blog-button" onClick={()=> window.open('https://web.asu.edu/newblog/benefits-using-youtube-your-online-education')}> Check Out </button>
                    </div>
                    </div>
                
            </div>
            <div className="blog-middlesection">
            <div> 
                <img src="https://res.cloudinary.com/dqkwom77k/image/upload/v1684432453/WhatsApp_Image_2023-05-18_at_11.20.10_PM_auozuv.jpg" alt="" /> 
               <h3> hoefer </h3>
                <p>lorem ki ma ka bhosda behnchod hata jegfugkaweuv</p></div>
            <div> 
                <img src="https://res.cloudinary.com/dqkwom77k/image/upload/v1684432491/WhatsApp_Image_2023-05-18_at_11.24.32_PM_feza5v.jpg" alt="" /> 
                <h3> hevfe </h3>
                <p> lorem ki ma ka bhosda behnchod hata jegfugkaweuv </p>
                </div>
            <div> 
                <img src="https://res.cloudinary.com/dqkwom77k/image/upload/v1684432452/WhatsApp_Image_2023-05-18_at_11.20.12_PM_iwipvs.jpg" alt="" />
                <h3> kjieuhfgy</h3>
                <p> bwyfduwyFKJEGFUEILVHBYUBGEFYUGKRFGAGHvrfncufgrf</p>
                </div>
            </div>
        </div>
    )
}
export default Blog;