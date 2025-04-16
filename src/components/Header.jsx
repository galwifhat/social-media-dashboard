import React from "react";

export default function Header() {
  return (
    <header>
      <h1 className="title">SOCIAL MEDIA DASHBOARD</h1>
      <p className="description">Group Two Mini Project</p>
      <img
        src="https://web.dev/static/articles/building/an-adaptive-favicon/image/example-dark-theme-favico-6a6f6f67bc3e7.png"
        alt="dashboard logo"
        style={{ width: "50px", height: "50px" }}
      />
    </header>
  );
}
