const DashboardStatusHeroLoader = () => {
  return (
    <div className="bg-dark-5/40 rounded-lg font-SpaceGrotesk shadow flex items-center justify-between p-5 animate-pulse">
      <div className="max-w-[800px] space-y-3">
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        <div className="h-10 bg-gray-300 rounded w-40 mt-4"></div>
      </div>
      <div className="bg-gray-300 rounded-full h-32 w-32"></div>
    </div>
  );
};

export default DashboardStatusHeroLoader;
