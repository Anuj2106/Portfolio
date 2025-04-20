"use client";
import React from 'react'
import Skills from '../Components/Skills'
import './about.module.css'
import ToolStack from '../Components/ToolStack'


const About = () => {
  return (
   <>
   <section className='about-section container '>

  
   <div className="container mt-5">
    <div className="row text-white">
      <h1> Know Who I'M</h1>
<div className="col-lg-6 col-md-12">
<h1>Hi Everyone, I am Anuj!</h1>
        <p>I am from  Chandigarh, India </p>
        <p>I have experience in React.js, Next.js, PHP, and MySQL, and I enjoy building scalable web applications.</p>

        <p>Apart from coding, some other activities that I love to do:</p>
        <ul className='list-unstyled '>
            <li> 👉Exploring new technologies</li>
            <li className='my-3'> 👉Play Basketball</li>
            <li> 👉Traveling and discovering new places</li>
        </ul>

        <p className="quote col-12">"Code. Create. Innovate."</p>
</div>
<div className="col-lg-6 col-md-12 ">
<img src="/assets/image/about.png" alt="intro" className="img-fluid" />
</div>

    </div>
   </div>
   <Skills/>
  
   <ToolStack/>
   </section>
   </>
  )
}

export default About