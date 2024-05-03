import React from 'react';
import hero_img from "../assets/images/hero_img.png";
//import { heroImg } from '../utils/images';

const Hero = () => {
 
  return (
    
    <div className='relative h-[384px] bg-cover' style={{backgroundImage:`url(${hero_img})`}}>
      <div className='container h-96 flex items-center justify-center'>
        <div className='bg-white max-w-md w-full px-8 py-6 rounded-md'>
          <h1 className='text-3xl font-bold mb-2'>Save big. Learn big.</h1>
          <p className='text-lg'>Shop our big sale for courses from $9.99. If you want to learn it, chances are we've got it. Ends Aug. 31.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero;
 
// since Tailwind CSS does not support background images via inline styles.