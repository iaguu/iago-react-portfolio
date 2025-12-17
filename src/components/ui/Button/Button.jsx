import React from "react";
import "./button.scss";

export default function Button({ as = "button", variant = "primary", className = "", ...props }) {
  const Comp = as;
  return <Comp className={`btn btn--${variant} ${className}`.trim()} {...props} />;
}
