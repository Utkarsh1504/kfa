const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-8">Oops! Page not found.</p>
        <a href="/" className="text-blue-500 hover:underline">
          Go back to home page
        </a>
      </div>
    </div>
  );
};

export default PageNotFound;
