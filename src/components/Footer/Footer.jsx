import React from "react";
import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <div className="footer__name">Iago Barreto</div>
          <div className="footer__meta">React • Automação • Cybersecurity • Sistemas reais</div>
        </div>
        <div className="footer__right">
          <a href="https://github.com/iaguu" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/iaguu" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:iago@email.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
