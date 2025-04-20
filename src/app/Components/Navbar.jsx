import Link from "next/link";
import { useState } from "react";
import "../css/navbar.module.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeNavbar = () => {
    setIsMenuOpen(false); // This will close the navbar on mobile after a link is clicked
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark p-3">
      <div className="container border-bottom border-2 border-white">
        <Link className="navbar-brand fw-bold" href="/">
          <h3 className="fw-bolder ">Anuj Kumar</h3>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" className="nav-link active links" onClick={closeNavbar}>
                <i className="bi bi-house-door-fill"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/About" className="nav-link active links" onClick={closeNavbar}>
                <i className="bi bi-person-fill"></i> About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/Projects" className="nav-link active links" onClick={closeNavbar}>
                <i className="bi bi-cast"></i> Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/Resume" className="nav-link active links" onClick={closeNavbar}>
                <i className="bi bi-file-earmark-richtext-fill"></i> Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/Contact" className="nav-link active links" onClick={closeNavbar}>
                <i className="bi bi-telephone-fill"></i> Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
