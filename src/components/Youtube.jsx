import React from "react";

const Youtube = () => {
  return (
    <div className="w-full h-96 justify-center mb-10 mt-20 hidden sm:flex">
      <iframe
        className="w-4/12 aspect-auto"
        src="https://www.youtube.com/embed/4-sduXDM85Q"
        allowFullScreen
        title="YT Video"
      ></iframe>
    </div>
  );
};

export default Youtube;
