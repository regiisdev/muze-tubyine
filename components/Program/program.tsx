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
    <section className="bg-[#050100] py-16" id='our-programs'>
      <div className="px-24 flex flex-col gap-10 items-center">
        <div className='text-center flex items-center flex-col'>
          <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-primary mb-4" style={shantell_sans.style}>
            Our programs
          </h2>
          <p className='text-white'>
            We offer different programs to mentor and help our students grow in their dancing career.
          </p>
        </div>
        <img src={Line.src} alt="line" className="w-[80px] sm:w-[111px] mb-4" />
        <div className="grid grid-cols-5 lg:flex-row gap-2 ">
          <div className='col-span-2'>
            {
              programsData.map((program, index) => (
                <div key={index} className="flex flex-col gap-2 py-6 border-b border-white/10">
                  <h3 className="text-xl font-bold text-primary flex items-center gap-4"> <CubeIcon className='w-6 h-6' /> {program.title}</h3>
                  <p className="text-white">{program.description}</p>
                </div>
              ))
            }
          </div>
          <img src={OurPrograms1.src} alt="our programs" className=" h-full object-cover" />
          <img src={OurPrograms2.src} alt="our programs" className="h-full object-cover" />
          <img src={OurPrograms3.src} alt="our programs" className="h-full object-cover" />

        </div>

      </div>
    </section>

  )
}

export default Program
