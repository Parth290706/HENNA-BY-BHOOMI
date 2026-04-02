import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // 🔹 SLIDER
  const [index, setIndex] = useState(0);

  // 🔥 CATEGORY STATE
  const [category, setCategory] = useState("bridal");

  // 🔥 CATEGORY IMAGES
  const allImages = {
    bridal: [
      "https://images.pexels.com/photos/1050484/pexels-photo-1050484.jpeg",
      "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg"
    ],
    party: [
      "https://images.pexels.com/photos/2062061/pexels-photo-2062061.jpeg",
      "https://images.pexels.com/photos/1050484/pexels-photo-1050484.jpeg"
    ],
    home: [
      "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg",
      "https://images.pexels.com/photos/2062061/pexels-photo-2062061.jpeg"
    ]
  };

  const images = allImages[category];

  // 🔁 AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  // 🔥 RESET WHEN CATEGORY CHANGE
  useEffect(() => {
    setIndex(0);
  }, [category]);

  return (
    <div>
      {/* NAVBAR */}
      <nav>
        <div>
          <h2 className="heading-ln-2">Henna by Bhumi</h2>
          <p className="heading-ln-1">Using 100% Organic Mehndi</p>
        </div>
        <div>
          <a href="/">Home</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div>
          <h1 className="heading-ln-2">PROFESSIONAL MEHNDI ARTIST</h1>
          <p>Bridal • Party • Arabic Designs</p>

          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "15px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <a href="#contact" className="btn">
              Book Now
            </a>

            <a
              href="https://www.instagram.com/bhumi_bridal.mehndi?utm_source=qr&igsh=Yjh0ajRpOXN6MG1s"
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
          <div
            className={`card ${category === "bridal" ? "active" : ""}`}
            onClick={() => setCategory("bridal")}
          >
            💍 Bridal Mehndi
          </div>

          <div
            className={`card ${category === "party" ? "active" : ""}`}
            onClick={() => setCategory("party")}
          >
            🎉 Party Mehndi
          </div>

          <div
            className={`card ${category === "home" ? "active" : ""}`}
            onClick={() => setCategory("home")}
          >
            🏠 Home Service
          </div>
        </div>
      </div>

      {/* GALLERY */}
      <div className="section" id="gallery">
        <h2>Gallery</h2>

        <div className="slider">
          <div
            className="slides"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="mehndi"
                onError={(e) =>
                  (e.target.src = "https://via.placeholder.com/400")
                }
              />
            ))}
          </div>

          <button
            className="prev"
            onClick={() =>
              setIndex((prev) =>
                prev === 0 ? images.length - 1 : prev - 1
              )
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

      {/* CONTACT */}
      <div className="section" id="contact">
        <h2>Contact</h2>

        <div className="contact-box">
          <p>
            <a className="address" href="tel:+916353853077">
              📞 +91 6353853077
            </a>
          </p>

          <p>
            <a
              className="address"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=parthsutariya290706@gmail.com&su=Mehndi%20Booking&body=I%20want%20to%20book%20mehndi%20from%20you"
              target="_blank"
              rel="noopener noreferrer"
            >
              📧 parthsutariya290706@gmail.com
            </a>
          </p>

          <p>
            <a
              className="address"
              href="https://www.google.com/maps?q=Hamburg+Germany"
              target="_blank"
              rel="noopener noreferrer"
            >
              📍 Hamburg, Germany
            </a>
          </p>
        </div>
      </div>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/918799399742?text=I%20want%20to%20book%20mehndi"
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