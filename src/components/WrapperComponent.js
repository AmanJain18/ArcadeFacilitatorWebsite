import React from "react";

const WrapperComponent = ({ children }) => {
  return (
    <div className="mx-auto p-[30px] md:px-[70px] lg:px-[120px]">{children}</div>
  );
};

export default WrapperComponent;
