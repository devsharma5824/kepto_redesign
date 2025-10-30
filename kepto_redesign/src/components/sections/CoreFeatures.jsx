import React from "react";
import { FaCcVisa } from "react-icons/fa6";
import { LuScanFace } from "react-icons/lu";
import { CiCreditCard2 } from "react-icons/ci";

const CoreFeatures = () => {
  return (
    <div
      style={{ background: "linear-gradient(120deg, #8234c5, #230952)" }}
      className="relative flex flex-col justify-center items-center pb-10 md:pb-20 mt-12 pt-10 md:pt-20 lg:max-w-[96%] md:max-w-8xl mx-auto rounded-4xl overflow-hidden"
    >
      <div className="container px-20 z-2">
        <div className="text-center py-4">
          <span className="bg-neutral-800 text-lime-300 rounded-md text-sm font-medium px-3 py-1">
            CORE FEATURES
          </span>
          <h2 className="text-xl sm:text-3xl lg:text-4xl mt-6 lg:mt-10 font-bold">
            Variety of Synox Payment Methods
          </h2>
        </div>
        <div className="flex flex-wrap mt-10">
          {/* CARDS  */}
          {/* ---------- Row 1 ---------- */}
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-black p-6 md:p-7 rounded-2xl text-center w-full border border-[rgba(217,255,67,0.4)] border-b-0">
              <FaCcVisa className="text-6xl" />
            </div>
            <div className="bg-black p-6 md:p-7 rounded-2xl text-start w-full border border-[rgba(217,255,67,0.4)] border-t-0">
              <h3 className="text-2xl font-bold py-2">Visa</h3>
              <p className="leading-loose pt-2 pb-4 md:pb-6">
                Providing Convenient & Secure Payment Options for Need.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-black p-6 md:p-7 rounded-2xl text-center w-full border border-[rgba(217,255,67,0.4)] border-b-0">
              <LuScanFace className="text-6xl" />
            </div>
            <div className="bg-black p-6 md:p-7 rounded-2xl text-start w-full border border-[rgba(217,255,67,0.4)] border-t-0">
              <h3 className="text-2xl font-bold py-2">MasterCard</h3>
              <p className="leading-loose pt-2 pb-4 md:pb-6">
                Simplifying Transactions with Facial Recognition.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-black p-6 md:p-7 rounded-2xl text-center w-full border border-[rgba(217,255,67,0.4)] border-b-0">
              <CiCreditCard2 className="text-6xl" />
            </div>
            <div className="bg-black p-6 md:p-7 rounded-2xl text-start w-full border border-[rgba(217,255,67,0.4)] border-t-0">
              <h3 className="text-2xl font-bold py-2">Rupay</h3>
              <p className="leading-loose pt-2 pb-4 md:pb-6">
                Streamlining Your Purchases with Seamless Transactions.
              </p>
            </div>
          </div>

          {/* ---------- Row 2 ---------- */}
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-black p-6 md:p-7 md:py-10 rounded-2xl text-center w-full border border-[rgba(217,255,67,0.4)] border-b-0 ">
              <img
                src="https://kbillpay.com/assets/front/images/icons/icon_pay_24.svg"
                alt="Payment Card"
              ></img>
            </div>
            <div className="bg-black p-6 md:p-7  rounded-2xl text-start w-full border border-[rgba(217,255,67,0.4)] border-t-0">
              <h3 className="text-2xl font-bold py-2">UPI</h3>
              <p className="leading-loose pt-2 pb-4 md:pb-8">
                Your Trusted Partner in Secure and Seamless Transactions.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-black p-6 md:p-7 md:py-10 rounded-2xl text-center w-full border border-[rgba(217,255,67,0.4)] border-b-0">
              <img
                src="https://kbillpay.com/assets/front/images/icons/icon_google_pay.svg"
                alt="Payment Card"
              ></img>
            </div>
            <div className="bg-black p-6 md:p-7 rounded-2xl text-start w-full border border-[rgba(217,255,67,0.4)] border-t-0">
              <h3 className="text-2xl font-bold py-2">NetBanking</h3>
              <p className="leading-loose pt-2 pb-4 md:pb-8">
                Enhancing and Efficiency in Your Financial Transactions.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-black p-6 md:p-7 md:py-10 rounded-2xl text-center w-full border border-[rgba(217,255,67,0.4)] border-b-0">
              <img
                src="https://kbillpay.com/assets/front/images/icons/icon_apple_pay.svg"
                alt="Payment Card"
              ></img>
            </div>
            <div className="bg-black p-6 md:p-7 rounded-2xl text-start w-full border border-[rgba(217,255,67,0.4)] border-t-0">
              <h3 className="text-2xl font-bold py-2">Wallet</h3>
              <p className="leading-loose pt-2 pb-4 md:pb-8">
                Seamlessly Streamlining Your Financial Transactions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute top-0 right-0 translate-x-[50%] -translate-y-[35%]  max-w-none pointer-events-none select-none z-0"
        src="https://kbillpay.com/assets/front/images/shapes/shape_nate_16.svg"
        alt="Shape Nate"
      />
      <img
        className="absolute bottom-0 right-0 translate-x-[60%] translate-y-[45%] rotate-30 max-w-none pointer-events-none select-none z-0"
        src="https://kbillpay.com/assets/front/images/shapes/shape_nate_15.svg"
        alt="Shape Nate"
      />
    </div>
  );
};

export default CoreFeatures;
