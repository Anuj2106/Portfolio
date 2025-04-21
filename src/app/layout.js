// app/layout.js (RootLayout for App Router)

"use client";  // This tells Next.js to treat the layout as a client-side component

import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./Components/Navbar";
import { useEffect } from "react"; 
import Particles from "./Components/Particles";
import SEOHead from "./Components/Seohead";


export default function RootLayout({ children }) {
  useEffect(() => {
    if (typeof document !== "undefined") {
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
  }, []);

  return (
    <html lang="en">
      
     <SEOHead />
      <body>
        <Particles /> {/* Background particle animation */}
          <Navbar />
        <div className="universal-container">
          <main >{children}</main>
        </div>
      </body>
    </html>
  );
}
