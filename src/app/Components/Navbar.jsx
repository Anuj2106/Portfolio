import Link from "next/link";
import "../css/navbar.module.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  p-3">
      <div className="container border-bottom   border-2">
        <Link className="navbar-brand fw-bold " href="/">
         <h3 className="fw-bolder"> Anuj Kumar
            </h3>  
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-end bg-dark text-white"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link- active links" href="/">
                <i className="bi bi-house-door-fill"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link-active links  " href="/About">
                <i className="bi bi-person-fill"></i>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link-active links" href="/Projects">
                <i className="bi bi-cast"></i>
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link-active links" href="/Resume">
                <i className="bi bi-file-earmark-richtext-fill"></i>
                  Resume
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link-active links" href="/contact">
                <i className="bi bi-telephone-fill"></i>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
