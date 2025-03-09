'use client'

import { useState } from "react";
export default function SingleImage(image: IGalleryPhoto) {
    const [showMore, setShowMore] = useState(false)
    return (
        <div
            style={{
                backgroundImage: `url(${image.photo_url})`,
                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                transition: 'background-size 0.3s ease-in-out',
            }} className="aspect-square w-full rounded-lg bg-brand/10 flex flex-col h-[300px]  duration-1000 transition-all justify-end" onMouseEnter={() => setShowMore(true)} onMouseLeave={() => setShowMore(false)}>
            <div className="p-10 pt-28 bg-gradient-to-t from-black/40 to-transparent transition-all duration-150">
                <h4 className="text-md text-white transition-all duration-150">{image.title}</h4>
                <p className="text-white/50 transition-all text-sm duration-150" >{image.subtitle}</p>
                {/* {showMore && <p className="text-white/70 mt-6 ">{image.description}</p>} */}
            </div>
        </div >

    )
}


export interface IGalleryPhoto {
    photo_url: string,
    title: string,
    subtitle: string,
    description: string
}