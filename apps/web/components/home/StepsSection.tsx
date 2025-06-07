import { FC } from "react";
import { Rocket, Megaphone, Star, Globe, LineChart } from "lucide-react";

export const StepsSection: FC = () => {
  const steps = [
    {
      icon: <Rocket size={24} />,
      title: "Start My Business",
      description: "From idea to launch — make it real.",
    },
    {
      icon: <Rocket size={24} />,
      title: "Market My Business",
      description: "Get attention. Get results.",
    },
    {
      icon: <Star size={24} />,
      title: "Build My Brand",
      description: "Build a brand they’ll trust.",
    },
    {
      icon: <Globe size={24} />,
      title: "Go Online",
      description: "Turn clicks into customers.",
    },
    {
      icon: <LineChart size={24} />,
      title: "Optimize My Performance",
      description: "Work smarter, grow faster.",
    },
  ];

  return (
    <section className='py-20 bg-white text-center'>
      <h2 className='text-2xl md:text-3xl font-semibold mb-12 text-black'>
        We help you in each step of the way
      </h2>

      {/* Steps Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 px-6 md:px-20'>
        {steps.map((step, idx) => (
          <div key={idx} className='flex flex-col items-center space-y-3'>
            <div className='bg-green-100 p-4 rounded-full text-black'>
              {step.icon}
            </div>
            <h3 className='text-base font-semibold text-black'>{step.title}</h3>
            <p className='text-sm text-gray-600'>{step.description}</p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className='mt-12'>
        <button className='bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-full text-sm font-medium transition'>
          View our Services
        </button>
      </div>
    </section>
  );
};
