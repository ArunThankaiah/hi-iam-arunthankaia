import {AiFillGithub} from 'react-icons/ai'
import {FaInstagram, FaLinkedinIn,FaFacebookSquare} from 'react-icons/fa'
import img01 from '../assets/img01.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const Banner = () => {
 useEffect(()=>{
  Aos.init({
    easing: 'ease-in-out-quart',
    delay: 0,
    duration: 750
  })
 },[])
  return (
    <div id='Home'  className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
      <h2 className='lg:mt-4'>Hello,<span className="text-fuchsia-500"> It's Me</span></h2>
      <h1 data-aos = "fade-right" className="text-[52px] font-semibold mb-0 leading-normal">Arun Thankaiah </h1>
      <span className="text-fuchsia-500">Full Stack Web Developer</span>
       <p data-aos = "fade-left" className='text-center lg:text-start mt-4'>As a full stack web developer, I have a passion for creating engaging, responsive, and user-friendly. I have worked with both front-end and back-end technologies to develop web applications that are both aesthetically pleasing and highly functional. </p>
        <div className="flex mt-8 gap-2">
            <div className="flex items-center justify-center">
                <div className="flex space-x-2">
                    <a href="https://github.com/ArunThankaiah" target='_blank' className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                        <AiFillGithub className='text-[28px]'/>
                    </a>
                    <a href="https://www.linkedin.com/in/arun-thankaiah-8a6a57267/" target='_blank' className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                        <FaLinkedinIn className='text-[28px]'/>
                    </a>
                    <a href="https://www.facebook.com/arun.chandhu.54" target='_blank' className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                        <FaFacebookSquare className='text-[28px]'/>
                    </a>
                    <a href="https://www.instagram.com/arun_thankaiah/" target='_blank' className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2 ">
                        <FaInstagram className='text-[28px]'/>
                    </a>
                    
                </div>
            </div>
        </div>
      </div>
      <img data-aos = "fade-up" src={img01} width={290} className='rounded-full border-2 p-1 border-fuchsia-500 img_glow' alt=''/>
    </div>
  )
}

export default Banner
