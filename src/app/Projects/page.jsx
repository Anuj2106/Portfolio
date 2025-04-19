"use client";
import ProjectCards from "../Components/ProjectCards";
import React from "react";

const Project = () => {
  return (
    <>
      <section className="project-section container mt-4">
        <div className="row">
          <div className="col-12 text-center text-white">
            <h2>My Recent Works</h2>
            <p> Here Are the few projects I've worked recently.</p>
          </div>
        </div>
 <ProjectCards /> 
        {/* <div className="row mt-5">
          <div
            className="card bg-transparent text-light border rounded-4 p-4"
            style={{
              width: "22rem",
              boxShadow: "0 0 15px rgba(138,43,226,0.5)",
            }}
          >
            <div className="text-center mb-3">
              <img
                src="/project-image.png"
                alt="Chatify"
                className="img-fluid rounded"
              />
            </div>
            <h4 className="text-center">Chatify</h4>
            <p className="text-muted text-center">
              Personal Chat Room or Workspace to share resources and hang out
              with friends, built with React.js, Material-UI, and Firebase.
              Features real-time messaging, image sharing, and reactions on
              messages.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <a
                href="#"
                className="btn btn-outline-light d-flex align-items-center"
              >
                <i className="bi bi-github me-2"></i> GitHub
              </a>
              <a
                href="#"
                className="btn btn-outline-light d-flex align-items-center"
              >
                <i className="bi bi-box-arrow-up-right me-2"></i> Demo
              </a>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default Project;
