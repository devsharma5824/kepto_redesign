import React, { useEffect, useState } from "react";
import catGif from "../../assets/Cat.gif";

const LoadingScreen = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 3500);
    const cleanup = setTimeout(() => {
      const loader = document.getElementById("loading-screen");
      if (loader) loader.style.display = "none";
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(cleanup);
    };
  }, []);

  return (
    <div
      id="loading-screen"
      className={`fixed inset-0 flex flex-col items-center justify-center bg-black z-9999 transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* 🐱 Centered running cat GIF */}
      <img
        src={catGif}
        alt="Running Cat"
        className="w-40 h-40 filter brightness-200 drop-shadow-[0_0_10px_white]"
      />
    </div>
  );
};

export default LoadingScreen;
