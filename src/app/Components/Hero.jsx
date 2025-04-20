"use client";

import { useTypewriter } from 'react-simple-typewriter';

export default function Hero() {
  const [typEffect] = useTypewriter({
    words: ["Freelancer", "React Developer", "PHP Developer", "Next.js Developer"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 100,
    delaySpeed: 1000
  });

  return (
    <section className="hero-section container mt-5">
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-lg-6 col-md-12 text-white text-center text-lg-start mb-5 mb-lg-0">
          <h1 className="fw-bold">Hi There!</h1>
          <div className="d-flex flex-wrap justify-content-center justify-content-lg-start align-items-center mt-3">
            <h1 className="fw-bold m-0">I'M</h1>
            <h1 className="ms-3 hero-text fw-bold">ANUJ KUMAR</h1>
          </div>
          <h2 className=" mt-4 text-secondary">
            <span className='effect-text fw-bolder p-2'>{typEffect}</span>
          </h2>
        </div>

        {/* Image Section */}
        <div className="col-lg-6 col-md-12 text-center">
          <img
            src="/assets/image/download.png"
            alt="hero"
            className="img-fluid w-75"
            style={{ maxWidth: '350px' }}
          />
        </div>
      </div>
    </section>
  );
}
