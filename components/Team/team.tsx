
'use client'
import team from "@/assets/profile.jpg";
import { Shantell_Sans } from "next/font/google";
import { useState } from 'react';
import { Slide } from "react-swift-reveal";
const shantell_sans = Shantell_Sans({
  weight: ['500'],
  subsets: ['latin'],
})

const teamMembers = [
  {
    name: 'Umutoniwase Francois',
    role: 'Mentor',
    bio: 'Umutoniwase Francois is a professional dancer and choreographer with over 10 years of experience in the industry. She has trained in various dance styles, including contemporary, hip-hop, and traditional Rwandan dance. Umutoniwase is passionate about sharing her knowledge and skills with the next generation of dancers, helping them develop their creativity and confidence.',
    image: team,
  },

  {
    name: 'Gwaneza Benita',
    role: 'Mentor',
    bio: 'Umutoniwase Francois is a professional dancer and choreographer with over 10 years of experience in the industry. She has trained in various dance styles, including contemporary, hip-hop, and traditional Rwandan dance. Umutoniwase is passionate about sharing her knowledge and skills with the next generation of dancers, helping them develop their creativity and confidence.',
    image: team,
  },

  {
    name: 'Gakoni Nogueille',
    role: 'Mentor',
    bio: 'Umutoniwase Francois is a professional dancer and choreographer with over 10 years of experience in the industry. She has trained in various dance styles, including contemporary, hip-hop, and traditional Rwandan dance. Umutoniwase is passionate about sharing her knowledge and skills with the next generation of dancers, helping them develop their creativity and confidence.',
    image: team,
  },
  {
    name: 'Josh Plante',
    role: 'Mentor',
    bio: 'Umutoniwase Francois is a professional dancer and choreographer with over 10 years of experience in the industry. She has trained in various dance styles, including contemporary, hip-hop, and traditional Rwandan dance. Umutoniwase is passionate about sharing her knowledge and skills with the next generation of dancers, helping them develop their creativity and confidence.',
    image: team,
  },
  // {
  //   name: 'ABAYO Jean Aime',
  //   role: 'Mentors manager',
  //   image: team,
  //   description: '',
  // },
];

const TheTeam = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const [direction, setDirection] = useState(''); // track animation direction

  const nextSlide = () => {
    setDirection('next'); // Set direction for animation
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(teamMembers.length / 3));
    }, 300); // Animation delay for the transition effect
  };

  const prevSlide = () => {
    setDirection('prev'); // Set direction for animation
    setTimeout(() => {
      setCurrentSlide((prev) =>
        prev === 0 ? Math.ceil(teamMembers.length / 3) - 1 : prev - 1
      );
    }, 300); // Animation delay for the transition effect
  };

  const displayedTeam = teamMembers.slice(currentSlide * 3, currentSlide * 3 + 3);

  return (

    <Slide bottom delay={300}>
      < section className="bg-white py-16" >
        <div className='text-center flex items-center mb-10 flex-col'>
          <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-primary mb-4" style={shantell_sans.style}>
            Meet our instructors
          </h2>
          <p className=''>
            Our team of experienced mentors is here to guide you on your dance journey.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="relative mx-[80px] md:px-8 overflow-hidden">
          <div
            className={` flex items-center flex-wrap justify-center gap-10  transform transition-transform duration-500 ease-in-out ${direction === 'next' ? 'animate-slide-left' : direction === 'prev' ? 'animate-slide-right' : ''
              }`}
          >
            {displayedTeam.map((member, index) => (
              <div key={index} className=" md:max-w-sm msm:max-w-[40vw] flex flex-col gap-4 odd:border p-6 border-slate-100 " >
                <div className="flex items-center gap-4">
                  <img
                    className="w-24 rounded-full  object-cover"
                    src={member.image.src}
                    alt={member.name}
                  />
                  <div className="bg-opacity-50 flex flex-col">
                    <h4 className="text-lg font-[600] text-[20px]  ">{member.name}</h4>
                    <p className="text-[16px] font-[500] text-primary">{member.role}</p>
                  </div>

                </div>
                  <p className="text-neutral-700">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex mx-auto mt-8 w-fit space-x-4">
          <button
            onClick={prevSlide}
            className="flex items-center justify-center bg-primary text-white w-12 h-12 rounded-md  hover:bg-white hover:text-primary hover:border-2 hover:border-primary transition-all"
          >
            &#x2190;
          </button>
          <button
            onClick={nextSlide}
            className="flex items-center justify-center bg-primary text-white w-12 h-12 rounded-md hover:bg-white hover:text-primary hover:border-2 hover:border-primary transition-all"
          >
            &#x2192;
          </button>
        </div>
      </section >
    </Slide >

  );
};

export default TheTeam;
