import React from "react";

const Footer = () => {
  return (
    <div className="mt-5">
      <hr />
      <div className="py-8 px-8 lg:px-0 max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
        {/* subscription content  */}
        <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center justify-between">
          <h3>Join Our Premium services</h3>
          <div className="flex items-stretch">
            <input
              type="email"
              placeholder="enter email"
              className="rounded focus:border-gray-600 pr-8 focus:ring-0"
            />
            <button className="bg-orange-600 text-white rounded-md px-5 -translate-x-5">
              Subscribe
            </button>
          </div>
        </div>

        {/* copyright content  */}
        <div className="flex mt-4 flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-orange-600">
            &copy; 2080 e-commerce, all copyright reserved
          </p>
          <div className="flex items-center space-x-2 mt-5">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
              alt="facebook"
              className="h-6 w-6"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/4138/4138124.png"
              alt="instagram"
              className="h-6 w-6"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/733/733579.png"
              alt="twitter"
              className="h-6 w-6"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png"
              alt="github"
              className="h-6 w-6"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/3670/3670226.png"
              alt="reddit"
              className="h-6 w-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
