import { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

function App() {

  // 🔹 SLIDER
  const [index, setIndex] = useState(0);
  const images = [
    "https://images.pexels.com/photos/32004559/pexels-photo-32004559.jpeg",
    "https://images.pexels.com/photos/32010609/pexels-photo-32010609.jpeg",
    "https://images.pexels.com/photos/29092945/pexels-photo-29092945.jpeg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  // 🔹 REVIEWS (Firebase)
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);

  // 🔥 Fetch reviews from Firebase
  const fetchReviews = async () => {
    const querySnapshot = await getDocs(collection(db, "reviews"));

    const data = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });

    setReviews(data);
  };

  // 🔥 Load reviews on start
  useEffect(() => {
    fetchReviews();
  }, []);

  // 🔥 Add review to Firebase
  const addReview = async () => {
    if (!name || !text || rating === 0) {
      alert("Please fill all fields!");
      return;
    }

    await addDoc(collection(db, "reviews"), {
      name,
      text,
      rating
    });

    setName("");
    setText("");
    setRating(0);

    fetchReviews(); // refresh list
  };

  return (
    <div>

      {/* NAVBAR */}
      <nav>
        <div>
          <h2 className="heading-ln-2">Henna by Bhumi</h2> 
          <p className="heading-ln-1"> Using 100% Organic Mehndi</p>
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
          <h1 className="heading-ln-2">Elegant Mehndi Artist</h1>
          <p>Bridal • Party • Arabic Designs</p>
          <a href="#contact" className="btn">Book Now</a>
        </div>
      </div>

      {/* SERVICES */}
      <div className="section" id="services">
        <h2>Our Services</h2>
        <div className="services">
          <div className="card">💍 Bridal Mehndi</div>
          <div className="card">🎉 Party Mehndi</div>
          <div className="card">🏠 Home Service</div>
        </div>
      </div>

      {/* GALLERY */}
      <div className="section" id="gallery">
        <h2>Gallery</h2>

        <div className="slider">
          <div
            className="slides"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {images.map((img, i) => (
              <img key={i} src={img} alt="mehndi" />
            ))}
          </div>

          <button className="prev" onClick={() => setIndex(index - 1)}>❮</button>
          <button className="next" onClick={() => setIndex(index + 1)}>❯</button>
        </div>
      </div>

      {/* REVIEWS */}
      <div className="section" id="reviews">
        <h2>Customer Reviews</h2>

        <div className="review-box">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
          />

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write your review..."
          ></textarea>

          <div className="stars">
            {[1,2,3,4,5].map((star) => (
              <i
                key={star}
                className={`fa fa-star ${star <= rating ? "active" : ""}`}
                onClick={() => setRating(star)}
              ></i>
            ))}
          </div>

          <button onClick={addReview} className="btn">Submit Review</button>
        </div>

        <div>
          {reviews.map((r, i) => (
            <div key={i} className="review-item">
              <strong>{r.name}</strong>
              <p>{"⭐".repeat(r.rating)}</p>
              <p>{r.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT */}
      <div className="section" id="contact">
        <h2>Contact</h2>
        <div className="contact-box">
          <p>
            <a className="address" href="mailto:parthsutariya290706@gmail.com">
              📧 Email
            </a>
          </p>
          <p>
            <a className="address" href="tel:+918799399742">
              📞 Call
            </a>
          </p>
        </div>
      </div>

      {/* WHATSAPP */}
      <a href="https://wa.me/918799399742" className="whatsapp">
        🟢
      </a>

    </div>
  );
}

export default App;