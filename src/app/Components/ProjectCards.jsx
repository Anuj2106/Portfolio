import React from 'react'
import { useState,useEffect } from 'react'
const ProjectCards = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("/Api/Project")
            .then(res => res.json())
            .then(data => setProjects(data));
    }, []);
  return (
  <>
  <div className="container">
    <div className="row">
        {projects.map((project, index) => (
        <div className="col-3" key={index}>
            <div className="card bg-transparent text-light border rounded-4 p-4" 
                style={{ width: "18rem", boxShadow: "0 0 15px rgba(138,43,226,0.5)", height: "80%" }}>    

                {/* Image Container */}
                <div className="text-center mb-3">
                    <div className="rounded overflow-hidden" style={{ width: "100%", height: "150px" }}>
                        <img 
                            src={project.img} 
                            alt={project.name} 
                            className="img-fluid w-100 h-100" 
                            style={{ objectFit: "cover" }} 
                        />
                    </div>
                </div>

                <h4 className="text-center">{project.name}</h4>
                <p className="text-muted text-center">{project.description}</p>

                <div className="d-flex justify-content-center gap-3">
                    <a href="#" className="btn btn-outline-light d-flex align-items-center">
                        <i className="bi bi-github me-2"></i> GitHub
                    </a>
                    <a href="#" className="btn btn-outline-light d-flex align-items-center">
                        <i className="bi bi-box-arrow-up-right me-2"></i> Demo
                    </a>
                </div>
            </div>
        </div>
        ))}
    </div>
</div>

  
  </>
  )
}

export default ProjectCards