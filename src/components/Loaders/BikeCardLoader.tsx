const BikeCardLoader = () => {
    return (
      <div className="bg-white p-4 rounded-xl font-SpaceGrotesk shadow-lg animate-pulse">
        <div className="bg-gray-200 p-3 rounded-t-xl relative h-44">
          {/* Placeholder for the image */}
          <div className="bg-gray-300 h-full w-full rounded"></div>
        </div>
  
        <div className="flex items-center justify-between mt-2">
          {/* Placeholder for bike name */}
          <div className="bg-gray-300 h-6 w-1/2 rounded"></div>
  
          {/* Placeholder for availability status */}
          <div className="bg-gray-300 h-6 w-20 rounded"></div>
        </div>
  
        {/* Placeholder for description */}
        <div className="mt-1 space-y-2">
          <div className="bg-gray-300 h-4 w-3/4 rounded"></div>
          <div className="bg-gray-300 h-4 w-2/4 rounded"></div>
        </div>
  
        <div className="flex items-center gap-5 mt-4">
          {/* Placeholder for buttons */}
          <div className="bg-gray-300 h-10 w-24 rounded"></div>
          <div className="bg-gray-300 h-10 w-24 rounded"></div>
        </div>
      </div>
    );
  };
  
  export default BikeCardLoader;
  