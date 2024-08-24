
import './App.css';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Login from './Login';
import Login2 from './Login2';

function App() {
  useEffect(() => {
    gsap.fromTo(
      '.letter', 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, ease: 'power4.out', stagger: 0.1 }
    );
  }, []);

  return (
    <div className="App">
      <Login2 />
    </div>
  );
}

export default App;