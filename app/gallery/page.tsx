import GallePhoto from '@/assets/gallery-header.jpeg';
import ContactUsHook from "@/components/contactusHook";
import GallerySection from "@/components/galleryPhotos";
import { sharedMetadata } from "@/utils/shared-meta";
import { Metadata } from "next";
import { Shantell_Sans } from 'next/font/google';

const shantell_sans = Shantell_Sans({
    weight: ['500'],
    subsets: ['latin'],
})

export const metadata: Metadata = {
    ...sharedMetadata,
    title: "Muze tubyine | Gallery",
};

const Page = () => {

    return (
        <div>
            <div className="bg-black "
                style={{ backgroundImage: `url(${GallePhoto.src})`, backgroundSize: 'cover', backgroundPosition  : 'center' }}>

                <div className=" top-0 left-0  w-full h-full  md:py-40 py-16 md:px-[150px] px-4">
                    <h1 className="text-white text-5xl md:text-5xl font-bold py-2 pt-6  font-serif" style={shantell_sans.style}>
                        Gallery
                    </h1>
                    <p className="text-white mt-2  ">
                        Visit our gallery, take a look on what we've been doing, and get in touch.
                    </p>
                </div>
            </div>
            <div className="py-10 bg-[#050100]">
                <GallerySection />
            </div>
            {/* <ContactUsHook /> */}
        </div>
    );
};

export default Page;
