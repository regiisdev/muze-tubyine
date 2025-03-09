import { sharedMetadata } from "@/utils/shared-meta";
import { Metadata } from "next";

export const metadata: Metadata = {
    ...sharedMetadata,
    title: "APEX LMS | Contact Us",
};

export default function ContactUsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    )
}