import React from "react";
import Navbar from "./Navbar";

function Header({ heading, information }) {
  return (
    <header>
      <Navbar />
      <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 class="display-4 fw-normal">{heading}</h1>
        <p class="fs-5 text-muted">{information}</p>
      </div>
    </header>
  );
}

export default Header;
