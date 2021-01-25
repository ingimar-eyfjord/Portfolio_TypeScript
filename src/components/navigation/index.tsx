import React from "react";

interface onNavClick {
  onNavClick: (e: string) => void;
}

export default function Navigation(props: onNavClick): JSX.Element {
  return (
    <nav>
      <ul>
        <li
          onClick={() => {
            props.onNavClick("Home");
          }}
        >
          Home
        </li>
        <li
          onClick={() => {
            props.onNavClick("Work");
          }}
        >
          Work
        </li>
        <li
          onClick={() => {
            props.onNavClick("Projects");
          }}
        >
          Projects
        </li>
        <li
          onClick={() => {
            props.onNavClick("About");
          }}
        >
          About
        </li>
      </ul>
    </nav>
  );
}
