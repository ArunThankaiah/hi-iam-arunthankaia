
import { useEffect } from 'react'
import img02 from '../assets/img02.png'
import Aos from 'aos'
const About = () => {
  useEffect(()=>{
    Aos.init({
      easing: 'ease-in-out-quart',
      delay: 0,
      duration: 750
    })
   },[])
  return (
    
      
      <div id='About' className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center">
        <img  data-aos = "fade-down" src={img02} width={290} className='rounded border-2 p-1 border-fuchsia-500 img_glow' alt=''/>
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1  data-aos = "fade-right" className="text-[52px] font-semibold mb-8 leading-normal text-fuchsia-500 uppercase">ABOUT ME</h1>
        <p  data-aos = "fade-left" className='text-center lg:text-start'>I am always amazed at the endless possibilities that technology has to offer. Not only do I get to work with the latest development tools and frameworks, but I also get to use my creativity to build and deploy websites and applications that are both functional and visually appealing. One of the most rewarding aspects of learning web development is that I am constantly challenged to come up with new solutions to problems. I love being able to work with a team of developers to create something that is both user-friendly and innovative. I am also grateful for the opportunity to gain new skills and knowledge that I can use to help others. Being a full stack web developer learner gives me the opportunity to be part of something bigger than myself and to make a difference in the world. At the end of the day, I am constantly learning and growing as a developer. I am excited to see what the future holds for me and for the web development industry as a whole.</p>
        <div className="flex mt-8 gap-2">
            <div className="flex items-center justify-center">
                <div className="flex space-x-2">
                    <a href="https://drive.google.com/file/d/1o2IBnVp6ub5Qfbf6DDj5JeD_EWuLGNPv/view?usp=drive_link" target='_blank' className='neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden'>Download CV</a>
                    
                </div>
            </div>
        </div>
      </div>
      
   
    </div>
  )
}

export default About
