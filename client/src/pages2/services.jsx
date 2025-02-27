import React from 'react';
import {motion} from 'motion/react'
import { useAuth } from "../store/auth"
import Footer from '../components/Footer';
import '../App.css'

const Services = () => {
 
  const { services } = useAuth();
  
  return (
    <>
    <div>
    <main className='flex-grow'>
    <motion.section initial={{opacity:0}} animate={{opacity:10}} transition={{duration:1}} >
    <div className="container p-3">
    <h1 className='text-7xl markazi-text-small  '>services</h1>
   </div>

    <div className="container  w-screen h-screen justify-center gap-4 sm:ms-0 align-middle grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
  {services.length == 0
          ? ""
          : services.map((curElem,index)=>{
    const {price,description,provider,name,img} = curElem;
    return(<>
    <div className="card p-2" key={index}>
      <div className="cardimg w-full h-64">
      <img className='w-full h-full object-cover' src={img} alt="" />
     </div>
       <div className="card-details">
        <div className="grid grid-cols-2">
          <p className='text-[10px]'>{provider}</p>
          <p className='text-sm'>{price}</p>
        </div>
        <h2 className='text-xl'>{name}</h2>
        <p>{description}</p>
       </div>
      </div>
     </> )
  })}
    </div>
    </motion.section>
    </main>
     </div>
    </>
  );
}

export default Services;
