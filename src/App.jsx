import "bootstrap/dist/css/bootstrap.min.css";
import PricingCard from "./components/PricingCard";
import PricingLists from "./components/PricingLists";
import Layout from "./layouts/Layout";

const pricings = [
  {
    type: "free",
    price: 0,
    features: ["a", "b"],
    cta: "click me",
  },
  {
    type: "free",
    price: 0,
    features: ["a", "b"],
    cta: "click me",
  },
  {
    type: "free",
    price: 0,
    features: ["a", "b"],
    cta: "click me",
  },
];

function App() {
  return (
    <Layout>
      <PricingLists>
        {pricings.map((i) => (
          <div className="col">
            <PricingCard pricing={i} />
          </div>
        ))}
      </PricingLists>
    </Layout>
  );
}

export default App;
