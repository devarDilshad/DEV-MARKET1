import React from "react";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
        icon: BodyPartImage,
        name: bodyPart,
    },
    {
        icon: TargetImage,
        name: target,
    },
    {
        icon: EquipmentImage,
        name: equipment,
    },
  ];
  return (
    <section className="pt-[8rem]">
        <div className="max-w-[130rem] mx-auto px-10">
            <div className="flex flex-col gap-10 lg:flex-row p-5 items-center">
                <img src={gifUrl} alt={name} loading="lazy" className="w-[40rem] h-[30rem] lg:h-[40rem]" />
                <div className="flex flex-col gap-5 lg:gap-9">
                    <h4 className="font-poppins font-semibold  text-4xl lg:text-6xl text-secondary capitalize">
                        {name}
                    </h4>
                    <p className="text-gray-500 text-lg mb-10 lg:max-w-[70%]">
                        Exercises keep you strong. {name} is one of the best
                        exercises to target your {target}. It will help you improve your
                        mood and gain energy.
                    </p>

                    {extraDetail.map((item,index) => (
                        <div key={item.name} className="flex flex-row gap-6 items-center space-x-3 mb-2">
                            <div className="bg-fff2db rounded-full">
                                <img src={item.icon} alt={item.name} />
                            </div>
                            <h5 className="font-josefin fonr-bold text-2xl lg:text-3xl text-secondary capitalize">
                                {item.name}
                            </h5>
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    </section>
)
};

export default Detail;
