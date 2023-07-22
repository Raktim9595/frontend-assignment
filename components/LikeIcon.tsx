"use client";

import React, { useState } from "react";
import { HeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as HearIconOutline } from "@heroicons/react/24/outline";

const LikeIcon = () => {
  const [click, setClick] = useState(false);

  const handleLikeClick = () => {
    setClick(!click);
  };

  return (
    <div
      onClick={handleLikeClick}
      className="absolute top-1 right-5 cursor-pointer h-7 w-7 bg-white rounded-full border border-orange-600 flex items-center justify-center"
    >
      {click ? (
        <HeartIcon className="h-5 w-5 text-orange-600" />
      ) : (
        <HearIconOutline className="h-5 w-5 text-orange-600" />
      )}
    </div>
  );
};

export default LikeIcon;
