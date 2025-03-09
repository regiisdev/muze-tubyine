import Mission from '@/assets/mission.jpg'
import TheTeam from '@/components/Team/team'
import { sharedMetadata } from '@/utils/shared-meta'
import { Metadata } from 'next'
import ContactUsHook from '../../components/contactusHook'

export const metadata: Metadata = {
    ...sharedMetadata,
    title: "Muze Tubyine | About Us",
};


const AboutUs = () => {
    return (
        <div className="bg-white ">
            {/* Hero Section */}
            <div className="bg-primary/5 "
                style={{ backgroundImage: `url(https://images.pexels.com/photos/9301887/pexels-photo-9301887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`, backgroundSize: 'cover' }}>


                <div className=" top-0 left-0  w-full h-full py-40 px-[150px]">
                    <h1 className="text-black text-[64px] md:text-5xl font-bold py-2 pt-6  font-serif">
                        Our services
                    </h1>
                    <p className="text-black mt-2  ">
                        Learn more about the organisation and its actions.
                    </p>
                </div>
            </div>
            <section className="flex flex-col  justify-center py-20 bg-white text-center px-[20vw] px-[150px]">
                <h2 className="text-primary text-3xl font-bold  ">Know more about Muze Tubyine</h2>
                {/* <img src={Line} alt="line" className="my-4  w-[88px]" /> */}
                <p className="text-black text-[24px] font-[500] mb-4  ">
                    learn more about how our services can benefit you.
                </p>
                <p className="text-[#AEAEB2] text-[16px] font-[400]  mb-8">
                    At Muze Tubyine, we are dedicated to empowering organizations and individuals with the tools and knowledge they need to excel in today's competitive landscape. With a comprehensive suite of services spanning management and leadership consultancy, educational support activities, and specialized office support services, we are your trusted partner in achieving excellence.
                </p>
                <button className=" w-fit mx-auto bg-transparent border-2 border-primary text-primary font-semibold py-4 px-8  py-4 hover:bg-primary hover:text-white transition duration-300 text-[16px]">
                    Contact us
                </button>
            </section>

            <div className=" mx-auto py-12 px-[150px]">
                <div className="">
                    <div className=" grid  grid-cols-2 py-10 px-6 gap-10  gap-4">
                        <div className="p-6 border border-primary/10">
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
                            src={Mission.src}
                            alt="Vision"
                            className=" h-[30vh] object-cover w-full col-span-2"
                        />
                    </div>
                </div>
            </div>
            <TheTeam />
            <ContactUsHook />
        </div>
    )
}

export default AboutUs
