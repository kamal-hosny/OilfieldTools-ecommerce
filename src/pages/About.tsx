import { Banner, OurAchievements, OurJourney, OurValues } from "../components/About";
import Breadcrumb from "../components/Products/Breadcrumb";

const breadcrumbItems = [
  { label: "Home", link: "/" },
];

const About = () => {
  return (
    <div className="about">
      <div className="container mx-auto px-6 p-y space-y-20">
      <Breadcrumb items={breadcrumbItems} itemNow={"About"} />
        <OurJourney />
        <OurValues />
        <OurAchievements />
        <Banner />
      </div>
    </div>
  );
};

export default About;
