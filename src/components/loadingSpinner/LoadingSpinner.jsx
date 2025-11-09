import { RingLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <RingLoader color="#4388C9" />
    </div>
  );
};

export default LoadingSpinner;
