import React, { useEffect, useRef } from "react";

const ParallaxArrow = () => {
  const arrowRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Move slowly: adjust multiplier (smaller = slower)
      const translateY = scrollY * 0.1; 
      if (arrowRef.current) {
        arrowRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="absolute top-0 right-34 w-8 -translate-x-1/2 z-0 pointer-events-none select-none">
      <img
        ref={arrowRef}
        className="w-24 opacity-80"
        src="https://kbillpay.com/assets/front/images/shapes/shape_arrow_1.webp"
        alt="Arrow Down"
      />
    </div>
  );
};

export default ParallaxArrow;
