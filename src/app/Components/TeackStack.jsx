import { useEffect, useState } from "react";

export default function TeachStack() {
    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        fetch("/Api/language")
            .then(res => res.json())
            .then(data => setLanguages(data));
    }, []);

    return (
<>

      
        <div className="row mt-5">
            <div className="col-12 d-flex justify-content-between  ">
                {languages.map((lang, index) => (
                    <div
                    key={index}
                    className="card text-center tech-stack-card"
                    
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.1)";
                      e.currentTarget.style.boxShadow = "0px 10px 20px rgba(0, 0, 0, 0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div className="card-body">
                      <img
                        src={lang.logo}
                        alt={lang.name}
                        width="80"
                        style={{ transition: "transform 0.3s ease-in-out" }}
                      />
                      <p style={{ marginTop: "10px", fontWeight: "bold", color: "#fff" }}>
                        {lang.name}
                      </p>
                    </div>
                  </div>
                  
                ))}
            </div>
        </div>
        </>
    );
}
