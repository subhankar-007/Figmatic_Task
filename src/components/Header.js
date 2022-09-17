import React from "react";
import './Header.css';

const Header = () => {
  return (
    <div>
      <header class="site-header">
        <div class="site-identity">
          <h1>
            <a href="#" className="fs-2">DESIGNS</a>
          </h1>
        </div>
        <nav class="site-navigation">
          <ul class="nav">
            <li>
              <a href="#"><button style={{background: 'blue', color: 'white'}}>Create Course</button></a>
            </li>  
            <a href="#">
            <img src="https://img.freepik.com/premium-vector/man-face-logo-with-vector_96853-578.jpg" alt="Site Name" />
          </a>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          
        </nav>
      </header>
    </div>
  );
};

export default Header;
