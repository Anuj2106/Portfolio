"use client";

import { useTypewriter } from 'react-simple-typewriter'
export default function Hero() {
  const[typEffect]=useTypewriter({
    words: [ "Freelancer","React Developer","PHP Developer","Next js Developer"],
    loop:{},
    typeSpeed:100,
    deleteSpeed:100,
delaySpeed:1000

})

  return (
    <>
    <section className="hero-section container  mt-5 ">
<div className="row">
    <div className="col-6 text-start text-white mt-5">
        <h1>
            Hi There!
        </h1>
        <div className=" d-flex justify-content-start mt-3">
        <h1 >  I'M </h1>
        <h1 className='ms-3  hero-text'> ANUJ KUMAR </h1>
        </div>
        <h1 className='hero-text mt-3'>
            {typEffect}
        </h1>
    </div>
    <div className="col-6 text-start">
        <img src="/assets/image/download.png" alt="hero" className="img-fluid w-75"  />
    </div>
</div>
    </section>
    </>
    
  );
}
