import React, { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./navbar.scss";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [location.pathname]);

  const links = useMemo(
    () => [
      { to: "/", label: "Início" },
      { to: "/projetos", label: "Projetos" },
      { to: "/sobre", label: "Sobre" },
      { to: "/contato", label: "Contato" },
    ],
    []
  );

  return (
    <header className="navBar">
      <div className="container navBar__inner">
        <div className="brand">
          <div className="brand__mark" aria-hidden="true" />
          <div className="brand__text">
            <div className="brand__name">Iago Barreto</div>
            <div className="brand__role">Dev • Automação • Cyber</div>
          </div>
        </div>

        <nav className={open ? "navLinks navLinks--open" : "navLinks"} aria-label="Navegação principal">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => (isActive ? "navLink navLink--active" : "navLink")}
              end={l.to === "/"}
            >
              {l.label}
            </NavLink>
          ))}
          <a className="navCta" href="https://github.com/iaguu" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>

        <button
          className={open ? "navBurger navBurger--open" : "navBurger"}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
