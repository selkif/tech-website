import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "tailwindcss/tailwind.css";
// import l1 from "../assets/c1.png"
// import l2 from "../assets/c2.png"
// import l3 from  "../assets/c3.png"
// import l4 from  "../assets/c4.png"
// import l5 from  "../assets/c5.png"
// import l6 from  "../assets/c6.png"
import gsap from "gsap";
import ScrollTriggerPlugin from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTriggerPlugin);

const MMainComponent = () => {
  const [counterOn, setCounterOn] = useState(false);

  useEffect(() => {
    gsap.utils.toArray(".counter").forEach((counter) => {
      gsap.fromTo(
        counter,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: counter,
            start: "top 75%",
            end: "top 25%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="w-full min-h-full flex flex-col bg-gray-100">
      {/* About Us Section */}

      {/* Counter Section */}
      <div className="container mx-auto  my-2  p-4 flex flex-col items-center">
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="flex flex-wrap gap-5 justify-center">
            <div className="counter bg-red-400 text-white flex-1 min-w-[200px] md:min-w-[200px] p-2 text-center border rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <h1 className="text-[20px] md:text-4xl font-bold">
                {counterOn && <CountUp start={550} end={600} duration={2} />} +
              </h1>
              <h2 className="text-lg md:text-4x1 font-medium mt-2">Projects</h2>
            </div>
            <div className="counter bg-red-400 text-white flex-1 min-w-[200px] md:min-w-[200px] p-2 text-center border rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <h1 className="text-3xl md:text-5xl font-bold">
                {counterOn && <CountUp start={190} end={200} duration={2} />}+
              </h1>
              <h2 className="text-lg md:text-xl font-medium mt-2">Clients</h2>
            </div>
            <div className="counter  bg-red-400 text-white flex-1 min-w-[200px] md:min-w-[200px] p-2 text-center border rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <h1 className="text-3xl md:text-5xl font-bold">
                {counterOn && <CountUp start={0} end={10} duration={2} />} +
              </h1>
              <h2 className="text-lg md:text-xl font-medium mt-2">
                Years of Experience
              </h2>
            </div>
            <div className="counter  bg-red-400 text-white flex-1 min-w-[200px] md:min-w-[200px] p-2 text-center border rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <h1 className="text-3xl md:text-5xl font-bold">
                {counterOn && <CountUp start={0} end={96} duration={2} />} %
              </h1>
              <h2 className="text-lg md:text-xl font-medium mt-2">
                Success Rate
              </h2>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </div>
  );
};

export default MMainComponent;
