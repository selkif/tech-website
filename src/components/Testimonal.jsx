import React from "react";
import { Carousel } from "antd";
import { reviews } from "./reviewData";
import Quote from "../assets/blockquote.svg";

const Testimonial = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Testimonial</h2>
          <p className="text-gray-600">What members are saying.</p>
        </div>

        <Carousel
          autoplay
          dots={false}
          prevArrow={<PrevArrow />}
          nextArrow={<NextArrow />}
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg shadow-md px-8 py-6 relative"
            >
              <img
                src={Quote}
                alt="quote"
                className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4"
              />
              <img
                src={Quote}
                alt="quote"
                className="absolute bottom-0 right-0 transform rotate-180 translate-x-4 translate-y-4"
              />
              <img
                src={review.image}
                alt="reviewer"
                className="mx-auto mb-4 w-24 h-24 rounded-full object-cover"
              />
              <p className="text-gray-700 text-center mb-4">{review.text}</p>
              <div className="flex items-center justify-center">
                <div className="text-yellow-500 mr-2">
                  {Array.from({ length: 4 }, (_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                  <i className="far fa-star"></i>
                </div>
                <span className="text-gray-700 font-semibold">
                  {review.name}
                </span>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

const PrevArrow = (props) => (
  <div
    {...props}
    className="bg-white rounded-full shadow-md p-2 absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 cursor-pointer"
  >
    <i className="fas fa-chevron-left text-gray-600"></i>
  </div>
);

const NextArrow = (props) => (
  <div
    {...props}
    className="bg-white rounded-full shadow-md p-2 absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 cursor-pointer"
  >
    <i className="fas fa-chevron-right text-gray-600"></i>
  </div>
);

export default Testimonial;
