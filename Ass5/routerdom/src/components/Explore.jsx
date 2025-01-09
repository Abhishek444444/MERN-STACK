import React from 'react'
import "./Explore.css"

const Explore = () => {
  return (
    <div bgcolor="white">
      <header>
      <h1>Explore</h1>
    </header>

    
      <div className="discussion-card">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/27/14/40/programming-1009134_1280.jpg"
          alt="Discussion Image"
        />
        <div className="content">
          <div className="title">How to improve your coding skills?</div>
          <div className="description">
            In this post, I will share some effective strategies that have
            helped me improve my coding skills. From practicing regularly to
            learning new algorithms, these tips are useful for both beginners
            and experienced developers.
          </div>
          <a href="#" className="read-more">Read More</a>
        </div>
      </div>

      <div className="discussion-card">
        <img
          src="https://media.istockphoto.com/id/1224339510/photo/home-office-set-up-with-responsive-snow-mountain-website.jpg?s=1024x1024&w=is&k=20&c=4UZKoozKyacyNINW6J4yR4U-2BFM7f8s16HvYJ3Q8dY="
          alt="Discussion Image"
        />
        <div className="content">
          <div className="title">Best practices for writing clean code</div>
          <div className="description">
            Writing clean and maintainable code is an essential skill for any
            developer. In this post, we will explore the best practices for
            writing readable, efficient, and scalable code that other developers
            can easily understand and modify.
          </div>
          <a href="#" className="read-more">Read More</a>
        </div>
      </div>
    
    </div>
  )
}

export default Explore
