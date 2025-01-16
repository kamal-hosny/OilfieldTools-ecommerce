import React from "react";
import MainTitle from "../common/main/MainTitle";

// Define a type for achievements
type Achievement = {
  title: string;
  description: string;
};

const OurAchievements: React.FC = () => {
  const achievements: Achievement[] = [
    {
      title: "3+ Years of Industry Leadership",
      description:
        "With over three years in the oilfield tools industry, we’ve built a reputation for reliability, quality, and innovation in tool manufacturing and services.",
    },
    {
      title: "Trusted by Clients Worldwide",
      description:
        "Our client base spans across the globe, reflecting our commitment to delivering top-notch tools, equipment, and services that meet the diverse needs of the oilfield industry.",
    },
    {
      title: "Industry Recognition & Awards",
      description:
        "Recognized for our excellence in the oilfield tools sector, we have earned multiple industry awards for product innovation and customer service.",
    },
  ];

  return (
    <div className="flex flex-col gap-6 py-4">
      <MainTitle title="Our Achievements">
        Over the years, we have expanded our reach and capabilities in the oilfield tools industry. From a small team to a leading provider, our mission remains focused on delivering quality products and exceptional service to meet the needs of our customers.
      </MainTitle>
      <div className="cards grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="card px-4 py-6 space-y-3 border-color-border border-2 rounded shadow-xl bg-section-color"
          >
            <div className="title text-color-text-1 font-medium text-lg">
              {achievement.title}
            </div>
            <div className="title text-color-text-2 text-xs leading-6">
              {achievement.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurAchievements;
