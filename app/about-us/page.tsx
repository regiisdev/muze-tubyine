'use client';

import TheTeam from '@/components/Team/team';
import { Slide } from 'react-swift-reveal';
import ContactUsHook from '../../components/contactusHook';




const AboutUs = () => {
    return (
        <div className="bg-white "  >
            {/* Hero Section */}

            <div className="bg-primary/5 "
                style={{ backgroundImage: `url(https://images.pexels.com/photos/9301887/pexels-photo-9301887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`, backgroundSize: 'cover' }}>

                <div className=" top-0 left-0  w-full h-full  md:py-28 py-16 md:px-[150px] px-4">
                    <h1 className="text-black text-4xl md:text-5xl font-bold py-2 pt-6  font-serif">
                        About us``
                    </h1>
                    <p className="text-black mt-2  ">
                        Learn more about APEX LMS
                    </p>
                </div>
            </div>
            <Slide bottom delay={300}>

            <section className="flex flex-col  justify-center py-20 bg-white text-center md:px-[150px] md:max-w-[60%] mx-auto px-4">
                <h2 className="text-primary md:text-3xl  text-2xl font-bold  ">Know more about APEX LMS</h2>
                {/* <img src={Line} alt="line" className="my-4  w-[88px]" /> */}
                <p className="text-black font-[500] mb-4  ">
                    learn more about how our services can benefit you.
                </p>
                <p className="text-[#AEAEB2] text-[16px] font-[400]  mb-8">
                    At APEX LMS, we are dedicated to empowering organizations and individuals with the tools and knowledge they need to excel in today's competitive landscape. With a comprehensive suite of services spanning management and leadership consultancy, educational support activities, and specialized office support services, we are your trusted partner in achieving excellence.
                </p>
                {/* <button className=" w-fit mx-auto bg-transparent border-2 border-primary text-primary font-semibold py-4 px-8  py-4 hover:bg-primary hover:text-white transition duration-300 text-[16px]">
                    Contact us
                </button> */}
            </section>
            </Slide>
            <Slide bottom delay={300}>

            <div className=" md:px-[150px] px-4">
                <div className="md:grid flex-col flex md:grid-cols-2 grid-cols-1 py-10 gap-3">
                    <div className="md:p-6 p-4 border border-primary/10 w-full flex-col">
                        <h2 className="text-primary text-[40px] font-bold ">
                            Our mission
                        </h2>
                        <p className="text-secondary mt-2 ">
                            Our mission is to enhance efficiency, foster growth, and drive success for our clients through tailored professional solutions.
                        </p>
                    </div>
                    <div className="p-6 border border-primary/10">
                        <h2 className="text-primary text-[40px] font-bold ">
                            Our vision
                        </h2>
                        <p className="text-secondary mt-2 ">
                            To be the leading provider of innovative leadership and management solutions, empowering businesses and individuals to achieve excellence.
                            <br /> and inspire empathy through our unique visits.
                        </p>
                    </div>
                    <img
                        src={'https://images.unsplash.com/photo-1650094980833-7373de26feb6?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                        alt="Vision"
                        className=" h-[30vh] object-cover w-full col-span-2"
                    />
                </div>
            </div>
            </Slide >
            <TheTeam />
            <ContactUsHook />
        </div>
    )
}

export default AboutUs
