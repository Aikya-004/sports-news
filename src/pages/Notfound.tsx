import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">404 - Not Found</h1>
      <p className="text-lg mb-8">Sorry, the page you are looking for does not exist.</p>
      <Link to="/home" id="backToHomeButton" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
        Back to Homepage
      </Link>
    </div>
  );
};

export default Notfound;