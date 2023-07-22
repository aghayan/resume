import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <h1>Arman Aghayan</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <div className='main' >
        <h2>About Me</h2>
        <p>
          I studied and left it incomplete
          ASUE Gyumri Branch
          September 2019 - August 2020 - 1 Year
        </p>
        <p>
          In 2019, I participated in a 6-month Front end 
          course at the GTC technology center
        </p>
        <p>
          Now I'm studying at Full-Stack TCO Academy, I've already finished Front-End,
          in 2 months I'll finish Back-End
        </p>
      </div>



      <div className="skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </div>

      <div className="footer">
        <h2>Contact</h2>
        <p>Email: arman2002yan@icoud.com</p>
        <p>Phone Number: 077898098</p>




      </div>
    </div>
  );
}

export default App;
