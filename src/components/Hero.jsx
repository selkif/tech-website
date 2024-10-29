import React from "react";
import hero from "../assets/website/hero.jpg";
import Img3 from "../assets/we.jpg";

const Hero = () => {
  return (
    <div
      className="container relative h-screen  dark:text-red-100 "
      style={{ backgroundImage: `url(${Img3})`, backgroundSize: "cover" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center "></div>
      <div className="container min-h-[620px] flex flex-col justify-center items-center mt-10 sm:mt-0">
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {/* Image section */}
          {/* <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
            <img
              src={hero}
              alt=""
              className="w-full  rounded-3xl sm:max-w-[280px] md:max-w-[430px]"
            />
          </div>*/}

          {/* Text section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-40  text-white text-center">
            <p className="text-4xl  font-bold m-9">
              Custom App Development <br /> Company
            </p>
            <p
              className="text-lg font-sans m-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Thixpro Technologies Private Limited providing mobile app
              development & Ready-made app <br />
              clone scripts & source code provider company Want to Build an App
              or Need a Complete Ready made app clone solution? <br />
              Get MVP Mobile App Development Solution as per your Business
              requirement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
