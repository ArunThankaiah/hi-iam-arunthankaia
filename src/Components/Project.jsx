import { useEffect } from 'react'
import project01 from '../assets/projects/project-01.png'
import project02 from '../assets/projects/project-02.png'
import project03 from '../assets/projects/project-03.png'
import project04 from '../assets/projects/project-04.png'
import Aos from 'aos'

const Project = () => {
  useEffect(()=>{
    Aos.init({
      easing: 'ease-in-out-quart',
      delay: 0,
      duration: 750
    })
   },[])
  return (
    <div id='Projects' className='p-20 flex flex-col items-center justify-center '>
      <h1 data-aos ='fade-left' className='text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500'>Projects</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20' >
       
      {/* Project Exprense tracker 01 */}
       <div className='' >
       <p className=' text-2xl text-fuchsia-800 font-semibold mb-6' data-aos ='fade-left'>Expense Tracker</p>
       <img data-aos ='fade-up' width={300} height={300} className='text-[26px] flex items-center justify-center  rounded-3xl p-1 border-2 border-fuchsia-800 b_glow' src={project01} alt='Expense tracker' />
       <div className='grid  mt-6 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 justify-around gap-4'>
       <a href='https://github.com/ArunThankaiah/Taskmanger.git'  data-aos ='fade-right'  target='_blank' rel='noreferrer' className='hover:shadow-fuchsia-800/50 text-center text-white  border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-2 px-8 uppercase relative overflow-hidden'> 
        
        Github 
        </a>
        <a href='https://arunthankaiah.github.io/Taskmanger/'  data-aos ='fade-left' target='_blank' rel='noreferrer' className=' hover:shadow-fuchsia-800/50 text-center text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-2 px-8 uppercase relative overflow-hidden'> 
        
       Page
        </a>
       </div>
       </div>
        {/* Project Task Manager 02 */}
        <div>
        <p className='text-2xl text-fuchsia-800 font-semibold mb-6' data-aos ='fade-down'>Netflix-India</p>
        <img data-aos ='fade-down' width={300} height={300} className='text-[26px] flex items-center justify-center  rounded-3xl p-1 border-2 border-fuchsia-800 b_glow' src={project04} alt='Book stor'/>
        <div className='grid  mt-6 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 justify-around gap-4'>
       <a href='https://github.com/ArunThankaiah/netflix-india.git' data-aos ='fade-right'  target='_blank' rel='noreferrer' className='hover:shadow-fuchsia-800/50 text-center text-white  border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-2 px-8 uppercase relative overflow-hidden'> 
        
        Github
        </a>
        <a href='https://arunthankaiah.github.io/netflix-india/' data-aos ='fade-left' target='_blank' rel='noreferrer' className='hover:shadow-fuchsia-800/50 text-center text-white  border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-2 px-8 uppercase relative overflow-hidden'> 
        
       Page
        </a>
       </div>
        </div>
        {/* Project Agency Website 03 */}
        <div>
        <p className='text-2xl text-fuchsia-800 font-semibold mb-6' data-aos ='fade-right'>Agency Website</p>
        <img data-aos ='fade-up' width={300} height={300} className='text-[26px] flex items-center justify-center  rounded-3xl p-1 border-2 border-fuchsia-800 b_glow' src={project03} alt='Agency website'/>
        <div className='grid  mt-6 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 justify-around gap-4'>
       <a href='https://github.com/ArunThankaiah/agency-website.git' data-aos ='fade-right'  target='_blank' rel='noreferrer' className='hover:shadow-fuchsia-800/50 text-center text-white  border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-2 px-8 uppercase relative overflow-hidden'> 
        
        Github
        </a>
        <a href='https://arunthankaiah.github.io/agency-website/' data-aos ='fade-left' target='_blank' rel='noreferrer' className='hover:shadow-fuchsia-800/50 text-center text-white  border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-2 px-8 uppercase relative overflow-hidden'> 
        
       Page
        </a>
       </div>
        </div> 

       {/* Project Spices 04 */}
      <div>
      <p className='text-2xl text-fuchsia-800 font-semibold mb-6' data-aos ='fade-up'>Spices</p>
      <img data-aos ='fade-down' width={300} height={300} className='text-[26px] flex items-center justify-center  rounded-3xl p-1 border-2 border-fuchsia-800 b_glow' src={project02} alt='spices'/>
      <div className='grid  mt-6 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 justify-around gap-4'>
       <a href='https://github.com/ArunThankaiah/spices-html-css-bootstrap.git'  data-aos ='fade-right' rel='noreferrer'  target='_blank' className='hover:shadow-fuchsia-800/50 text-center text-white  border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-2 px-8 uppercase relative overflow-hidden'> 
        
        Github 
        </a>
        <a href='https://arunthankaiah.github.io/spices-html-css-bootstrap/'  data-aos ='fade-left' rel='noreferrer' target='_blank' className='hover:shadow-fuchsia-800/50 text-center text-white  border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-2 px-8 uppercase relative overflow-hidden'> 
        
       Page
        </a>
       </div>
      </div>

       

       
      </div>
     
    </div>
  )
}

export default Project
