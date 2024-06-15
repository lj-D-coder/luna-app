import { doorStepCare, bookSlot, selectService } from "@/assets/images"
import Image from "next/image";

const HowItWorks = () => {
  const features = [
    {
      icon: selectService,
      title: "Select Your Service",
      desc: "Browse through our wide range of professional home services, from cleaning to repairs, and choose the one that best suits your needs.",
    },
    {
      icon: bookSlot,
      title: "Book A Slot",
      desc: "Once you've selected your desired service, simply book a convenient time slot through our user-friendly platform. Choose a time that fits seamlessly into your schedule.",
    },
    {
      icon: doorStepCare,
      title: "Door-step Care",
      desc: "Sit back and relax as our skilled professionals arrive at your doorstep, equipped with the necessary tools and expertise to get the job done efficiently and effectively.",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 mt-10">
        <div className="h-full flex flex-col justify-center items-center">
          <div className="mb-10 md:mt-20">
            <h3 className="text-gray-800 text-3xl text-center px-4 font-semibold sm:text-4xl">
              How We Works?
            </h3>
            <p className="mt-2 pl-10 pr-10 text-center text-sm text-gray-600">
              <br></br>
              Experience hassle-free home maintenance with our seamless process from booking to doorstep care.<br></br>
              Let us take care of your home while you focus on what matters most.
            </p>
          </div>

          <div className="max-w-screen-xl h-auto mt-2 md:mt-0 mx-auto text-center text-gray-600 px-4 md:px-8 pb-24">
            <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((item, idx) => (
                <li key={idx} className="space-y-3">
                  <div className="w-24 h-24 mx-auto bg-black rounded-full flex items-center justify-center">
                    <Image src={item.icon} height={50} width={50} alt="icon" />
                  </div>
                  <h4 className="text-lg text-gray-900 font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-600" >{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
