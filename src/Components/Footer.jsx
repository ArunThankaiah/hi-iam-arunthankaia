import {AiFillGithub} from 'react-icons/ai'
import {FaInstagram, FaLinkedinIn, FaFacebookSquare} from 'react-icons/fa'



const Footer = () => {
  
  return (
    <footer className='bg-slate-800 text-white lg:px-48 px-4 py-20'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4'>
        <div className='mb-4 md:mb-0'>
          <span className='text-3xl font-semibold text-fuchsia-800 py-2 uppercase '>Logo</span>
          {/* <p className='text-[16px] my-4'>I specialize in HTML/CSS, JavaScript, React, and Node.js. My passion for coding has enabled me to quickly pick up new technologies, which makes me a valuable asset to any development team. I have a deep understanding of the development process, from design to deployment, and I am confident that I can bring a unique and valuable perspective to any project.</p> */}
        </div>
        <div>
        <h2 className='text-[22px] font-semibold text-fuchsia-800 py-2 uppercase'>Services</h2>
        <ul className='text-[16px] my-4'>
          <li className='my-2'>Web Design</li>
          <li className='my-2'>Web Development</li>
          
        </ul>
        </div>
        <div className='mb-4 md:mb-0'>
        <h2 className='text-[22px] font-semibold text-fuchsia-800 py-2 uppercase'>Contact</h2>
        <p className='text-[16px] my-4'>Email: arunchandhu120@gmail.com</p>
        <p className='text-[16px] my-4'>Phone: +91 85-47-85-7775</p>
      </div>
      <div>
        <h2 className='text-[22px] font-semibold text-fuchsia-800 py-2 uppercase'>Follow Me </h2>
        <div className='flex space-x-4'>
          
           <a className='text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out' href="https://github.com/ArunThankaiah" >
                <AiFillGithub />
            </a>
            <a className='text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out' href="https://www.linkedin.com/in/arun-thankaiah-8a6a57267/" >
                <FaLinkedinIn />
            </a>
            <a className='text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out' href="https://www.facebook.com/arun.chandhu.54" >
                <FaFacebookSquare />
            </a>
            <a className='text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out' href="https://www.instagram.com/arun_thankaiah/" >
                <FaInstagram />
            </a>
        </div>
      </div>
      </div>
      
    </footer>
  )
}

export default Footer
