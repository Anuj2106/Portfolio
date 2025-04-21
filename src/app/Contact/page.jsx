"use client";
import React from 'react'

const Contact = () => {
  return (
    <>
    <div className="container contact-section">
  <div className="row justify-content-center">
    <div className="col-md-8 col-lg-6">
      <div className="card shadow rounded-4 border-0 bg-transparent text-light">
        <div className="card-body p-4">
          <h2 className="text-center mb-4">Contact Us</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100 rounded-pill">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  
  )
}

export default Contact