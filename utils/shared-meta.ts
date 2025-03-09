import { Metadata } from "next";

export const sharedMetadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL as string),
    title: "Muze Tubyine | Dance & Choreography",
    description: "At Muze Tubyine, we trandform lives by just dancing. We are a professional dance and choreography company with over 10 years of experience in the industry. We offer training in various dance styles, including contemporary, hip-hop, and traditional Rwandan dance.",
    icons: ['/favicon.ico'],
    openGraph: {
        title: 'Muze Tubyine ',
        siteName: 'Muze Tubyine',
        images: ['/opengraph-image.png'],
        type: 'website',
        countryName: 'RWANDA',
        url: process.env.NEXT_PUBLIC_SITE_URL as string,
        phoneNumbers: ['+250789553464'],
        emails: ['info@muzetubyine.rw'],
    },
    keywords: [
        "Muze Tubyine",
        "Dance",
        "Choreography",
        "Contemporary Dance",
        "Street Dance",
        "Hip Hop",
        "Rwandan Dance",
        "Dance Classes",
        "Dance Programs",
        "Dance Training",
        "Dance Company",
        "Dance Studio",
        "Dance School",
        "Dance Performances",
        "Dance Events",
        "Dance Workshops",
        "Dance Community",
        "Dance Culture",
        "Dance Art",
        "Dance Expression",


    ],
};