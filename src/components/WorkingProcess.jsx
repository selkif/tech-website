import React from "react";

function WorkingProcess() {
  const steps = [
    {
      title: "Idea & Conceptualization",
      icon: "💡",
      description: "Brainstorming and defining the project goals and scope.",
    },
    {
      title: "Technology Assessment",
      icon: "💻",
      description:
        "Evaluating the best technologies and tools for the project.",
    },
    {
      title: "Development",
      icon: "✍️",
      description:
        "Building the product or service according to the defined specifications.",
    },
    {
      title: "Deployment & Support",
      icon: "🖥️",
      description:
        "Launching the product and providing ongoing support and maintenance.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">
        Our Working Process
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 text-center"
          >
            <div className="text-5xl font-bold text-gray-800 mb-4">
              {step.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkingProcess;
