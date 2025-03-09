import ContactUsHook from "@/components/contactusHook";
import GallerySection from "@/components/galleryPhotos";
import { sharedMetadata } from "@/utils/shared-meta";
import { Metadata } from "next";

export const metadata: Metadata = {
    ...sharedMetadata,
    title: "Muze tubyine | Gallery",
};

const Page = () => {

    return (
        <div>
            <div className="bg-primary/5 "
                style={{ backgroundImage: `url(https://images.pexels.com/photos/9301887/pexels-photo-9301887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`, backgroundSize: 'cover' }}>


                <div className=" top-0 left-0  w-full h-full  md:py-40 py-16 md:px-[150px] px-4">
                    <h1 className="text-primary text-4xl md:text-5xl font-bold py-2 pt-6  font-serif">
                        Gallery
                    </h1>
                    <p className="text-black mt-2  ">
                        Visit our gallery, take a look on what we've been doing, and get in touch.
                    </p>
                </div>
            </div>
            <div className="py-10">
                <GallerySection />
            </div>
            <ContactUsHook />
        </div>
    );
};

export default Page;
