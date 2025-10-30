import React, { useState, useRef, useEffect } from "react";
import ParallaxArrow2 from "../effects/ParallaxArrow2";

const PaymentSolution = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [heights, setHeights] = useState([]);
  const contentRefs = useRef([]);

  useEffect(() => {
    // Measure height of each content element once mounted
    const newHeights = contentRefs.current.map((el) => el?.scrollHeight || 0);
    setHeights(newHeights);
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "BBPS",
      icon: "https://kbillpay.com/assets/front/images/icons/icon_box.svg",
      content:
        "Enabling seamless and secure bill payments across utilities and services. Trusted by businesses for fast, hassle-free transactions.",
    },
    {
      title: "Education",
      icon: "https://kbillpay.com/assets/front/images/icons/icon_graduation_cap.svg",
      content:
        "Simplifying fee payments and financial processes for students and institutions. Helping education thrive with efficient solutions.",
    },
    {
      title: "Rent",
      icon: "https://kbillpay.com/assets/front/images/icons/icon_gadget.svg",
      content:
        "Streamlining rent collections with reliable, transparent, and automated payment systems. Empowering landlords and tenants alike.",
    },
    {
      title: "PAAS",
      icon: "https://kbillpay.com/assets/front/images/icons/icon_devices.svg",
      content:
        "Delivering smooth payment access and settlement services for diverse business needs. Your partner for smarter financial workflows.",
    },
  ];

  return (
    <div className="relative flex flex-col justify-center items-center pb-10 md:pb-20 mt-12 pt-10 md:pt-20 md:max-w-8xl bg-black text-white">
      <div className="flex flex-col lg:flex-row items-center justify-around w-full px-6 lg:px-16 z-1 ">
        <div className="flex flex-col lg:w-1/2 w-full">
          {/* Heading */}
          <div className="py-4 text-start">
            <span className="bg-neutral-900 text-lime-300 rounded-md text-sm font-medium px-3 py-1">
              PAYMENT SOLUTION
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl mt-6 lg:mt-10 font-bold">
              Powering Every Industry.
            </h2>
          </div>

          {/* Accordion */}
          <div className="mt-8 space-y-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="border border-lime-400/40 rounded-xl overflow-hidden bg-neutral-900/60 transition-all"
              >
                {/* Button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center gap-4 text-left px-5 py-4 hover:bg-lime-950/30 transition-all"
                >
                  <span className="w-8 h-8 flex items-center justify-center">
                    <img src={item.icon} alt={item.title} />
                  </span>
                  <span className="font-medium text-lg">{item.title}</span>
                </button>

                {/* Content */}
                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className="px-5 overflow-hidden text-sm text-gray-400 transition-all duration-500 ease-in-out"
                  style={{
                    maxHeight:
                      openIndex === index
                        ? `${heights[index] || "200"}px`
                        : "0px",
                  }}
                >
                  <div className="pb-5">{item.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="lg:w-5/12 w-full flex justify-center lg:justify-end items-start mt-10 lg:mt-0">
          <img
            src="https://kbillpay.com/assets/front/images/about/transactions_card_image_2.webp"
            alt="Transactions Card"
            className="w-full max-w-sm rounded-2xl shadow-lg"
          />
        </div>
      </div>
      <ParallaxArrow2 />
    </div>
  );
};

export default PaymentSolution;
