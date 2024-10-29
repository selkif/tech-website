import React from "react";
import { List, Card, Button } from "antd";

const data = [
  {
    title: "silver Plan",
    content: [
      {
        price: "£29.99",
        space: "1 GB of space",
        user: "2 Mockups",
        support: "24/7 support",
        backup: "Safe, reliable backup",
        access: "Access from anywhere",
        w: "Domain Registration",
        s: "1 Feedback/Inquiry Form",
      },
    ],
  },
  {
    title: "Gold Plan",
    content: [
      {
        price: "£59.99",
        space: "5 GB of space",
        user: "3 mockups",
        support: "24/7 support",
        backup: "Safe, reliable backup",
        access: "Access from anywhere",
        w: "Domain Registration",
        s: "2 Feedback/Inquiry Form",
      },
    ],
  },
  {
    title: "Diamond Plan",
    content: [
      {
        price: "£99.99",
        space: "Unlimited space",
        user: "15 users",
        support: "24/7 support",
        backup: "Safe, reliable backup",
        access: "Access from anywhere",
        w: "Domain Registration",
        s: "3 Feedback/Inquiry Form",
      },
    ],
  },
];

function AppPricing() {
  return (
    <div id="pricing" className="block bg-pink-50 py-8">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold">
            Choose a plan to fit your needs
          </h2>
        </div>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 1,
            md: 3,
            lg: 3,
            xl: 3,
            xxl: 3,
          }}
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item>
              <Card
                title={item.title}
                className={`${
                  index === 1 ? "shadow-lg transform scale-110 z-10" : ""
                }  hover:bg-red-200 hover: stroke-pink-300`}
              >
                <div className="text-center text-[15px]">
                  <div className="bg-red-100 w-24 h-24 rounded-full mx-auto flex items-center justify-center mb-4">
                    <p className="text-[22px] font-bold">
                      {item.content[0].price}
                    </p>
                  </div>

                  <p className="mb-4">{item.content[0].space}</p>
                  <p className="mb-4">{item.content[0].user}</p>
                  <p className="mb-4">{item.content[0].support}</p>
                  <p className="mb-4">{item.content[0].backup}</p>
                  <p className="mb-4">{item.content[0].access}</p>
                  <p className="mb-4">{item.content[0].w}</p>
                  <p className="mb-4">{item.content[0].s}</p>
                </div>
                <div className=" justify-center text-center">
                  <Button
                    type="default"
                    size="large"
                    className="mt-4 bg-red-200 mr-3flex items-center justify-center hover:bg-slate-100 "
                  >
                    <i className="fas fa-paper-plane  "></i>
                    Get Started
                  </Button>
                </div>
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default AppPricing;
