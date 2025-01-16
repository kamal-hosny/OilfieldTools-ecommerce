import { GraduationCap, Star, Users } from "lucide-react";
import MainTitle from "../common/main/MainTitle";
import { ReactNode } from "react";

type OurValuesCard = {
    id: number;
    name: string;
    icon: ReactNode;
    description: string;
};

const OurValuesCards: OurValuesCard[] = [
    {
        id: 1,
        name: "Trust",
        icon: <Star className="text-[#a585f8] fill-current" />,
        description: `
        At OilfieldTools, trust is the foundation of all our dealings. We believe that building strong and lasting relationships with our clients depends on transparency and mutual respect.
        `
    },
    {
        id: 2,
        name: "Excellence",
        icon: <GraduationCap className="text-[#a585f8] fill-current" />,
        description: `
        We strive for excellence in everything we do. We are committed to providing innovative, high-quality solutions that meet the needs of the oilfield industry in the best possible way.
        `
    },
    {
        id: 3,
        name: "Client-Centric",
        icon: <Users className="text-[#a585f8] fill-current" />,
        description: `
        Our clients are at the heart of everything we do. We focus on understanding their unique needs and providing tailored services that ensure complete satisfaction.
        `
    },
    {
        id: 4,
        name: "Our Commitment",
        icon: <Star className="text-[#a585f8] fill-current" />,
        description: `
        We are committed to delivering the best solutions and services to our clients in the oilfield sector. We work diligently to ensure sustainable success and contribute to the growth of the industry.
        `
    },
];

const OurValues = () => {
  return (
    <div className="py-4 text-color-text-1 flex justify-between items-center max-md:flex-col gap-4">
        <div className="flex-1">
            <MainTitle title="Our Values">
                At OilfieldTools, we take pride in delivering top-notch solutions for the oilfield industry. With years of experience and a dedicated team, we have successfully completed numerous projects and served a wide range of clients.
            </MainTitle>
        </div>
        <div className="flex-[2] border-color-border border-2 rounded-md">
            <div className="cards grid grid-cols-2 max-md:grid-cols-1 shadow-xl">
                {OurValuesCards.map((card) => (
                    <div key={card.id} className="card bg-section-color space-y-3 p-8 max-md:p-6 border-color-border border-2 cursor-pointer hover:scale-105 transition">
                        <div className="title flex items-center justify-start gap-2">
                            <div className="icon flex justify-center items-center w-7 h-7 rounded-full border-[#a585f8] border-2 p-1.5">
                                {card.icon}
                            </div>
                            <p className="font-semibold text-color-text-1">{card.name}</p>
                        </div>
                        <div className="description text-xs text-color-text-2">
                            {card.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default OurValues;
