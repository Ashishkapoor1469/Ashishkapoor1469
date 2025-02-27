import React from 'react';

const NoPage = () => {
  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md  p-6 md:p-8 rounded-lg shadow-2xl text-center">
        <h1 className="text-6xl md:text-7xl font-bold text-gray-800">404</h1>
        <p className="text-base md:text-lg text-gray-600 mt-2">Oops! The page you are looking for does not exist.</p>
        <a 
          href="/home" 
          className="mt-4 inline-block px-5 md:px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Go Back 1st page
        </a>
      </div>
    </div>
    
</>
  );
}

export default NoPage;