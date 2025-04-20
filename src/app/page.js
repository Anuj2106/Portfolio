import Link from "next/link";
import Hero from "./Components/Hero";
import { Intro } from "./Components/Intro";

export default function Home() {
  return (
    <>
  
    <Hero/>
    <Intro/>
    <div className="container">
      <div className="row">
        <div className="contact-dialog text-center text-white p-4">
          <h2> Find ME ON </h2>
          <p> feel free to contact with me </p>
          <div className="social-icons d-flex justify-content-center">
            <Link href="" >
            <i className="bi bi-linkedin fs-4 " id="icon"></i>
            </Link>
            <Link href="" >
            <i className="bi bi-instagram fs-4 mx-2" id="icon"></i>
            </Link>
            <Link href="" >
            <i className="bi bi-github fs-4 me-2" id="icon"></i>
            </Link>
            <Link href="" >
            <i className="bi bi-twitter-x fs-4" id="icon"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
