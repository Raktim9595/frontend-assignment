import React from "react";

const ErrorComponent = ({ message }: { message: string }) => {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div className="w-[21rem] min-[450px]:w-[27rem] sm:w-[30rem] h-44 border-2 border-red-500 px-12 rounded-md py-8 bg-red-700 bg-opacity-10 mx-auto">
      <h3 className="text-red-700 mb-4 text-base sm:text-xl capitalize font-medium">{message}</h3>
      <button onClick={handleClick} className="bg-red-700 text-white rounded px-4 py-1.5 active:scale-90 transition-all duration-200 ease-in-out active:shadow text-sm sm:text-base">
        Try Again
      </button>
    </div>
  );
};

export default ErrorComponent;
