import React, { useState, useEffect } from 'react';

const ProjectCards = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/Api/Project")
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <div className="container py-5">
      <div className="row g-4">
        {projects.map((project, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
            <div
              className="card bg-transparent text-light border rounded-4 h-100 p-3"
              style={{ boxShadow: "0 0 15px rgba(138,43,226,0.5)" }}
            >
              {/* Image */}
              <div
                className="rounded overflow-hidden mb-3"
                style={{ width: "100%", height: "160px" }}
              >
                <img
                  src={project.img}
                  alt={project.name}
                  className="img-fluid w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Title & Description */}
              <h5 className="text-center fw-bold">{project.name}</h5>
              <p className=" text-center small">{project.description}</p>

              {/* Buttons */}
              <div className="d-flex justify-content-center gap-2 mt-auto">
                <a
                  href={project.github || "#"}
                  className="btn btn-outline-light btn-sm d-flex align-items-center"
                  target="_blank" rel="noopener noreferrer"
                >
                  <i className="bi bi-github me-2"></i> GitHub
                </a>
                <a
                  href={project.demo || "#"}
                  className="btn btn-outline-light btn-sm d-flex align-items-center"
                  target="_blank" rel="noopener noreferrer"
                >
                  <i className="bi bi-box-arrow-up-right me-2"></i> Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCards;
