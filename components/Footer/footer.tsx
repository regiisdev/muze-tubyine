'use client';

import Foot from '@/assets/foot.png';
import Link from 'next/link'; // For internal navigation
import { usePathname, useRouter } from 'next/navigation'; // To access router and detect active link
import Logo from '../logo';


const Footer = () => {
  const router = useRouter();

  const pathname = usePathname()

  const isActive = (path: string) => pathname === path;

  return (
    <footer className={`${pathname.startsWith('/admin') ? 'hidden' : ''} bg-[#050100] text-white py-6 h-fit border-t border-white/5`}>
      <div className="max-w-4xl mx-auto justify-center flex-col flex text-center items-center ">
        <div className='py-12'>
          <Logo />
        </div>
        <div className=" justify-center space-x-8 mt-4 md:flex gap-4 items-center hidden">
          <Link href="/" className="hover:text-white relative">
            <span
              className={`after:block after:absolute after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100 ${isActive('/') ? 'underline' : ''
                }`}
            >
              Home
            </span>
          </Link>
          <Link href="/#our-programs" className="hover:text-white relative">
            <span
              className={`after:block after:absolute after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100 ${isActive('/about-us') ? 'underline' : ''
                }`}
            >
              Our programs
            </span>
          </Link>
       
          <Link href="/gallery" className="hover:text-white relative">
            <span
              className={`after:block after:absolute after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100 ${isActive('/gallery') ? 'underline' : ''
                }`}
            >
              Gallery
            </span>
          </Link>
          <Link href="/contact-us" className="hover:text-white relative">
            <span
              className={`after:block after:absolute after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100 ${isActive('/contact-us') ? 'underline' : ''
                }`}
            >
              Contact Us
            </span>
          </Link>
        </div>
        <img
          src={Foot.src}
          width={300}
          height={10}
          alt="line"
          className="py-3 w-[891px] border-1"
        />
        <div className='py-5'>
          Copyright &copy; {new Date().getFullYear()} APEX LMS. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
