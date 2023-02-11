import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function PricingCard({ pricing }) {
  const { type, price, features, cta } = pricing;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Header>
        <h3 className="fs-4 fw-normal text-center">{type}</h3>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <h1 class="card-title pricing-card-title text-center">
            ${price}
            <small class="text-muted fw-light">/mo</small>
          </h1>
          <ul className="fs-6 list-unstyled text-center mt-4 mb-2">
            {features.map((i) => (
              <li>{i}</li>
            ))}
          </ul>
        </Card.Text>
        <div className="d-grid">
          <Button variant="outline-primary" className="fs-4">
            {cta}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PricingCard;
