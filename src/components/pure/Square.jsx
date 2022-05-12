import React, { useEffect, useState } from 'react';

function randomNumber() {
  return Math.floor(Math.random() * 256)
}

function randomRgb() {
  const red = randomNumber();
  const green = randomNumber();
  const blue = randomNumber();
  return `rgb(${red}, ${green}, ${blue})`
}

const Square = () => {

  const [rgb, setRgb] = useState('rgb(0,0,0)');
  const [stopColor, setStopColor] = useState(true);

  useEffect(() => {
    if (!stopColor) {
      setRgb(randomRgb());
    }
  }, [rgb, stopColor])

  function handleMouseEnter() {
    setStopColor(false);
  }

  function handleMouseLeave() {
    setStopColor(true);
  }

  function handleDoubleClick() {
    setStopColor(!stopColor);
  }

  return (
    <div
      style={{
        backgroundColor: rgb,
        width: 255,
        height: 255
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onDoubleClick={handleDoubleClick}
    />
  );
}

export default Square;
