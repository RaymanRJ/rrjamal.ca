import React, { useEffect } from 'react';

function Bartender() {

  useEffect(() => {
    const removeBars = () => {
        const barsIn = document.querySelectorAll('.bar-in');
        barsIn.forEach((bar, i) => {
            // bar.classList.remove('bar-in');
            bar.classList.add('bar-out');
        });
    };
    setTimeout(removeBars, 1000);
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
