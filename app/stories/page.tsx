import Bg from '@/assets/bg.jpg'
import Child from '@/assets/child.png'
import Community from '@/assets/Community.png'
import Donate from '@/assets/donate.png'
import Line from '@/assets/hr.png'
import Volunteer from '@/assets/volunteer.png'
import { sharedMetadata } from '@/utils/shared-meta'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { Metadata } from 'next'
import Join from '../../components/contactusHook'

export const metadata: Metadata = {
    ...sharedMetadata,
    title: "Muze Tubyine | Stories",
};

const Stories = () => {
    const stories = [
        {
            id: 1,
            name: 'KEZA MUGABO Pamella',
            image: Child,
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.',
        },
        {
            id: 2,
            name: 'KEZA MUGABO Pamella',
            image: Child,
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.',
        },
        {
            id: 3,
            name: 'KEZA MUGABO Pamella',
            image: Child,
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.',
        }
    ]
    return (
        <div>
            {/* Hero Section */}
            <div className="relative">
                <img
                    src={Bg.src}
                    alt="About Us Hero"
                    className="w-full h-[200px] md:h-[300px] object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center px-4 md:pl-[150px]">
                    <p className="text-primary text-[12px] md:text-[15px] font-[700] opacity-0">
                        WHAT IF RWANDA
                    </p>
                    <h1 className="text-white text-[36px] md:text-[64px] font-[700] py-2">
                        Stories
                    </h1>
                    <p className="text-white mt-2 font-[400] text-[14px] md:text-[16px]">
                        Learn more about the organisation and its actions.
                    </p>
                </div>
            </div>


            {/* Contact Us Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-[40px] md:text-4xl font-bold text-primary text-center mb-12 ">
                        How you can help
                    </h2>
                    <p className="text-center text-secondary text-lg max-w-2xl mx-auto  mb-4  font-[400] text-[16px]">
                        However you are able to provide, open your hands and give something
                        to these children, beautify their present and brighten their future.
                    </p>
                    <img
                        src={Line.src}
                        alt="line"
                        className=" mb-7 mx-auto w-[111px] border-1"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3  ">
                        <div className="text-center  py-5 px-3">
                            <div className="flex items-center justify-center mb-4">
                                <img src={Donate.src} alt="Donate" className="h-16 w-16" />
                            </div>
                            <h3 className="text-[20px]  font-[600] text-black mb-2">
                                DONATE
                            </h3>
                            <p className="text-[#7388A0] text-[16px] font-[400]  mb-4">
                                Your donations empower us to make a real difference. Support us
                                today to create lasting positive change in our community.
                            </p>
                            <a href="/contact-us">
                                <button className=" font-[400] text-[16px] bg-white text-primary px-6 py-3 rounded-full py-4 border-2 border-primary hover:bg-primary hover:text-white  transition-all">
                                    Donate
                                </button>
                            </a>
                        </div>
                        <div className="text-center  py-5 px-3">
                            <div className="flex items-center justify-center mb-4">
                                <img src={Volunteer.src} alt="Volunteer" className="h-16 w-16" />
                            </div>
                            <h3 className="text-[20px]  font-[600] text-black mb-2">
                                BE A VOLUNTEER
                            </h3>
                            <p className="text-[#7388A0] text-[16px] font-[400]  mb-4">
                                Join us to give back through your time and skills. Make a direct
                                impact, connect with others, and contribute to positive change.
                            </p>
                            <a href="contact-us">


                                <button className="  font-[400] text-[16px] bg-white text-primary px-6 py-3 rounded-full py-4 border-2 border-primary hover:bg-primary hover:text-white  transition-all">
                                    Join us
                                </button>
                            </a>
                        </div>
                        <div className="text-center   py-5 px-3">
                            <div className="flex items-center justify-center mb-4">
                                <img
                                    src={Community.src}
                                    alt="Community Visit"
                                    className="h-16 w-16"
                                />
                            </div>
                            <h3 className="text-[20px]  font-[600] text-black mb-2">
                                COMMUNITY VISIT
                            </h3>
                            <p className="text-[#7388A0] text-[16px] font-[400]  mb-4">
                                Experience our community firsthand. Witness resilience, share
                                experiences, and inspire empathy through our unique visits.
                            </p>
                            <a href="/contact-us">
                                <button className="  font-[400] text-[16px] bg-white text-primary px-6 py-3 rounded-full py-4 border-2 border-primary hover:bg-primary hover:text-white  transition-all">
                                    Contact us
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 justify-center bg-white items-center">
                <div className="text-center mb-8">
                    <h6 className="text-[#C7C7CC] text-[10px] md:text-[12px] py-3 font-[400]">
                        How We Contribute
                    </h6>
                    <h2 className="text-[28px] md:text-[40px] font-[700] text-primary">
                        Children’s stories
                    </h2>
                    <img
                        src={Line.src}
                        alt="line"
                        className="my-4 mx-auto w-[70px] md:w-[111px] border-1"
                    />

                    <p className="text-[#AEAEB2] font-[400] text-[14px] md:text-[16px] my-5">
                        These children, without families to love, protect, and care for them, are
                        under the devoted care of 10 nuns <br className="hidden md:block" /> who
                        call themselves Inshuti zabakene, meaning Friends of the Poor.
                    </p>
                </div>

                <div className="px-4 md:px-[150px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
                    {stories.map((story) => (
                        <div
                            key={story.id}
                            className="flex flex-col justify-center items-start p-5 border"
                        >
                            <div className="">
                                <img
                                    src={story.image.src}
                                    alt={story.name}
                                    className="w-full mb-6 h-[20vh] md:h-[30vh] object-cover"
                                />
                                <h3 className="text-[20px] md:text-[24px] font-[500] text-color-black mt-2">
                                    {story.name}
                                </h3>
                                <p className="text-[#7388A0] text-[14px] md:text-[16px] mt-4">
                                    {story.description}
                                </p>

                                <button className="flex text-[14px] md:text-[16px] mt-4 px-5 md:px-7 py-2 md:py-3 text-primary border border-primary rounded-full hover:bg-primary hover:text-white transition">
                                    Mentor <ChevronRightIcon className="my-[6px] mx-1 w-5" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Join />
        </div>
    )
}
export default Stories
