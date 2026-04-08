import { useState, useEffect } from "react";
import "./App.css";

/* 🔥 IMPORT YOUR LOCAL IMAGES */
import bridal1 from "./component/bridal1.jpeg";
import bridal2 from "./component/bridal2.jpeg";
import bridal3 from "./component/bridal3.jpeg";
import bridal4 from "./component/bridal4.jpeg";
import bridal5 from "./component/bridal5.jpeg";
import bridal6 from "./component/bridal6.jpeg";
import bridal7 from "./component/bridal7.jpeg";
import bridal8 from "./component/bridal8.jpeg";
import bridal9 from "./component/bridal9.jpeg";
import bridal10 from "./component/bridal10.jpeg";
import bridal11 from "./component/bridal11.jpeg";
import bridal12 from "./component/bridal12.jpeg";
import bridal13 from "./component/bridal13.jpeg";

import party1 from "./component/party1.jpeg";
import party2 from "./component/party2.jpeg";
import party3 from "./component/party3.jpeg";
import party4 from "./component/party4.jpeg";
import party5 from "./component/party5.jpeg";
import party6 from "./component/party6.jpeg";
import party7 from "./component/party7.jpeg";
import party8 from "./component/party8.jpeg";
import party9 from "./component/party9.jpeg";

import home1 from "./component/home1.jpeg";
import home2 from "./component/home2.jpeg";
import home3 from "./component/home3.jpeg";
import home4 from "./component/home4.jpeg";
import home5 from "./component/home5.jpeg";
import home6 from "./component/home6.jpeg";
import home7 from "./component/home7.jpeg";

function App() {
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
    // FIXED: Changed bridal0 to bridal10
    bridal: [bridal1, bridal2, bridal3, bridal4, bridal5, bridal6, bridal7, bridal8, bridal9, bridal10, bridal11, bridal12, bridal13],
    party: [party1, party2, party3, party4, party5, party6, party7, party8, party9],
    home: [home1, home2, home3, home4, home5, home6, home7],
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
