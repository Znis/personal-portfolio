import { useEffect } from "react";
import { preLoaderAnim } from "../animations";
import "../utils/index.css";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div className="text-container">
        <span>Hi There ! 😸 </span>
      </div>
    </div>
  );
};

export default PreLoader;
