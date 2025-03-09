import { readdirSync } from "fs";
import SectionTitle from "./sectionTitle";
import SingleImage, { IGalleryPhoto } from "./singleImage";


const getImages = async () => {
    const files = readdirSync('./assets/gallery');
    return files
}

export default async function GallerySection() {
    const images = await getImages()
    const gallery: IGalleryPhoto[] = images.map((image) => ({ photo_url: require(`../assets/gallery/${image}`).default.src, description: "", title: "", subtitle: "" }))
    return (
        <div className="flex items-center flex-col md:px-[10vw] px-[2vw] -mt-30 relative gap-10">
            <SectionTitle title="Visit our gallery" subtitle="Take a look on what we've been doing" />
            <div className="grid lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 msm:grid-cols-1 shadow-sm gap-1 w-full ">
                {
                    gallery.map((image, i) => (
                        <SingleImage {...image} key={i} />
                    ))
                }
            </div>
        </div>
    )
}