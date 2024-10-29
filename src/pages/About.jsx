import React from "react";

// Import team member images
import teamMember1 from "../assets/teamone.jpg";
import teamMember2 from "../assets/teamtwo.jpg";
import teamMember3 from "../assets/team3.jpg";

const About = () => {
  const teamMembers = [
    {
      name: "John Doe",
      position: "CEO",
      image: teamMember1,
    },
    {
      name: "Jane Smith",
      position: "CTO",
      image: teamMember2,
    },
    {
      name: "Michael Johnson",
      position: "CFO",
      image: teamMember3,
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto mb-4 py-16">
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-gray-700">
            Welcome to our IT company! We are dedicated to providing
            cutting-edge technology solutions to businesses of all sizes.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-700">
            Our vision is to revolutionize the way businesses operate by
            leveraging the power of technology. We strive to empower our clients
            with innovative solutions that drive efficiency, productivity, and
            growth.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Our History</h2>
          <p className="text-gray-700">
            Founded in 2010, our company has grown from a small startup to a
            leading provider of IT services. Over the years, we have built a
            reputation for delivering high-quality solutions and exceptional
            customer service. Our team of experts is constantly exploring new
            technologies and staying ahead of the curve to ensure we provide our
            clients with the most advanced and reliable solutions.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-gray-700">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
