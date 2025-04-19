import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
Link

const Resume = () => {
  const pdf="/assets/Pdf/Resume.pdf";
    return (
        <div className="container mt-4">
          <div className="col-12 text-center">
            <Link href={pdf} target="_blank" download>
            <button className="text-center btn btn-primary  mb-4">Resume</button>
            </Link>
          </div>
            <div className="resume-container bg-white p-4 rounded shadow">
                <div className="text-center mb-4">
                    <h2>Anuj Kumar</h2>
                    <p>2669-A Sector 27-C, Chandigarh | +91 8968751655 | cseanuj9505@gmail.com</p>
                </div>
                
                <h4 className="section-title border-bottom pb-2 mb-3 text-primary">Career Objective</h4>
                <p>To secure a challenging position in a growing organization where I can utilize my skills to the fullest and contribute to the success of the organization.</p>
                
                <h4 className="section-title border-bottom pb-2 mb-3 text-primary">Educational Qualifications</h4>
                <ul>
                    <li><strong>B.C.A</strong> - Lovely Professional University (2021-2025)</li>
                    <li><strong>Diploma (C.S.E)</strong> - Chandigarh College of Engineering and Technology, Punjab State Board (2020-2023)</li>
                    <li><strong>10th</strong> - Kendriya Vidyalaya, Chandigarh (CBSE, 2019-2020)</li>
                </ul>
                
                <h4 className="section-title border-bottom pb-2 mb-3 text-primary">Technical Skills</h4>
                <ul>
                    <li><strong>Operating Systems:</strong> Windows 10, 8, 7, XP, 11</li>
                    <li><strong>Languages:</strong> HTML, CSS, JavaScript, React.js, PHP, Bootstrap</li>
                    <li><strong>Database:</strong> MySQL</li>
                    <li><strong>Other Interests:</strong> WordPress, Python, Laravel</li>
                </ul>
                
                <h4 className="section-title border-bottom pb-2 mb-3 text-primary">Projects</h4>
                <ul>
                    <li><strong>Amazon Clone</strong> - Built an e-commerce site using React.js and Firebase.</li>
                    <li><strong>Attendance Management System</strong> - Developed using Laravel and PHP for student attendance tracking.</li>
                </ul>
                
                <h4 className="section-title border-bottom pb-2 mb-3 text-primary">Industrial Training</h4>
                <ul>
                    <li>6-week industrial training on React.js at Infowiz Software Solution, Chandigarh.</li>
                </ul>
                
                <h4 className="section-title border-bottom pb-2 mb-3 text-primary">Interpersonal Skills</h4>
                <ul>
                    <li>Disciplined and hardworking</li>
                    <li>Adaptable to changing work environments</li>
                    <li>Strong team player</li>
                    <li>Quick learner</li>
                </ul>
                
                <h4 className="section-title border-bottom pb-2 mb-3 text-primary">Hobbies & Interests</h4>
                <ul>
                    <li>Listening to Music</li>
                    <li>Physical Activities</li>
                </ul>
                
                <h4 className="section-title border-bottom pb-2 mb-3 text-primary">Personal Information</h4>
                <ul>
                    <li><strong>Date of Birth:</strong> 22 October 2004</li>
                    <li><strong>Gender:</strong> Male</li>
                    <li><strong>Languages Known:</strong> English, Hindi, Punjabi</li>
                    <li><strong>Address:</strong> 2669-A, Sector 27-C, Chandigarh, India</li>
                    <li><strong>Pin Code:</strong> 160019</li>
                </ul>
                
                <h4 className="section-title border-bottom pb-2 mb-3 text-primary">Declaration</h4>
                <p>I hereby declare that the above information is true to the best of my knowledge.</p>
                <p><strong>Signature:</strong> Anuj Kumar</p>
            </div>
        </div>
    );
};

export default Resume;
