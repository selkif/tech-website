import { Row, Col, Card } from "antd";
import React from "react";
import { Typography } from "antd";
import { BsCodeSlash, BsDatabaseFill, BsCart4 } from "react-icons/bs";
import { MobileOutlined } from "@ant-design/icons";
import { BiSolidJoystick } from "react-icons/bi";
const { Paragraph, Text } = Typography;
import hero from "../assets/website/hero.jpg";

export default function Services() {
  return (
    <div className=" h-full w-full bg-red-300 text-cyan-400 mt-12">
      <div className="container">
        <Row className="flex flex-col lg:flex-row  mx-12">
          <Col className=" lg:w-[40%]   relative  px-4 py-8">
            <h2
              data-aos="zoom-in"
              className="text-purple-950 inline-block text-3x1 font-bold uppercase bg-white p-2 mr-4 rounded-full"
            >
              Our Services
            </h2>
            <br />
            <h4
              data-aos="zoom-in"
              className=" mt-8 text-white inline-block font-bold uppercase text-center text-30"
            >
              We Are Providing Digital Services
            </h4>
            <br />

            <div className="mt-8">
              <Card
                hoverable
                data-aos="fade-right"
                data-aos-delay="100"
                className="flex flex-col items-center justify-center space-y-6  hover:bg-red-100"
                bodyStyle={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "1rem",
                  border: "red",
                }}
              >
                <div className="flex justify-center items-center mb-6">
                  <BsCart4 className="text-4xl text-red-300" />
                </div>
                <div className="text-center">
                  <Card.Meta
                    title={
                      <div className="font-bold text-lg">
                        E-commerce Development
                      </div>
                    }
                    description={
                      <div>
                        We build fully responsive and user-friendly websites to
                        provide commendable online shopping website solutions.
                      </div>
                    }
                  />
                </div>
              </Card>
            </div>
            <div className="mt-8">
              <Card
                hoverable
                data-aos="fade-right"
                data-aos-delay="100"
                className="flex flex-col items-center justify-center space-y-4  hover:bg-red-100"
                bodyStyle={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "1rem",
                }}
              >
                <div className="flex justify-center items-center mb-6">
                  <BsDatabaseFill className="text-4xl text-red-300" />
                </div>
                <div className="text-center">
                  <Card.Meta
                    title={
                      <div className="font-bold text-lg">RPA Solutions</div>
                    }
                    description={
                      <div>
                        We help organizations build automated solutions focused
                        on achieving cost reduction and reimagining processes to
                        create intuitive systems.
                      </div>
                    }
                  />
                </div>
              </Card>
            </div>
          </Col>

          {/* right part*/}
          <Col className=" mt-6 relative  px-12 py-15  h-full lg:w-[50%] ">
            <div className="mt-8">
              <Card
                hoverable
                data-aos="fade-left"
                data-aos-delay="400"
                className="flex flex-col items-center justify-center space-y-4  hover:bg-red-100 "
                bodyStyle={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "1rem",
                }}
              >
                <div className="flex justify-center items-center mb-6">
                  <BsCodeSlash className="text-4xl text-red-300" />
                </div>
                <div className="text-center">
                  <Card.Meta
                    title={
                      <div className="font-bold text-lg">Web Development</div>
                    }
                    description={
                      <div>
                        The design of the website has to be catchy and at the
                        same time, it should be simple
                      </div>
                    }
                  />
                </div>
              </Card>
            </div>
            <div className="mt-8">
              <Card
                hoverable
                data-aos="fade-left"
                data-aos-delay="400"
                className="flex flex-col items-center justify-center space-y-4  hover:bg-red-100"
                bodyStyle={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "1rem",
                }}
              >
                <div className="flex justify-center items-center mb-6">
                  <MobileOutlined className="text-4xl text-red-300" />
                </div>
                <div className="text-center">
                  <Card.Meta
                    title={
                      <div className="font-bold text-lg">
                        Mobile App Development
                      </div>
                    }
                    description={
                      <div>
                        We provide mobile app development services to start-ups
                        to enterprise-level companies..
                      </div>
                    }
                  />
                </div>
              </Card>
            </div>
            <div className="mt-8">
              <Card
                hoverable
                data-aos="fade-left"
                data-aos-delay="500"
                className="flex flex-col items-center justify-center space-y-4  hover:bg-red-100"
                bodyStyle={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "1rem",
                }}
              >
                <div className="flex justify-center items-center mb-6 px-4">
                  <BiSolidJoystick className="text-4xl text-red-300" />
                </div>
                <div className="text-center">
                  <Card.Meta
                    title={
                      <div className="font-bold text-lg">
                        Game App Development
                      </div>
                    }
                    description={
                      <div>
                        Our certified gaming software development experts can
                        create your video game project from scratch or revamp
                        existing solutions with updates and integration.
                      </div>
                    }
                  />
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
