import React from "react";

function Image({ imageSource }) {
  return (
    <div>
      <img src={imageSource} style={{ width: "12%", height: "12%" }}></img>
    </div>
  );
}

export default Image;
