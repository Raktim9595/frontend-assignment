import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Spinner = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="rgb(234 88 12)"
      ariaLabel="three-dots-loading"
      visible={true}
    />
  );
};

export default Spinner;
