import React from "react";

const HorizontalLine = ({ width, margin, background, height }) => {
  return (
    <span style={{ width: `${width}`, height: `${height}`, margin: `${margin}`, background: `${background}`, display: 'block' }}></span>
  );
};

export default HorizontalLine;
