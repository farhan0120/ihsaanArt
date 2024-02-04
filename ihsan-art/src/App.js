import logo from './logo.svg';
import './App.css';
import CustomNavbar from './Navbar'; // Import the CustomNavbar component
import Container from "react-bootstrap/Container";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  BrowserRouter,
} from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomJumbotron from './CustomJumbotron';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';






function App() {
  return (
    <div className="App">
        
      <CustomNavbar />
      <CustomJumbotron />

        

        <div className="section">
        <div className="container">
          <h2>What is the Ihsan Project</h2>
          <p>
            This is some text for the new section. You can include additional content, such as images, lists, or any other HTML elements.
          </p>
        </div>
      </div>

      <div className="blue-section" style={{ backgroundColor: '#001f3f' }}>
        <Container className="religion-container" style={{ padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <div className="d-flex justify-content-between">
            {/* Card for Judaism */}
            <Card style={{ width: '30%', marginBottom: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', border: '2px solid #ffd700' }}>
              <Card.Img variant="top" src="https://religionmediacentre.org.uk/wp-content/uploads/2020/10/david-holifield-TLZKlOBOsLs-unsplash-scaled-1.jpg" />
              <Card.Body>
                <Card.Title>Judaism</Card.Title>
                <Card.Text>
                  Judaism is one of the oldest monotheistic religions, with a rich history and traditions.
                </Card.Text>
                <a href="#" className="btn btn-link btn-gold">Learn More</a>
              </Card.Body>
            </Card>

            {/* Card for Christianity */}
            <Card style={{ width: '30%', marginBottom: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', border: '2px solid #ffd700' }}>
              <Card.Img variant="top" src="https://images.saymedia-content.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MjAxNjYzMTkwMTk3NjEwMjYw/the-mythic-origins-of-christianity-true-or-false.jpg" />
              <Card.Body>
                <Card.Title>Christianity</Card.Title>
                <Card.Text>
                  Christianity follows the teachings of Jesus Christ and has various denominations worldwide.
                </Card.Text>
                <a href="#" className="btn btn-link btn-gold">Learn More</a>
              </Card.Body>
            </Card>

            {/* Card for Islam */}
            <Card style={{ width: '30%', marginBottom: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', border: '2px solid #ffd700' }}>
              <Card.Img variant="top" src="https://www.ibnulyemenarabic.com/wp-content/uploads/2018/11/Islam.jpg" />
              <Card.Body>
                <Card.Title>Islam</Card.Title>
                <Card.Text>
                  Islam is a monotheistic religion founded on the teachings of Prophet Muhammad.
                </Card.Text>
                <a href="#" className="btn btn-link btn-gold">Learn More</a>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>

             {/* Footer */}
      <footer className="footer bg-dark text-light">
        <div className="container py-4">
          <div className="row">
            {/* Contact Details */}
            <div className="col-md-6">
              <h4>Contact Us</h4>
              <p>
                Email: info@example.com
                <br />
                Phone: +1 (123) 456-7890
                <br />
                Address: 123 Art Street, Cityville
              </p>
            </div>

            {/* Social Media Links */}
            <div className="col-md-6 text-end">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="https://www.instagram.com/theinsaanproject/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram fa-2x"></i>
                  Follow us on Instagram
                </a>
            </div>
          </div>
          </div>
        </div>
      </footer>

      </div>

   

);
  
}

export default App;
