const Loader = () => {
  return (
    <div className=" h-screen flex items-center justify-center p-4 bg-slate-800">
      <p className="  border border-white text-white p-4 rounded-md">
        Loading... The server is in hibernation mode. The first load may take
        around 30 seconds.
      </p>
    </div>
  );
};

export default Loader;
