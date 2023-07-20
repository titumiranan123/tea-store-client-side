const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md p-4 mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mt-4">Oops! Something went wrong.</h1>
        <p className="text-lg text-gray-600 mt-2">
          We apologize for the inconvenience. Please try again later.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
