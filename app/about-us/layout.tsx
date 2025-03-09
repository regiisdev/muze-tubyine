import { sharedMetadata } from "@/utils/shared-meta";
import type { Metadata } from "next";


export const metadata: Metadata = {
    ...sharedMetadata,
    title: "Muze Tubyine | About Us",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}
