import React from "react";
import img from "../assets/mobile.png";
import { Card, Col, Row } from "antd";
import { Html5Outlined, JavaOutlined } from "@ant-design/icons";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs, FaReact } from "react-icons/fa";

export default function Mobile() {
  return (
    <div className="container">
      <div className="  w-full h-full justify-center">
        <div className="p-6 m-8 mb-4 justify-center   bg-red-50 rounded-full ">
          <h2 className="text-center mt-3 text-2xl text-black font-bold uppercase">
            Mobile App Development
          </h2>
        </div>
        <div>
          <Row className="  p-5">
            <Col span={8} className="">
              <div data-aos="zoom-in" className="order-1 sm:order-2 relative ">
                <img
                  src={img}
                  alt=""
                  className="w-full  rounded-3xl sm:max-w-[280px] md:max-w-[430px]"
                />
              </div>
            </Col>
            <Col span={16} className="">
              <Row>
                <Col span={8} className=" ">
                  <div
                    data-aos="fade-right"
                    data-aos-delay="100"
                    className="flex flex-col justify-center space-y-6 mb-3 rounded-xl"
                  >
                    <div className="">
                      <div className="font-medium  text-lg"></div>
                      <div className=" w-full">
                        <p className="text-[15px]">
                          The retail industry has taken a giant leap after the
                          incredible success of Amazon and many other shopping
                          platforms around the world. of the total global retail
                          purchase. At present, more than 2 billion worldwide
                          users actively shop online which is the most efficient
                          reason why you need to consider eCommerce development
                          & marketing for your business.
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col span={8} className=" m-6">
                  <div
                    data-aos="fade-right"
                    data-aos-delay="100"
                    className="flex flex-col items-center justify-center "
                  >
                    <div className="text-center font-bold text-[20px]">
                      Technologies
                    </div>
                    <Row gutter={[16, 16]}>
                      <Col span={8}>
                        <Card hoverable>
                          <Html5Outlined style={{ fontSize: 24 }} />
                          <p>HTML5</p>
                        </Card>
                      </Col>
                      <Col span={8}>
                        <Card hoverable>
                          <IoLogoCss3 style={{ fontSize: 24 }} />
                          <p>CSS3</p>
                        </Card>
                      </Col>
                      <Col span={8}>
                        <Card hoverable>
                          <IoLogoJavascript style={{ fontSize: 24 }} />
                          <p>JavaScript</p>
                        </Card>
                      </Col>
                      <Col span={8}>
                        <Card hoverable>
                          <FaReact style={{ fontSize: 24 }} />
                          <p>React</p>
                        </Card>
                      </Col>
                      <Col span={8}>
                        <Card hoverable>
                          <FaNodeJs style={{ fontSize: 24 }} />
                          <p>Node.js</p>
                        </Card>
                      </Col>
                      <Col span={8}>
                        <Card hoverable>
                          <JavaOutlined style={{ fontSize: 24 }} />
                          <p>Java</p>
                        </Card>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
