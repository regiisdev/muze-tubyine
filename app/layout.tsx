import Footer from "@/components/Footer/footer";
import Navbar from "@/components/Navbar/Navbar";
import { sharedMetadata } from "@/utils/shared-meta";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const secondFont = Plus_Jakarta_Sans({
  weight: ['400', '500'],
  subsets: ['latin'],
})
export const metadata: Metadata = {
  ...sharedMetadata,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${secondFont.className} bg-white`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
