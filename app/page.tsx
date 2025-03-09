'use client'
import HeroImage from "@/assets/hero.jpeg";
import Program from "@/components/Program/program";
import Testimonials from "@/components/Testimonial/testimonials";
import VisionMission from "@/components/vision-and-mission";
import WhyChooseUs from "@/components/whyUs";
import { Shantell_Sans } from 'next/font/google';
import Link from "next/link";
import ContactUsHook from "../components/contactusHook";
import TheTeam from "@/components/Team/team";

const shantell_sans = Shantell_Sans({
  weight: ['500'],
  subsets: ['latin'],
})
const services = [
  {
    img: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?ixlib=rb-4.0.3",
    title: "Contemporary Dance Classes",
    description: "Express yourself through fluid movements and modern choreography. Our contemporary dance classes blend technical precision with emotional storytelling, helping you discover your unique artistic voice."
  },
  {
    img: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?ixlib=rb-4.0.3",
    title: "Street Dance & Hip Hop",
    description: "Feel the rhythm of the streets with our dynamic hip hop classes. From breakdancing to popping and locking, learn the raw energy and creative freedom of urban dance styles."
  },
  {
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3",
    title: "Performance & Choreography",
    description: "Transform your passion into stunning performances. Our expert choreographers will help you develop your artistic vision, perfect your technique, and create mesmerizing dance routines."
  }
]

const Home = () => {
  return (
    <div className="">
      <section className="min-h-screen relative overflow-hidden bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-1000"
          style={{ backgroundImage: `url(${HeroImage.src})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b  from-transparent via-transparent to-black/90" />

        {/* <Slide bottom delay={300}> */}
        <div className="relative z-20  flex flex-col  justify-end  h-screen px-10 py-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight " style={shantell_sans.style}>
              Muze Tubyine: Transforming Youth, One Step at a Time.
            </h1>
            <p className="text-lg text-gray-200 mb-10 leading-relaxed max-w-3xl">
              Welcome to a world where movement becomes art and expression knows no bounds.
              Through dance, we create, we inspire, and we transform. Join us on a journey of
              artistic discovery and physical poetry.
            </p>
            <div className="flex items-center space-x-6">
              <Link href={'/contact-us'}>
                <button className="px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105 hover:rotate-2">
                  Explore our programs
                </button>
              </Link>
              <Link href={'/#services'}>
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105 hover:-rotate-2">
                  Join us
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* </Slide> */}
      </section>
      {/* <VisionMission /> */}
      <Program />
      <TheTeam />

      {/* <WhyChooseUs /> */}
      <Testimonials />
      {/* <ContactUsHook /> */}
    </div>
  );
}

export default Home;
