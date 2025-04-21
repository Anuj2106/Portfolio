import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
Link

const Resume = () => {
  const pdf="/assets/Pdf/Resume.pdf";
    return (
      <section className="resume-section ">
        <div className="container mt-4">
          <div className="col-12 text-center">
            <Link href={pdf} target="_blank" download>
            <button className="text-center btn btn-primary  mb-4">Download </button>
            </Link>
          </div>
          <div className="resume-container p-4 rounded ">
  <div className="text-center mb-4">
    <h2>Anuj Kumar</h2>
    <p>📍Chandigarh |   📧 cseanuj9505@gmail.com</p>
  </div>

  <h4 className="section-title text-primary border-bottom pb-2 mb-3">Career Objective</h4>
  <p>
    To secure a challenging role in a growth-driven organization where I can apply my skills and contribute to team success.
  </p>

  <h4 className="section-title text-primary border-bottom pb-2 mb-3">Education</h4>
  <ul>
    <li><strong>B.C.A</strong>, Lovely Professional University (2021–2025)</li>
    <li><strong>Diploma in CSE</strong>, CCET, Punjab Board (2020–2023)</li>
    <li><strong>10th</strong>, Kendriya Vidyalaya, CBSE (2019–2020)</li>
  </ul>

  <h4 className="section-title text-primary border-bottom pb-2 mb-3">Technical Skills</h4>
  <ul>
    <li><strong>Languages:</strong> HTML, CSS, JavaScript, PHP, React.js</li>
    <li><strong>Frameworks & Tools:</strong> Bootstrap, Laravel, WordPress</li>
    <li><strong>Database:</strong> MySQL</li>
    <li><strong>Others:</strong> Python, Git, Windows OS</li>
  </ul>

  <h4 className="section-title text-primary border-bottom pb-2 mb-3">Projects</h4>
  <ul>
    <li><strong>Amazon Clone:</strong> E-commerce site using React.js & Firebase</li>
    <li><strong>Attendance Management:</strong> Built with Laravel and PHP</li>
  </ul>

  <h4 className="section-title text-primary border-bottom pb-2 mb-3">Training</h4>
  <p>6-week training on React.js at Infowiz Software Solutions, Chandigarh</p>

  <h4 className="section-title text-primary border-bottom pb-2 mb-3">Strengths</h4>
  <ul className="mb-2">
    <li>Quick Learner & Adaptable</li>
    <li>Team Player</li>
    <li>Disciplined & Hardworking</li>
  </ul>

  <h4 className="section-title text-primary border-bottom pb-2 mb-3">Hobbies</h4>
  <p>Listening to Music, Fitness & Outdoor Activities</p>



</div>

        </div>
        </section>
    );
};

export default Resume;
