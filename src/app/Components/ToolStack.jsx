import { useEffect, useState } from "react";

export default function ToolStack() {
    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        fetch("/Api/Tool")
            .then(res => res.json())
            .then(data => setLanguages(data));
    }, []);

    return (
<>

      
<div className="row mt-5">
  {languages.map((lang, index) => (
    <div
      key={index}
      className="col-6 col-sm-4 col-md-3 col-lg-3 mb-4 d-flex justify-content-center"
    >
      <div
        className="card text-center tech-stack-card  border shadow-sm"
        style={{ transition: "transform 0.3s ease-in-out" }}
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
          <p
            style={{
              marginTop: "10px",
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            {lang.name}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>

        </>
    );
}
