import React from "react";

const MyComponent = () => {
  const containerStyles: React.CSSProperties = {
    margin: "0 auto",
    textAlign: "center"
  };

  const underlineStyles = {
    textDecoration: "underline",
    fontWeight: "bold",
    fontSize: "24px"
  };

  return (
    <div style={containerStyles}>
      <div style={underlineStyles}>Alek Francescangeli</div>
      <div>alek@alekbaba.com</div>
    </div>
  );
};

export default MyComponent;