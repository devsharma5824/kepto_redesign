import React, { useEffect, useRef } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom"; 

const Login = () => {
  const canvasRef = useRef(null);
  const navigate = useNavigate(); 

  // Floating White Particles
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

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      requestAnimationFrame(draw);
    };
    draw();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  
  const handleLogin = () => {
    navigate("/"); 
  };

  return (
    <div className="relative w-full bg-[url('./assets/BG.jpg')] bg-cover bg-center rounded-b-4xl overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
      />

      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center my-6 lg:my-20 border border-gray-700 rounded-lg p-6 w-full max-w-md bg-zinc-900 dark:border-gray-700">
          <form className="p-3 w-full">
            <h3 className="text-center my-6 text-xl font-semibold text-gray-900 dark:text-white">
              Login Here
            </h3>

            {/* Username */}
            <div className="py-5">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Username
              </label>
              <input
                type="text"
                placeholder="Email or Phone"
                id="username"
                className="mt-2 p-2 w-full border-b outline-none rounded-md bg-transparent dark:text-white focus:border-lime-300"
              />
            </div>

            {/* Password */}
            <div className="py-5">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                className="mt-2 p-2 w-full border-b outline-none rounded-md bg-transparent dark:text-white focus:border-lime-300"
              />
            </div>

            {/*  Login */}
            <div className="flex items-center cursor-pointer">
              <button
                type="button"
                onClick={handleLogin} 
                className="w-full cursor-pointer my-2 py-2
                  relative flex items-center justify-center 
                  text-lg text-gray-300 
                  bg-neutral-800 
                  p-2 rounded-lg 
                  overflow-hidden
                  transition-all duration-300
                  group"
              >
                <span
                  className="absolute inset-0 rounded-lg 
                    bg-white
                    opacity-0 scale-0 
                    group-hover:opacity-100 group-hover:scale-100 
                    transition-all duration-300"
                ></span>

                <span className="w-full relative z-10 group-hover:text-black transition-colors duration-300 px-2">
                  Log In
                </span>
              </button>
            </div>

            {/* Social Logins */}
            <div className="flex justify-center gap-5 items-center mx-4 my-4">
              <a
                href="#!"
                className="relative flex items-center justify-center 
                  text-lg text-gray-300 
                  bg-neutral-800 
                  p-2 rounded-lg 
                  overflow-hidden
                  transition-all duration-300
                  group"
              >
                <span
                  className="absolute inset-0 rounded-lg 
                    bg-white
                    opacity-0 scale-0 
                    group-hover:opacity-100 group-hover:scale-100 
                    transition-all duration-300"
                ></span>
                <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                  <FaXTwitter />
                </span>
                <span className="relative z-10 group-hover:text-black transition-colors duration-300 px-2">
                  Twitter
                </span>
              </a>

              <a
                href="#!"
                className="relative flex items-center justify-center 
                  text-lg text-gray-300 
                  bg-neutral-800 
                  p-2 rounded-lg 
                  overflow-hidden
                  transition-all duration-300
                  group"
              >
                <span
                  className="absolute inset-0 rounded-lg 
                    bg-white
                    opacity-0 scale-0 
                    group-hover:opacity-100 group-hover:scale-100 
                    transition-all duration-300"
                ></span>
                <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                  <FaGoogle />
                </span>
                <span className="relative z-10 group-hover:text-black transition-colors duration-300 px-2">
                  Google
                </span>
              </a>
            </div>

            {/* Sign Up Route */}
            <div className="py-2 text-center text-gray-300">
              <span>Not a member?</span>
              <Link
                to="/signup"
                className="text-white underline mx-2 hover:text-lime-300"
              >
                Sign Up
              </Link>
              <span>here !!</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
