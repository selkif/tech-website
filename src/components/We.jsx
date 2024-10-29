import React from "react";
import Img3 from "../assets/mobile.png";

export default function We() {
  return (
    <div
      className="container relative h-screen"
      style={{ backgroundImage: `url(${Img3})`, backgroundSize: "cover" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center ">
        <div className="m-8 text-3xl text-gray-800 font-serif font-bold bg-gray-50">
          <h2>Bringing ideas & Excellence Together</h2>
        </div>
        <div className="inline-block mb-8 w-[580px] text-center rounded-3xl p-4 bg-pink-50">
          <h3 className="font-serif text-pink-300">Who We Are</h3>
          <p>
            We are a leading IT and Software Solutions company in India that
            caters to rising ventures from various business territories become
            future-ready with the right technology stack.
          </p>
        </div>
        <div className="w-[580px] mb-8 text-center   rounded-3xl p-4 bg-pink-50">
          <h3>Why Choose US</h3>
          <p className="">
            We endeavor to deliver quality & credibility while customizing our
            budget-friendly mobile app development services for eCommerce,
            eLearning, and custom enterprise development.
          </p>
        </div>
        <div className="w-[580px] text-center   rounded-3xl p-4 bg-pink-50">
          <h3>Areas of Expertise</h3>
          <p>
            All-encompassing mobile app development & marketing, eCommerce
            development, eLearning development, social media management, PPC
            advertising, and in-house sales management.
          </p>
        </div>
      </div>
    </div>
  );
}
