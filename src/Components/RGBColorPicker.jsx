import { useState } from "react";

function RGBColorPicker() {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  function rgbValue(min, max, value) {
    return value < min ? min : value > max ? max : value;
  }

  return (
    <div>
      <SingleColorPicker
        color="r"
        value={rValue}
        onChange={() => {
          /* ... */
        }}
      />

      <SingleColorPicker
        color="g"
        value={gValue}
        onChange={() => {
          /* ... */
        }}
      />

      <SingleColorPicker
        color="b"
        value={bValue}
        onChange={() => {
          /* ... */
        }}
      />
    </div>
  );
}

export default RGBColorPicker;
