import Img from "../ui/Img";
import MainTitle from "../common/main/MainTitle";

import oilfieldImg from "../../assets/about/Oilfield.jpeg"

type OurJourneyCard = {
    id: number;
    name: string;
    number: number;
};

const ourJourneyCards: OurJourneyCard[] = [
    {
        id: 1,
        name: "Satisfied Clients",
        number: 200
    },
    {
        id: 2,
        name: "Projects Completed",
        number: 150
    },
    {
        id: 3,
        name: "Years of Experience",
        number: 10
    }
];

const OurJourney = () => {
  return (
    <div className="flex justify-between items-center gap-6 py-4 max-md:flex-col">
      <div className="content flex flex-col flex-1 gap-4 ">

        <MainTitle title="Our Journey">
          At OilfieldTools, we take pride in delivering top-notch solutions for the oilfield industry. With years of experience and a dedicated team, we have successfully completed numerous projects and served a wide range of clients.
        </MainTitle>

        <div className="cards flex justify-center gap-2 items-center">
          {ourJourneyCards.map((card) => (
            <div key={card.id} className="card flex-1 p-3 bg-section-color border-color-border border space-y-2 rounded">
              <p className="text-color-text-1 text-xl font-semibold">{card.number}+</p>
              <p className="text-color-text-2 text-xs">{card.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="image flex-1 border-color-border border-2 rounded-md overflow-hidden">
        <Img
          className="w-full h-full"
          src={oilfieldImg}
          alt="Our Journey in Oilfield Tools"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default OurJourney;