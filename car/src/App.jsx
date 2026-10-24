import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

const cars = [
  {
    id: 1,
    name: "Hyundai Creta",
    year: 2022,
    fuel: "Petrol",
    transmission: "Automatic",
    price: "₹12.50 Lakh",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Luxury Sedan",
    year: 2021,
    fuel: "Petrol",
    transmission: "Automatic",
    price: "₹9.80 Lakh",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Premium SUV",
    year: 2023,
    fuel: "Diesel",
    transmission: "Manual",
    price: "₹15.00 Lakh",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=80",
  },
];

function App() {
  const [search, setSearch] = React.useState("");
  const [fuel, setFuel] = React.useState("All");

  const filteredCars = cars.filter((car) => {
    const matchesName = car.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFuel = fuel === "All" || car.fuel === fuel;

    return matchesName && matchesFuel;
  });

  return (
    <>
      <Navbar />

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">YOUR JOURNEY STARTS HERE</p>

            <h1>
              Find Your <span>Dream Car</span>
            </h1>

            <p className="hero-description">
              Buy your next car or sell your current one.
              Simple, transparent and convenient.
            </p>

            <div className="hero-buttons">
              <a href="#cars" className="btn btn-primary">
                Explore Cars
              </a>
              <a href="#sell" className="btn btn-outline">
                Sell Your Car
              </a>
            </div>
          </div>
        </section>

        <section className="search-section" id="cars">
          <div className="section-heading">
            <p className="eyebrow">OUR COLLECTION</p>
            <h2>Find Your Perfect Car</h2>
            <p>Explore our featured cars for sale.</p>
          </div>

          <div className="filters">
            <input
              type="text"
              placeholder="Search car name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              value={fuel}
              onChange={(e) => setFuel(e.target.value)}
            >
              <option value="All">All Fuel Types</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
            </select>
          </div>

          <div className="car-grid">
            {filteredCars.map((car) => (
              <article className="car-card" key={car.id}>
                <img src={car.image} alt={car.name} />

                <div className="car-info">
                  <h3>{car.name}</h3>
                  <p className="car-year">{car.year} Model</p>

                  <div className="car-details">
                    <span>{car.fuel}</span>
                    <span>{car.transmission}</span>
                  </div>

                  <div className="car-bottom">
                    <strong>{car.price}</strong>
                    <a
                      href="#contact"
                      className="details-button"
                      aria-label={`Enquire about ${car.name}`}
                    >
                      Enquire
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredCars.length === 0 && (
            <p className="no-results">
              No cars found. Try another search.
            </p>
          )}
        </section>

        <section className="sell-section" id="sell">
          <div>
            <p className="eyebrow">SELL WITH CONFIDENCE</p>
            <h2 className="h2">Want to Sell Your Car?</h2>
            <p>
              Get in touch with our team to discuss your car,
              its condition and a suitable selling price.
            </p>
          </div>

          <a href="#contact" className="btn btn-primary">
            Sell My Car
          </a>
        </section>

        <section className="about-section" id="about">
          <p className="eyebrow">ABOUT DRIVE DEALS</p>
          <h2>Your Trusted Car Buying Partner</h2>
          <p>
            We help customers explore available cars and connect
            with our team for buying and selling enquiries.
            Our goal is to make your car search simple and clear.
          </p>
        </section>

        <section className="contact-section" id="contact">
          <h2>Let's Find Your Next Car</h2>
          <p>Contact our team for car buying and selling enquiries.</p>
          <a
            href="mailto:yourbusiness@example.com?subject=Car%20Enquiry"
            className="btn btn-primary"
          >
            Contact Us
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;