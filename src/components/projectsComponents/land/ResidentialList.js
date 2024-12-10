import React from "react";

const ResidentialList = ({ setShowDetails, setShowTypeOfLand }) => {
  const handleClick = () => {
    setShowDetails(true);
    // setShowTypeOfLand("residential");
  };
  return <div onClick={handleClick}>ResidentialList</div>;
};

export default ResidentialList;
