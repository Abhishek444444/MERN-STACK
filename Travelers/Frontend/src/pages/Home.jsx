import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      {/* Hero Section with Background Image */}
      <section
        className="hero"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
        }}
      >
        <div className="hero-text">
          <h1>Discover Your Next Adventure</h1>
          <p>Explore the world’s most breathtaking destinations</p>
          <button className="cta-button" onClick={() => navigate("/destinations")}>
            Explore Now
          </button>
        </div>
      </section>

      {/* Featured Destinations Section */}
      <section id="destinations" className="destinations">
  <h2 className="section-title" onClick={() => navigate("/destinations")}>
    Explore Iconic Destinations
  </h2>
  <div className="destinations-flex">
    <div className="destination-card" onClick={() => navigate("/destinations")}>
      <img
        src="https://www.bizarexpedition.com/images/2019/05/product/15574063212.png"
        alt="Kedarnath Temple"
      />
      <h3>Kedarnath Temple,Uttarakhand</h3>
    </div>

    <div className="destination-card" onClick={() => navigate("/destinations")}>
      <img
        src="https://c8.alamy.com/compes/e25nhr/el-palacio-de-los-vientos-el-hawa-mahal-jaipur-rajasthan-india-e25nhr.jpg"
        alt="Hawa Mahal, Rajasthan"
      />
      <h3>Hawa Mahal, Rajasthan</h3>
    </div>

    <div className="destination-card" onClick={() => navigate("/destinations")}>
      <img
        src="https://tse2.mm.bing.net/th?id=OIP.BskFGrtAay0YV9NGPfZfNgHaE5&pid=Api&P=0&h=180"
        alt="Raigad Fort, Maharashtra"
      />
      <h3>Raigad Fort, Maharashtra</h3>
    </div>

    <div className="destination-card" onClick={() => navigate("/destinations")}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg"
        alt="Taj Mahal, Agra"
      />
      <h3>Taj Mahal, Agra</h3>
    </div>
  </div>
</section>



    {/* CSS Styles */}
      <style jsx>{`
        body {
          margin: 0;
          font-family: "Poppins", sans-serif;
          background-color: #f8f9fa;
        }

        .home-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero {
          background-size: cover;
          background-position: center;
          height: 70vh;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          text-align: center;
          position: relative;
        }

        .hero::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
        }

        .hero-text {
          position: relative;
          z-index: 1;
        }

        .hero-text h1 {
          font-size: 48px;
          margin-bottom: 10px;
          letter-spacing: 2px;
        }

        .hero-text p {
          font-size: 20px;
          margin-bottom: 20px;
        }

        .cta-button {
          padding: 15px 40px;
          background-color: #ff7f50;
          border: none;
          border-radius: 30px;
          color: white;
          font-size: 18px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .cta-button:hover {
          background-color: #ff4500;
        }

        .destinations {
          padding: 50px 20px;
          text-align: center;
          background-color: #fff;
          width: 100%;
        }

        .section-title {
          font-size: 36px;
          margin-bottom: 30px;
          color: #333;
          cursor: pointer;
        }

        .destinations-flex {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        .destination-card {
          background-color: white;
          border-radius: 15px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          width: 280px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }

        .destination-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .destination-card h3 {
          padding: 15px;
          background-color: #2a3d55;
          color: white;
          margin: 0;
          font-size: 20px;
        }

        .destination-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
        }

        .footer {
          background-color: #2a3d55;
          color: white;
          text-align: center;
          padding: 30px 20px;
          margin-top: 40px;
          width: 100%;
        }

        .footer-info p {
          margin: 5px 0;
        }

        .footer-social a {
          margin: 0 10px;
          color: white;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-social a:hover {
          color: #ff7f50;
        }

        .footer-copyright {
          margin-top: 20px;
          font-size: 14px;
        }

        @media (max-width: 768px) {
          .hero-text h1 {
            font-size: 36px;
          }
          .cta-button {
            padding: 12px 30px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
