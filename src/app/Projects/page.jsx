"use client";
import ProjectCards from "../Components/ProjectCards";
import React from "react";

const Project = () => {
  return (
    <>
      <section className="project-section container ">
        <div className="row">
          <div className="col-12 text-center text-white">
            <h2>My Recent Works</h2>
            <p> Here Are the few projects I've worked recently.</p>
          </div>
        </div>
 <ProjectCards /> 
      
      </section>
    </>
  );
};

export default Project;
