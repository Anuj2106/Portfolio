// app/layout.js (RootLayout for App Router)

"use client";  // This tells Next.js to treat the layout as a client-side component

import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./Components/Navbar";
import { useEffect } from "react"; 
import Particles from "./Components/Particles";

export default function RootLayout({ children }) {
  useEffect(() => {
    if (typeof document !== "undefined") {
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Anuj | Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Particles /> {/* Background particle animation */}
        <div className="universal-container">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
