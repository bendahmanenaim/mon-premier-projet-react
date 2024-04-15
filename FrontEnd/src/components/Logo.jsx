import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      {/* Les images importées depuis la balise IMG sont accessibles dans "public" */}
      <img src="./logokasa.svg" alt="logo kasa" />
     
    </div>
  );
};

export default Logo;
