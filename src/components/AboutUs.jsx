// import React from 'react';
import "../styles/About.css";
// import Footer from './Footer';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-header">
        <div className="about-us-title">
          <h1>About Us</h1>
          <p>For everything real estate</p>
        </div>
        <div className="about-us-image"></div>
      </div>

      <div className="about-us-content">
        <div className="about-us-text-section">
          <h2>Who are we?</h2>
          <p>
            We are a team dedicated to transforming how things are done in the
            real estate industry, for both the consumers and the professionals.
            Our goal is providing a platform where all real estate related needs
            are met, from finding a contractor for your massive project to just
            finding a cleaner or just asking people in our public chat how to?
          </p>
        </div>

        {/* Mission Statement */}
        <div className="about-us-text-section">
          <h2>Mission Statement</h2>
          <p>
            To connect consumers with real estate professionals in a
            convenient/efficient way, and to provide a way for our professionals
            to love and find what they do rewarding.
          </p>
        </div>

        {/* How It Works */}
        <div className="about-us-text-section">
          <h2>How it works</h2>
          <p>
            With just a few taps, EzFix connects you with pre-screened,
            qualified professionals in your area. Our AI-powered matching
            ensures you’re paired with experts who fit your specific needs.
            Whether you’re remodeling your home or just need a quick repair,
            EzFix makes the process stress-free.”
          </p>
        </div>

        {/* <div className="about-us-buttons">
          <button className="btn">Our Values</button>
          <button className="btn">Meet The Team</button>
        </div> */}

        {/* <div className="about-us-who-we-serve">
          <h2>Who we Serve</h2>

          <div className="serve-container">
            <div className="serve-item">
              <h3>Customers</h3>
              <p>
                Finding help pertaining to real estate ranging from Realtors,
                Cleaning Services, Landscaping and Architecture, Painting, and
                Junk Removal made easy and convenient.
              </p>
            </div>

            <div className="serve-item">
              <h3>Pros</h3>
              <p>
                Providing a place for our professionals to come on and find jobs
                suited to their skills and work style.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AboutUs;
