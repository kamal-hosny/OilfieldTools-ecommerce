import { Banner, OurAchievements, OurJourney, OurValues } from "../components/About";


const About = () => {
  return (
    <div className="about">
      <div className="container mx-auto px-6 p-y space-y-20">
        <OurJourney />
        <OurValues />
        <OurAchievements />
        <Banner />
      </div>
    </div>
  );
};

export default About;
