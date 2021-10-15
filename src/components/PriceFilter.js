import { Slider } from "@material-ui/core";
import React, { useState } from "react";

const PriceFilter = ({ setSearchValues }) => {
  const [rangeVal, setRangeVal] = useState([1, 100]);
  const minVal = rangeVal[0];
  const maxVal = rangeVal[1];
  const handleChange = (e, data) => {
    setRangeVal(data);
    setSearchValues({ min: minVal, max: maxVal, page: 1 });
  };

  return (
    <div>
      <Slider
        value={rangeVal}
        onChange={handleChange}
        valueLabelDisplay="off"
        min={1}
        max={100}
        aria-labelledby="range-slider"
        className="price__range"
      />
      <p>
        <span style={{ fontWeight: "700" }}>Price:</span>{" "}
        {`$${minVal} - $${maxVal}`}{" "}
      </p>
    </div>
  );
};

export default PriceFilter;
