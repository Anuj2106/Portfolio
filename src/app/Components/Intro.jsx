import React from 'react'


export const Intro = () => {
  return (
   <>
   


    <section className='introduction container mt-5'>
            <div className="introduction-header d-flex justify-content-center text-white mt-5">
        <h1 >Let ME </h1>
        <h1 className='mx-3 hero-text'> INTRODUCE </h1>
        <h1> Myself</h1>
            </div>
    <div className='row justify-content-center mt-5'>
        <div className=" col-12 col-md-8 col-lg-6 text-white fs-1">
        <p>I fell in love with web development, and along the way, I’ve learned a lot... I think. 🤷‍♂️</p>
        <p>I am fluent in technologies like <strong>JavaScript, PHP, and MySQL</strong>.</p>
        <p>My field of interest is building innovative <strong>web applications and scalable products</strong>.</p>
        <p>Whenever possible, I love developing applications using <strong>Node.js</strong> and modern JavaScript frameworks like <strong>React.js and Next.js</strong>.</p>
        </div>

        <div className="col-12 col-md-8 col-lg-6 text-center">
            <img src="/assets/image/avatar.png" alt="intro" className="img-fluid" />
        </div>
        </div>

    </section>
   </>
  )
}
