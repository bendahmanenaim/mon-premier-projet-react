import React from "react";


const Banner = () => {
  return (
    <div className="banner">
      {/* Les images importées depuis la balise IMG sont accessibles dans "public" */}
      <img src="./main.jpg" alt="world" />
      <h1>CHez vous, partout et ailleurs</h1>
    </div>
  );
};

export default Banner;
