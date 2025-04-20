import React from 'react'
import Link from 'next/link';

const Footer = () => {
return (
 <>
    <div className="container">
        <div className="row">
            <div className="contact-dialog text-center text-white p-4">
                <h2> Find ME ON </h2>
                <p> feel free to contact with me </p>
                <div className="social-icons d-flex justify-content-center">
                    <a href="https://www.linkedin.com/in/anuj-kumar-57a514239" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-linkedin fs-4 " id="icon"></i>
                    </a>
                    <a href="https://www.instagram.com/anuj__2106?igsh=MXR2OXhpOHlnM2Z2eg==" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-instagram fs-4 mx-2" id="icon"></i>
                    </a>
                    <a href="https://github.com/Anuj2106" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github fs-4 me-2" id="icon"></i>
                    </a>
                    <a href="https://x.com/Anuj_9505" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-twitter-x fs-4" id="icon"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
 </>
)
}

export default Footer