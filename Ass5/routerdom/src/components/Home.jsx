import React from 'react'
import { Link } from "react-router-dom";
import "./Home.css"

const Home = () => {
  return (
    <>
      <header className="hero">
        <div>
          <h1>Welcome to MySite</h1>
          <p>Your journey starts here.</p>
          <Link className='btn' to={"/explore"} >Explore Now</Link>
          
        </div>
      </header>

      <section className="content">
        <h2>Discover More</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
          odio vitae vestibulum.
        </p>
      </section>

      <footer className="footer">
        <div >&copy; 2024 MySite. All rights reserved.</div>
      </footer>
    </>
  )
}

export default Home
