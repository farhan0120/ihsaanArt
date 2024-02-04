// CustomJumbotron.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import './css/CustomJumbotron.css';

import Card from 'react-bootstrap/Card';



function CustomJumbotron() {
  
  return (
    <div className="custom-jumbotron bg-light">
      
        <div className="jumbotron-content">

        <Image
      src={require("./images/aqsaIhsan.jpeg")}
      alt="Not Working"
      style={{ width: '100%', height: 'auto', maxHeight: '1000px', marginBottom: '0px' }}
    />
          <div className="text-container eb-garamond-font" >
            <h1>Welcome to the Art Gallery ABC IDA</h1>
            <p className="eb-garamond-font">
              Explore the beauty of art in our exquisite collection. Discover exhibitions, talented artists, and more.
            </p>
          </div>
        </div>
    </div>

    );
}

export default CustomJumbotron;
