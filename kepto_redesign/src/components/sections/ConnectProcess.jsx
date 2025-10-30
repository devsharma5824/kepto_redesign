import React from "react";
import triangle from "../../assets/triangle.png";
import logo from "../../assets/Pi7_Logo.png";
import ParallaxArrow from "../effects/ParallaxArrow";

const ConnectProcess = () => {
  return (
    <div className="relative flex flex-col justify-center items-center pb-10 md:pb-20 mt-12 pt-10 md:pt-20 md:max-w-8xl mx-auto rounded-4xl overflow-hidden">
      <div className="text-center py-4 z-2">
        <span className="bg-neutral-800 text-lime-300 rounded-md text-sm font-medium px-3 py-1">
          CONNECT PROCESS
        </span>
        <h2 className="text-xl sm:text-4xl lg:text-4xl mt-6 lg:mt-10 font-bold">
          How To Connect With Us
        </h2>
      </div>
      <div className="my-10 md:mb-0 md:mt-20 w-[80%] flex justify-center z-1">
        <div className="logo w-50 bg-black px-8 py-6 text-center rounded-lg border border-purple-400">
          <a>
            <img className="" src={logo} alt="" />
          </a>
        </div>
      </div>

      <div className="md:flex justify-center text-center hidden ">
        <div className="w-10 md:w-3/5">
          <div className="flex justify-center md:-mt-6 z-0">
            <img
              src="https://kbillpay.com/assets/front/images/shapes/process_line_shape_1.webp"
              alt="Process Line Shape"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className=" flex flex-col md:flex-row justify-center items-start text-center lg:text-left md:-mt-24 z-1 gap-10">
        {/* Step 1 */}
        <div className="flex justify-center lg:justify-start w-full lg:w-1/3 px-2">
          <div className="flex items-start gap-4 max-w-sm  bg-black h-45 p-10 md:p-6 lg:p-10 rounded-lg border border-purple-300">
            <div className="block_number text-4xl font-extrabold bg-linear-to-b from-lime-400 via-yellow-400 to-purple-600 text-transparent bg-clip-text opacity-80">
              1
            </div>

            <div className="iconbox_content">
              <h3 className="text-base lg:text-lg font-medium leading-snug">
                Reach out to our team for expert support and tailored solutions.
              </h3>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex justify-center lg:justify-start w-full lg:w-1/3 px-2">
          <div className="flex items-start gap-4 max-w-sm  bg-black h-45 p-10 md:p-6 lg:p-10 rounded-lg border border-purple-300">
            <div className="block_number text-4xl font-extrabold bg-linear-to-b from-lime-400 via-yellow-400 to-purple-600 text-transparent bg-clip-text opacity-80">
              2
            </div>
            <div className="iconbox_content">
              <h3 className="text-base lg:text-lg font-medium leading-snug">
                Complete your KYC to ensure secure, compliant, and seamless
                service access.
              </h3>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex justify-center lg:justify-start w-full lg:w-1/3 px-2 ">
          <div className="flex items-start gap-4 max-w-sm  bg-black h-45 p-10 md:p-6 lg:p-10 rounded-lg border border-purple-300">
            <div className="block_number text-4xl font-extrabold bg-linear-to-b from-lime-400 via-yellow-400 to-purple-600 text-transparent bg-clip-text opacity-80">
              3
            </div>
            <div className="iconbox_content">
              <h3 className="text-base lg:text-lg font-medium leading-snug">
                Initiate transactions effortlessly and enjoy uninterrupted
                service.
              </h3>
            </div>
          </div>
        </div>
      </div>

      <ParallaxArrow />

      <img
        className="absolute w-80 top-20 left-20 max-w-none pointer-events-none select-none z-0 animate-[infinite-roam-rotate_60s_linear_infinite] origin-center"
        src={triangle}
        alt="Shape Nate"
      />
      <img
        className="absolute w-60 bottom-0 right-10 max-w-none pointer-events-none select-none z-0 animate-[infinite-roam-rotate_60s_linear_infinite] origin-center"
        src={triangle}
        alt="Shape Nate"
      />
    </div>
  );
};

export default ConnectProcess;
