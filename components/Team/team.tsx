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
  const [direction, setDirection] = useState('');

  // Adjust items per slide based on screen size
  const getItemsPerSlide = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1; // mobile
      if (window.innerWidth < 1024) return 2; // tablet
      return 3; // desktop
    }
    return 3;
  };

  const nextSlide = () => {
    setDirection('next');
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(teamMembers.length / getItemsPerSlide()));
    }, 300);
  };

  const prevSlide = () => {
    setDirection('prev');
    setTimeout(() => {
      setCurrentSlide((prev) =>
        prev === 0 ? Math.ceil(teamMembers.length / getItemsPerSlide()) - 1 : prev - 1
      );
    }, 300);
  };

  const displayedTeam = teamMembers.slice(
    currentSlide * getItemsPerSlide(),
    currentSlide * getItemsPerSlide() + getItemsPerSlide()
  );

  return (
    <Slide bottom delay={300}>
      <section className="bg-white py-8 md:py-16 px-4 md:px-8">
        {/* Header Section */}
        <div className='text-center flex items-center mb-6 md:mb-10 flex-col'>
          <h2
            className="text-2xl sm:text-3xl md:text-6xl font-bold text-primary mb-2 md:mb-4"
            style={shantell_sans.style}
          >
            Meet our instructors
          </h2>
          <p className='text-sm md:text-base px-4 max-w-2xl'>
            Our team of experienced mentors is here to guide you on your dance journey.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="relative mx-4 sm:mx-8 lg:mx-[80px] overflow-hidden">
          <div
            className={`flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-10 transform transition-transform duration-500 ease-in-out ${direction === 'next'
              ? 'animate-slide-left'
              : direction === 'prev'
                ? 'animate-slide-right'
                : ''
              }`}
          >
            {displayedTeam.map((member, index) => (
              <div
                key={index}
                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)] flex flex-col gap-4 odd:border p-4 md:p-6 border-slate-100 transition-all hover:shadow-lg rounded-lg"
              >
                {/* Member Header */}
                <div className="flex items-center gap-3 md:gap-4">
                  <img
                    className="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover"
                    src={member.image.src}
                    alt={member.name}
                  />
                  <div className="flex flex-col">
                    <h4 className="text-base md:text-lg font-semibold">{member.name}</h4>
                    <p className="text-sm md:text-base font-medium text-primary">{member.role}</p>
                  </div>
                </div>

                {/* Member Bio */}
                <p className="text-sm md:text-base text-neutral-700 line-clamp-4 md:line-clamp-none">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center mt-6 md:mt-8 space-x-3 md:space-x-4">
          <button
            onClick={prevSlide}
            className="flex items-center justify-center bg-primary text-white w-10 h-10 md:w-12 md:h-12 rounded-md hover:bg-white hover:text-primary hover:border-2 hover:border-primary transition-all"
            aria-label="Previous slide"
          >
            &#x2190;
          </button>
          <button
            onClick={nextSlide}
            className="flex items-center justify-center bg-primary text-white w-10 h-10 md:w-12 md:h-12 rounded-md hover:bg-white hover:text-primary hover:border-2 hover:border-primary transition-all"
            aria-label="Next slide"
          >
            &#x2192;
          </button>
        </div>
      </section>
    </Slide>
  );
};

export default TheTeam;
