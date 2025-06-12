import MensajeLoader from "./MensajeLoader";

const Loader = () => {
  return (
    <div className=" h-screen flex items-center justify-center p-4 bg-slate-800">
      <MensajeLoader className="  border border-white text-white p-4 rounded-md" />
    </div>
  );
};

export default Loader;
