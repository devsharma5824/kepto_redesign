import React from "react";

const WhyChooseUs = () => {
  return (
    // Full-width black background wrapper
    <div className="w-full bg-black flex justify-center items-center pt-16">
      {/* Gradient inner box (takes 95% width) */}
      <div
        style={{
          background: "linear-gradient(120deg, #2a0450, #0d0120)",
        }}
        className="relative flex flex-col justify-center items-center w-[96%] py-10 md:py-30 mx-auto rounded-4xl overflow-hidden"
      >
        <div className="w-full px-6 md:px-20 z-2">
          <div className="text-center py-4">
            <span className="bg-neutral-800 text-lime-300 rounded-md text-sm font-medium px-3 py-1">
              WHY CHOOSE US
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl mt-6 lg:mt-10 font-bold">
              Elevate Your Payments with Us
            </h2>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center text-center gap-6 lg:gap-4 mt-6 lg:mt-10 pb-6 z-1">
          {/* Box 1 */}
          <div className="flex flex-col items-center w-full md:w-1/2 lg:w-1/4">
            <div
              className="w-34 h-34 flex items-center justify-center rounded-full bg-cover bg-center mb-4"
              style={{
                backgroundImage:
                  "url('https://kbillpay.com/assets/front/images/shapes/shape_1.webp')",
              }}
            >
              <img
                src="https://kbillpay.com/assets/front/images/icons/icon_browser.svg"
                alt="icon Browser"
                className="w-10 h-10"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast &amp; Secure</h3>
            <p className="text-white text-sm">
              Prioritizing Expediency, Safety in Every Transaction.
            </p>
          </div>

          {/* Box 2 */}
          <div className="flex flex-col items-center w-full md:w-1/2 lg:w-1/4">
            <div
              className="w-34 h-34 flex items-center justify-center rounded-full bg-cover bg-center mb-4"
              style={{
                backgroundImage:
                  "url('https://kbillpay.com/assets/front/images/shapes/shape_2.webp')",
              }}
            >
              <img
                src="https://kbillpay.com/assets/front/images/icons/icon_chat.svg"
                alt="icon Chat"
                className="w-10 h-10"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Live Support</h3>
            <p className="text-white text-sm">
              24/7 Live Assistance: Support Always Available
            </p>
          </div>

          {/* Box 3 */}
          <div className="flex flex-col items-center w-full md:w-1/2 lg:w-1/4">
            <div
              className="w-34 h-34 flex items-center justify-center rounded-full bg-cover bg-center mb-4"
              style={{
                backgroundImage:
                  "url('https://kbillpay.com/assets/front/images/shapes/shape_3.webp')",
              }}
            >
              <img
                src="https://kbillpay.com/assets/front/images/icons/icon_api.svg"
                alt="icon API"
                className="w-10 h-10"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Reliable refund support
            </h3>
            <p className="text-white text-sm">
              Tailored API Customized Solutions for You
            </p>
          </div>

          {/* Box 4 */}
          <div className="flex flex-col items-center w-full md:w-1/2 lg:w-1/4">
            <div
              className="w-34 h-34 flex items-center justify-center rounded-full bg-cover bg-center mb-4"
              style={{
                backgroundImage:
                  "url('https://kbillpay.com/assets/front/images/shapes/shape_2.webp')",
              }}
            >
              <img
                src="https://kbillpay.com/assets/front/images/icons/icon_layer.svg"
                alt="icon Layer"
                className="w-10 h-10"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              Trusted Business Partner
            </h3>
            <p className="text-white text-sm">
              Automated Workflow Processes for Efficiency
            </p>
          </div>
        </div>

        <img
          className="absolute top-0 left-0 -translate-x-[60%] -translate-y-[35%] max-w-none pointer-events-none select-none z-0 scale-x-[-1]"
          src="https://kbillpay.com/assets/front/images/shapes/shape_nate_16.svg"
          alt="Shape Nate"
        />
        <img
          className="absolute top-0 right-0 translate-x-[60%] -translate-y-[20%] rotate-10 max-w-none pointer-events-none select-none z-0"
          src="https://kbillpay.com/assets/front/images/shapes/shape_nate_15.svg"
          alt="Shape Nate"
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
