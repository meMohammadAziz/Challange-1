import React from "react";

const Parent = ({ children, name }) => {
  let Child = React.cloneElement(children, { name: name });

  return (
    <>
      <h1>Parent Comp</h1>
      {Child}
    </>
  );
};

export default Parent;
