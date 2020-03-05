import React from "react";
import { string, func } from "prop-types";

export default function Button({ label = "", onclick = Function.prototype }) {
  const handleClick = e => {
    if (e) e.preventDefault();
    onclick();
  };

  return <button onClick={handleClick}>{label}</button>;
}

Button.prototype = {
  label: string,
  onClick: func
};
