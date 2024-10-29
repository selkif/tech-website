import React from "react";
import { Card, Col, Row } from "antd";
import { FaHandPointer } from "react-icons/fa";
import { FaRegFaceSmile } from "react-icons/fa6";
import { IoIosPricetags } from "react-icons/io";
import who from "../assets/website/who.jpg";

export default function Who() {
  return (
    <div className="container">
      <div className="  w-full h-full justify-center">
        <div className="p-8 m-12 mb-4 justify-center   bg-red-50 rounded-full ">
          <h2 className="text-center mt-3 text-2xl text-black font-bold uppercase">
            what we promise
          </h2>
        </div>
        <div>
          <Row className=" m-8 p-5">
            <Col span={12} className="">
              <Row>
                <Col span={7} className=" m-8">
                  <Card
                    data-aos="fade-right"
                    data-aos-delay="100"
                    className="flex flex-col justify-center space-y-6 mb-3 rounded-xl"
                    bodyStyle={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      padding: "1rem",
                      border: "red",
                    }}
                  >
                    <div className=" mb-6">
                      <FaHandPointer className="text-4xl  text-red-400" />
                    </div>
                    <div className="text-center">
                      <Card.Meta
                        title={
                          <div className="font-bold text-lg">
                            Dedicated Support
                          </div>
                        }
                      />
                    </div>
                  </Card>
                  <Card
                    data-aos="fade-right"
                    data-aos-delay="100"
                    className="flex flex-col items-center justify-center space-y-6"
                    bodyStyle={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      padding: "1rem",
                      border: "red",
                    }}
                  >
                    <div className="flex justify-center items-center mb-6">
                      <FaRegFaceSmile className="text-4xl text-red-400" />
                    </div>
                    <div className="text-center">
                      <Card.Meta
                        title={
                          <div className="font-bold text-lg">
                            Satisfied Clients
                          </div>
                        }
                      />
                    </div>
                  </Card>
                </Col>

                <Col span={7} className=" m-8">
                  <Card
                    data-aos="fade-right"
                    data-aos-delay="100"
                    className="flex flex-col items-center justify-center space-y-6"
                    bodyStyle={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      padding: "1rem",
                      border: "red",
                    }}
                  >
                    <div className="flex justify-center items-center mb-6">
                      <IoIosPricetags className="text-4xl text-red-400" />
                    </div>
                    <div className="text-center">
                      <Card.Meta
                        title={
                          <div className="font-bold text-lg">
                            White-Label Solutions
                          </div>
                        }
                      />
                    </div>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col span={12} className="">
              <div data-aos="zoom-in" className="order-1 sm:order-2 relative ">
                <img
                  src={who}
                  alt=""
                  className="w-full  rounded-3xl sm:max-w-[280px] md:max-w-[430px]"
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
