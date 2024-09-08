import React from 'react';
import './About.css'; // Import the CSS file

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>Welcome to our finance web scraping application. We provide real-time insights into the stock market by scraping data from various financial websites. Our application allows you to track the top performing and marginal companies efficiently.</p>
      
      <h2>Introduction</h2>
      <p>Our service is designed to help you stay informed about the stock market by offering up-to-date data on leading and marginal companies.</p>
      
      <h2>How It Works</h2>
      <p>Our web scraping process involves:</p>
      <ol>
        <li><strong>Data Collection:</strong> We collect data from multiple trusted financial websites using advanced scraping techniques.</li>
        <li><strong>Data Processing:</strong> The collected data is processed and organized to provide accurate and timely information.</li>
        <li><strong>Data Display:</strong> The processed data is presented on our web application in a user-friendly format.</li>
      </ol>
      
      <h2>Benefits</h2>
      <ul>
        <li>Get real-time stock market data.</li>
        <li>Track top performing and marginal companies with ease.</li>
        <li>Make informed financial decisions based on accurate data.</li>
      </ul>
      
      <h2>Technology Stack</h2>
      <p>Our application utilizes the following technologies:</p>
      <ul>
        <li><strong>Python:</strong> For web scraping and data processing.</li>
        <li><strong>React:</strong> For building a dynamic and interactive frontend.</li>
        <li><strong>MongoDB:</strong> For storing and managing the scraped data.</li>
      </ul>
      
      <h2>Future Plans</h2>
      <p>We are constantly working to enhance our application. Upcoming features include more detailed analytics, additional data sources, and improved user interface components.</p>
    </div>
  );
};

export default About;
