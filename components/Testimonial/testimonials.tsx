import Line from '@/assets/hr.png';
import { Shantell_Sans } from 'next/font/google';
import { Slide } from 'react-swift-reveal';
import TestimonialImage from '@/assets/our-programs-2.jpeg';

const shantell_sans = Shantell_Sans({
  weight: ['500'],
  subsets: ['latin'],
})

const testimonialsData = [
  {
    name: 'Umutoniwase Francoise',
    role: 'Dance Instructor',
    photo: TestimonialImage.src,
    text: `Supporting others has always been a part of my life, and I've been blessed to receive the same. Our kids have faced challenges they may not fully understand, and without guidance, these experiences could shape their future. "Being the source of their smile" is about offering hope, strength, and belief in their ability to overcome. "WHAT IF" empowers them with choices, mentorship, and a future to dream big and succeed.`
  },
  {
    name: 'Gwaneza Benita',
    role: 'Youth Mentor',
    photo: TestimonialImage.src,
    text: `It's inspiring to witness these children grow into talented individuals, which motivates me to continue making a difference, even in small ways. Mentoring Esther since 2017 has brought me immense joy and pride, making me feel special as her aunt. I'm also deeply grateful for the sisters' unwavering love and dedication to the children. May God bless them.`
  }
];

const Testimonials = () => {
  return (
    <Slide bottom delay={300}>
      <div className="bg-[#050100] py-20 px-4 md:px-[150px]">
        <div className="text-center mb-16">
          <h2 className="text-primary text-3xl md:text-4xl font-bold mb-4" style={shantell_sans.style}>Testimonials</h2>
          <p className="text-white text-lg mb-6">What our community says</p>
          <img src={Line.src} alt="decorative line" className="mx-auto w-16 md:w-24" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="relative  rounded-2xl p-8  hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center">
                <div className="w-40 aspect-square -mt-16 mb-4 rounded-full overflow-hidden border-4 border-white/10 shadow-md">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-primary font-medium">
                    {testimonial.role}
                  </p>
                </div>

                <div className="absolute top-6 left-6 text-primary/10 text-6xl font-serif">
                  "
                </div>

                <p className="text-white/60 leading-relaxed italic text-center">
                  {testimonial.text}
                </p>

                <div className="absolute bottom-6 right-6 text-primary/10 text-6xl font-serif">
                  "
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
};

export default Testimonials;
