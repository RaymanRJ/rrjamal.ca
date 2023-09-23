import React, { useEffect } from 'react';
import './Bartender.css';

function Bartender() {

  useEffect(() => {
    const slideBarsOut = () => {
        const barsIn = document.querySelectorAll('.bar');
        barsIn.forEach((bar, i) => {
            bar.classList.add('bar-out');
        });
    };

    setTimeout(slideBarsOut, 1000);
  }, []);

  return (
    <div className="bartender">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
}

export default Bartender;
