import React from 'react';
import { useNavigate } from 'react-router-dom'; // Optional if you're using React Router

const ErrorPage = ({ errorCode, errorMessage }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigates back to the previous page
  };

  const handleGoHome = () => {
    navigate('/'); // Redirects to the home page
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-500">Oops!</h1>
      <h2 className="text-4xl font-semibold text-gray-800 my-4">
        {errorCode || 'Error'}
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        {errorMessage ||
          'Something went wrong. The page you are looking for does not exist.'}
      </p>
      <div className="flex space-x-4">
        <button
          className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          onClick={handleGoBack}
        >
          Go Back
        </button>
        <button
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={handleGoHome}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
