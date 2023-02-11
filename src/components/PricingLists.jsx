import React from "react";

function PricingLists({ children }) {
  return (
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">{children}</div>
  );
}

export default PricingLists;
