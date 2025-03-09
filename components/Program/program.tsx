// 
import { CubeIcon } from '@heroicons/react/24/outline'
import { Shantell_Sans } from 'next/font/google'
import Line from '../../assets/hr.png'
import OurPrograms1 from '../../assets/our-programs-1.jpeg'
import OurPrograms2 from '../../assets/our-programs-2.jpeg'
import OurPrograms3 from '../../assets/our-programs-3.jpeg'

const shantell_sans = Shantell_Sans({
  weight: ['500'],
  subsets: ['latin'],
})

const programsData = [
  {
    title: 'Different dance styles offered',
    description: 'Our comprehensive dance program includes contemporary dance, street dance, hip-hop, traditional Rwandan dance, and modern fusion styles. Each style is taught with a focus on both technique and creative expression, allowing students to develop their unique artistic voice while mastering fundamental skills.'
  },
  {
    title: 'Age groups for each program',
    description: 'We welcome youth of all ages, with specialized programs tailored to different age groups and skill levels. Our programs are structured to ensure appropriate development and learning progression: Juniors (8-12 years), Teens (13-16 years), and Young Adults (17-20 years). Each age group receives personalized attention and age-appropriate training methods.'
  },
  {
    title: 'Performance Opportunities',
    description: 'Students get regular opportunities to showcase their talents through local performances, community events, and annual showcases. These experiences help build confidence, stage presence, and professional performance skills while connecting with the broader community.'
  }
]
const Program = () => {
  return (
    <section className="bg-[#050100] py-8 md:py-16" id='our-programs'>
      <div className="px-4 md:px-12 lg:px-24 flex flex-col gap-6 md:gap-10 items-center">
        <div className='text-center flex items-center flex-col px-4'>
          <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-primary mb-2 md:mb-4" style={shantell_sans.style}>
            Our programs
          </h2>
          <p className='text-white text-sm md:text-base'>
            We offer different programs to mentor and help our students grow in their dancing career.
          </p>
        </div>
        <img src={Line.src} alt="line" className="w-[60px] sm:w-[80px] md:w-[111px] mb-2 md:mb-4" />

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-2 w-full">
          {/* Programs Content */}
          <div className='col-span-2 order-2 lg:order-1'>
            {
              programsData.map((program, index) => (
                <div key={index} className="flex flex-col gap-2 py-4 md:py-6 border-b border-white/10">
                  <h3 className="text-lg md:text-xl font-bold text-primary flex items-center gap-2 md:gap-4">
                    <CubeIcon className='w-5 h-5 md:w-6 md:h-6' />
                    {program.title}
                  </h3>
                  <p className="text-white text-sm md:text-base">{program.description}</p>
                </div>
              ))
            }
          </div>

          {/* Images */}
          <div className="hidden lg:block order-1 lg:order-2">
            <img src={OurPrograms1.src} alt="our programs" className="h-full w-full object-cover" />
          </div>
          <div className="hidden lg:block order-1 lg:order-3">
            <img src={OurPrograms2.src} alt="our programs" className="h-full w-full object-cover" />
          </div>
          <div className="hidden lg:block order-1 lg:order-4">
            <img src={OurPrograms3.src} alt="our programs" className="h-full w-full object-cover" />
          </div>

          {/* Mobile/Tablet Image Carousel */}
          <div className="lg:hidden order-1 col-span-1 md:col-span-2 h-[300px] md:h-[400px] relative overflow-hidden">
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory h-full">
              <div className="flex-shrink-0 w-full snap-center">
                <img src={OurPrograms1.src} alt="our programs" className="h-full w-full object-cover" />
              </div>
              <div className="flex-shrink-0 w-full snap-center">
                <img src={OurPrograms2.src} alt="our programs" className="h-full w-full object-cover" />
              </div>
              <div className="flex-shrink-0 w-full snap-center">
                <img src={OurPrograms3.src} alt="our programs" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Program
