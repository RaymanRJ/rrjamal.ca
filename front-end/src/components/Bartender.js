import React, { useEffect } from 'react';

function Bartender() {

  useEffect(() => {
    const slideBarsOut = () => {
        const barsIn = document.querySelectorAll('.bar-in');
        barsIn.forEach((bar, i) => {
            bar.classList.add('bar-out');
        });
    };

    setTimeout(slideBarsOut, 1000);
  }, []);

  return (
    <div className="bartender">
      <div className="bar-in"></div>
      <div className="bar-in"></div>
      <div className="bar-in"></div>
      <div className="bar-in"></div>
      <div className="bar-in"></div>
    </div>
  );
}

export default Bartender;
