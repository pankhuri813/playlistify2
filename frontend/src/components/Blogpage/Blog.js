import Navbar from "../Navbar/Navbar";
import Footer from '../Footer/Footer'
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
                
            <div style={{display:"flex", flexDirection:"column"}}> 
            <img style={{height:"13em", width:"34em", marginLeft:"29em"}}className="bg-pink" src="/images/heading.png" alt=""/> 
            <p className="text-content-blog">More and more people are turning to YouTube to expand their knowledge, develop their understanding, and learn new skills. These “casual learners”—loosely defined as individuals who are curious about a topic and are self-motivated to learn more about it—are taking advantage of the ease with which nearly anyone with an internet connection, basic video skills, and something to say, can become a YouTube “creator.” However, amidst a dizzying array of videos purporting to educate or otherwise inform viewers, academic content-creators are notable by their lack of presence on the platform. Here, there are largely-untapped opportunities for academics to contribute to the richness, diversity and trustworthiness of video content available to casual learners, and to effectively mobilize their knowledge at scale. There is also a pressing need for diversity in casual learning content, including diversity in creator gender, identity, ethnicity, and perspective, and academics are uniquely positioned to address this need. </p>
            </div>
            </div>
            <div style={{overflow:"hidden"}} className="welcome-section-blog">
            <div className="welcome-box-img"><img src="https://res.cloudinary.com/dqkwom77k/image/upload/v1684433959/WhatsApp_Image_2023-05-18_at_11.47.01_PM_x4tv18.jpg" alt=""/> </div>
            <div className="welcome-box">
                 <h2 style={{marginTop:"1em", marginLeft:"1em", fontFamily:"'Ysabeau', sans-serif", color:"#9c8282", fontSize:"3em"}}>LET'S START OUR JOURNEY TOGETHER</h2>
                 <p style={{color:"#9c8282", fontSize:"1.2em", fontFamily:"Ysabeau', sans-serif", wordSpacing:"0.3em" }}> Playlistify provides a personalized and engaging learning experience <br />that allows individuals to acquire new skills with ease, <br/> through a vast collection of  curated playlists from YouTube, tailored to their specific needs. The purpose of this website is to help you find the most relevant videos for your interests and you can even organise your own personalised playlist of your choice here as well </p>
            </div>
            </div>
            <div>
                <div > <img style={{height:"30em", marginTop:"5em", marginLeft:"1em",width:"28em" }}src="https://res.cloudinary.com/dqkwom77k/image/upload/v1684432452/WhatsApp_Image_2023-05-18_at_11.20.12_PM_iwipvs.jpg" alt="" /> 
                <img  style={{height:"30em", marginTop:"5em", marginLeft:"2em", width:"28em"}} src="https://res.cloudinary.com/dqkwom77k/image/upload/v1684432491/WhatsApp_Image_2023-05-18_at_11.24.32_PM_feza5v.jpg" alt="" /> 
                <img  style={{height:"30em", marginTop:"5em", marginLeft:"3em", width:"27em"}} src="https://res.cloudinary.com/dqkwom77k/image/upload/v1684432453/WhatsApp_Image_2023-05-18_at_11.20.10_PM_auozuv.jpg" alt="" />
                </div> 
            </div>
       
          <Footer/> 
         
        </div>
    )
}
export default Blog;