import { useEffect, useState } from "react"
import {BallTriangle} from 'react-loader-spinner'
import About from "./Components/About"
import Banner from "./Components/Banner"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Nav from "./Components/Nav"
import Project from "./Components/Project"
import Skills from "./Components/Skills"


const App = () => {
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 1000)
  },[])

  return (
   <>
   {
    loading ? 
    <div className="bg-slate-900 h-[100vh] flex justify-center items-center">
      <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#d946ef"
  ariaLabel="ball-triangle-loading"
  wrapperClass={{}}
  wrapperStyle=""
  visible={true}
/>
    </div>
    :
    <div className="bg-slate-900">
    <Nav/>
    <Banner/>
    <About/>
    <Skills/>
    <Project/>
    <Contact/>
    <Footer/>
  </div>
   }
   </>
  )
}

export default App
