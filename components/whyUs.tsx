'use client'
import Line from '@/assets/hr.png'
import { Slide } from 'react-swift-reveal'


export const whyChooseUs = [
  {
      title : "Expertise",
      description: "Our team of seasoned professionals brings years of industry experience across various sectors."
  },
  {
      title : "Tailored Solutions",
      description : "We believe in providing customized services that align with your specific goals and challenges"
  },
  {
      title : "Commitment to Excellence",
      description : "At APEX LMS, we are committed to delivering exceptional results that drive success."
  },
  {
      title : "Great team",
      description : "Our great team contributes to derivering  great products and services. You'll never leave once you get served by us"
  },
]

const WhyChooseUs = () => {
  return (
    <Slide bottom delay={300}>

    <section className="bg-white py-16 " style={{backgroundImage: `url(https://s3.envato.com/files/398983369/A022_02121433_C121.01256535.jpg)`, backgroundSize: 'cover'}}>
      <div className="md:px-[150px] px-4 mx-auto">
        <div className="justify-center items-center text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Why Choose APEX LMS ?
          </h2>
          <p className="text-center text-white text-lg max-w-2xl mx-auto  ">
            Ready to take your organization to the next level? Contact APEX LMS
            today to learn more about how our services can benefit you.
          </p>
          <img
            src={Line.src}
            alt="line"
            className="py-3 mx-auto w-[111px]  border-1"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 px-[9vw] gap-10">
        <div></div>
        {/* <img src={'https://s3.envato.com/files/398983369/A022_02121433_C121.01256535.jpg'} alt="" className='h-[50vh] object-cover  hidden md:block  '  /> */}
        <div className='  grid grid-cols-1 md:grid-cols-2 gap-4  items-center'>
          {whyChooseUs.map((reason, i) => (
              <div className="p-6 flex flex-col gap-4 bg-primary/5 h-full bg-white">
                <h3 className="text-2xl font-bold"> {reason.title}</h3>
                <p className="text-slate-500"> {reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </Slide >
  )
}

export default WhyChooseUs
