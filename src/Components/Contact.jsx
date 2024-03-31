import Aos from 'aos'
import React, { useEffect } from 'react'

const Contact = () => {
  useEffect(()=>{
    Aos.init({
      easing: 'ease-in-out-quart',
      delay: 0,
      duration: 750
    })
   },[])
  return (
    <div id='Contact' className='p-4 lg:p-20 flex flex-col items-center justify-center '>
      <h1 data-aos ='fade-down' className='text-[52px] font-semibold mb-12 leading-normal uppercase text-fuchsia-500'>Contact Me</h1>
      <form action=''className='flex flex-col gap-2 lg:w-1/2'>
          <div className='lg:flex gap-6'>
            <input data-aos ='fade-right' className='w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-2 border-2 border-fuchsia-800 b_glow text-xl text-slate-500' placeholder='Enter Your Name ' type='text'/>
            <input data-aos ='fade-left' className='w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-2 border-2 border-fuchsia-800 b_glow text-xl text-slate-500' placeholder='Enter Your Email ' type='email'/>
          </div>
          <textarea data-aos ='fade-up' className='w-full my-3 rounded-lg bg-slate-800 p-2 border-2 border-fuchsia-800 b_glow text-xl text-slate-500' placeholder='Write Your Message.... ' name='' id='' cols="20" rows="10"/>
          <button data-aos = "fade-up" className='neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 border-fuchsia-800 bg-fuchsia-800 hover:bg-slate-900 rounded-lg py-4 px-8 my-6 uppercase relative overflow-hidden b_glow text-xl font-semibold ' type='submit'>Send Me</button>
      </form>
    </div>
  )
}

export default Contact
