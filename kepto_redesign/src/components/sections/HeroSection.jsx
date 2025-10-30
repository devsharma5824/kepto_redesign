import React, { useEffect, useRef } from "react";
import { FaMedal } from "react-icons/fa";

function HeroSection() {
  const trans = "5M+";
  const cashback = "+7%";
  const canvasRef = useRef(null);

  // ⚪ Floating White Particles
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.6 + 0.2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "white";
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        // bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      requestAnimationFrame(draw);
    };
    draw();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <div className="relative w-full bg-[url('./assets/BG.jpg')] bg-cover bg-center rounded-b-4xl overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center pb-10 md:pb-20 pt-14 lg:pt-20 max-w-[80%] md:max-w-8xl mx-auto">
        <h1 className="text-xl sm:text-3xl lg:text-5xl font-bold leading-normal text-center tracking-wide cursor-default">
          Simplify Finance, Empower Growth. Secure, seamless payment solutions
          tailored for
          <span className="bg-lime-300 text-transparent bg-clip-text">
            {" "}
            Modern India.
          </span>
        </h1>

        <div className="flex flex-col md:flex-row justify-around mt-10 lg:mt-18">
          <div className="w-full md:w-1/2 text-center">
            <p className="text-sm md:text-base lg:text-lg text-center text-neutral-500 cursor-default">
              In today's fast-paced world, businesses and individuals demand
              efficient <br /> and dependable payment solutions. That's where we
              come in.
            </p>

            <div className="flex justify-center my-10">
              <a href="/contact">
                <button className="relative group overflow-hidden py-3 px-4 rounded-md font-medium cursor-pointer bg-lime-300 text-black transition-all duration-300 transform hover:scale-110 border-none">
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                    Inquire more →
                  </span>
                  <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
                </button>
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 md:text-start text-center md:pl-24">
            <ul>
              <li className="pb-6">
                <div className="pb-2 flex justify-center md:justify-start">
                  <p className="w-12 h-11 bg-neutral-900 flex items-center justify-center rounded-lg">
                    <FaMedal className="text-xl text-lime-300" />
                  </p>
                </div>
                <h4 className="pt-2 text-sm md:text-base">
                  OUR DAILY ACHIEVEMENT
                </h4>
              </li>
              <li className="pb-6">
                <div className="pb-2">
                  <p className="md:text-3xl text-xl font-bold md:pb-2">
                    {trans}
                  </p>
                </div>
                <h4 className="text-sm md:text-base">Daily Transactions</h4>
              </li>
              <li className="pb-6">
                <div className="pb-2">
                  <p className="md:text-3xl text-xl font-bold md:pb-2">
                    {cashback}
                  </p>
                </div>
                <h4 className="text-sm md:text-base">
                  Unlimited Daily Cashback
                </h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
