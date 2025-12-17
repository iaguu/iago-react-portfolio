import React from "react";
import "./card.scss";

export default function Card({ children, className = "", ...rest }) {
  return (
    <section className={`card ${className}`.trim()} {...rest}>
      {children}
    </section>
  );
}
