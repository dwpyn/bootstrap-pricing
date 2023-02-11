import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Layout({ children }) {
  return (
    <>
      <body>
        <div className="container py-3">
          <Header
            heading={"Pricig"}
            information={
              "Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization."
            }
          />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </>
  );
}

export default Layout;
