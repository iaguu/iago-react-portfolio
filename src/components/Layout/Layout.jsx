import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import "./layout.scss";

export default function Layout({ children }) {
  return (
    <div className="appShell">
      <Navbar />
      <main className="appMain">
        <div className="container">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
