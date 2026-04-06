import { useState, useEffect } from "react";
import "./App.css";

/* 🔥 IMPORT YOUR LOCAL IMAGES */
import bridal1 from "./components/bridal1.jpeg";
import bridal2 from "./components/bridal2.jpeg";
import bridal3 from "./components/bridal3.jpeg";
import bridal4 from "./components/bridal4.jpeg";

import party1 from "./components/party1.jpeg";
import party2 from "./components/party2.jpeg";
import party3 from "./components/party3.jpeg";
import party4 from "./components/party4.jpeg";

import home1 from "./components/home1.jpeg";
import home2 from "./components/home2.jpeg";
import home3 from "./components/home3.jpeg";
import home4 from "./components/home4.jpeg";

function App() {
  // 🔥 REVIEWS
  const reviews = [
    { name: "Riya Patel", text: "Amazing bridal mehndi design 😍 very detailed work!" },
    { name: "Neha Sharma", text: "Very professional and friendly service ❤️" },
    { name: "Pooja Mehta", text: "Designs are unique and beautiful 👌 highly recommend!" },
    { name: "Kajal Singh", text: "Best mehndi artist in town 💯 loved it!" },
    { name: "Anjali Verma", text: "Such neat and clean mehndi work 😍 perfect design!" },
    { name: "Sneha Gupta", text: "Very fast service and beautiful designs ❤️" },
    { name: "Priya Desai", text: "Bhumi is very talented 🙌 bridal mehndi was amazing!" },
    { name: "Komal Yadav", text: "Highly recommended 👍 long-lasting mehndi!" },
  ];

  // 🔹 STATES
  const [index, setIndex] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [category, setCategory] = useState("bridal");

  // 🔥 LOCAL IMAGES
 const allImages = {
  bridal: [bridal1, bridal2, bridal3, bridal4],
  party: [party1, party2, party3, party4],
  home: [home1, home2, home3, home4],
};

  const images = allImages[category];

  // 🔁 IMAGE AUTO SLIDER
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  // 🔁 REVIEW AUTO SLIDER
  useEffect(() => {
    const interval = setInterval(() => {
      setReviewIndex((prev) => (prev + 1) % reviews.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  // 🔁 RESET IMAGE ON CATEGORY CHANGE
  useEffect(() => {
    setIndex(0);
  }, [category]);

  return (
    <div>
      {/* NAVBAR */}
      <nav>
        <div className="mid">
          <h2 className="heading-ln-2">Mehndi by Bhumi</h2>
          <p className="heading-ln-1">Using 100% Organic Mehndi</p>
        </div>
        <div>
          <a href="/">Home</a>
          <a href="#reviews">Reviews</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div>
          <h1 className="heading-ln-2">PROFESSIONAL MEHNDI ARTIST</h1>
          <p>Bridal • Party • Arabic Designs</p>

          <div style={{ display: "flex", gap: "15px", marginTop: "15px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#contact" className="btn">Book Now</a>

            <a
              href="https://www.instagram.com/bhumi_bridal.mehndi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{ backgroundColor: "#E1306C" }}
            >
              More Info
            </a>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <div className="section" id="services">
        <h2>Our Services</h2>

        <div className="services">
          <div className={`card ${category === "bridal" ? "active" : ""}`} onClick={() => setCategory("bridal")}>
            <i class="fa-solid fa-ring"></i> Bridal Mehndi
          </div>

          <div className={`card ${category === "party" ? "active" : ""}`} onClick={() => setCategory("party")}>
            <i class="fa-solid fa-champagne-glasses"></i> Party Mehndi
          </div>

          <div className={`card ${category === "home" ? "active" : ""}`} onClick={() => setCategory("home")}>
            <i class="fa-regular fa-hand-peace"></i> Guest Mehndi
          </div>
        </div>
      </div>

      {/* 🔥 IMAGE SLIDER (LEFT-RIGHT ANIMATION) */}
      <div style={{ marginTop: "-40px" }}>
        <div className="slider">
          <div
            className="slides"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {images.map((img, i) => (
              <img key={i} src={img} alt="mehndi" />
            ))}
          </div>

          {/* BUTTONS BACK */}
          <button
            className="prev"
            onClick={() =>
              setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
            }
          >
            ❮
          </button>

          <button
            className="next"
            onClick={() =>
              setIndex((prev) => (prev + 1) % images.length)
            }
          >
            ❯
          </button>
        </div>
      </div>

      {/* ⭐ REVIEW SLIDER */}
      <div className="section" id="reviews">
        <h2>Customer Reviews</h2>

        <div className="review-slider">
          <div
            className="review-track"
            style={{
              transform: `translateX(-${reviewIndex * 100}%)`,
            }}
          >
            {reviews.map((r, i) => (
              <div className="review-item" key={i}>
                <strong>{r.name}</strong>
                <p>{r.text}</p>
                <p style={{ color: "gold" }}>★★★★★</p>
              </div>
            ))}
          </div>
        </div>

        {/* DOTS */}
        <div className="dots">
          {reviews.map((_, i) => (
            <span
              key={i}
              className={i === reviewIndex ? "dot active" : "dot"}
              onClick={() => setReviewIndex(i)}
            ></span>
          ))}
        </div>
      </div>

      {/* CONTACT */}
      <div className="section" id="contact">
        <h2>Contact</h2>

        <div className="contact-box">
          <p>
            <a className="address" href="tel:+49 1575 618614">
              <i class="fa-solid fa-phone"></i> +49 1575 6183614
            </a>
          </p>

          <p>
            <a
              className="address"
              href="mailto:Bjpanchal89@gmail.com?subject=Mehndi Booking&body=I want to book mehndi from you"
            >
              <i class="fa-regular fa-envelope"></i> Bjpanchal89@gmail.com
            </a>
          </p>

          <p>
            <a
              className="address"
              href="https://www.google.com/maps/place/Hamburg,+Germany/@53.558572,9.9278215,10z/data=!3m1!4b1!4m6!3m5!1s0x47b161837e1813b9:0x4263df27bd63aa0!8m2!3d53.5488282!4d9.9871703!16zL20vMDNocno?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-solid fa-location-dot"></i> Humberg, Germany
            </a>
          </p>

          <p>
           <a
             className="address insta"
             href="https://www.instagram.com/bhumi_bridal.mehndi"
             target="_blank"
             rel="noopener noreferrer"
          >
             <i className="fa-brands fa-instagram"></i> @bhumi_bridal.mehndi
    </a>
  </p>    
        </div>
      </div>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/+49 1575 6183614?text=I%20want%20to%20book%20mehndi"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </div>
  );
}

export default App;
