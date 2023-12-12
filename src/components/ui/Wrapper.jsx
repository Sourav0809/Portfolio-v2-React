import React from "react";

const Wrapper = (props) => {
  return (
    <div className=" w-full h-full bg-customBlack text-white overflow-hidden">
      {props.children}
    </div>
  );
};

export default Wrapper;
