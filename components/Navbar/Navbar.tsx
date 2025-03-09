'use client';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Logo from '../logo';


const Navbar = () => {
  const [scrolled, setScrolled] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter(); // Access the router object
  const pathname = usePathname()
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };


  const isActive = (path: string) => pathname === path;

  return (
    <div className={`w-full ${pathname.startsWith('/admin') ? 'hidden' : ''} fixed transition-all duration-150  top-0 z-50`}>

      <nav
        className={` ${pathname.startsWith('/admin') ? 'hidden' : ''}  w-[100%]  px-10 ${scrolled ? 'py-3' : 'py-10'} transition-all duration-300 ${scrolled ? 'bg-neutral-950 backdrop-blur-lg  py-1' : 'bg-gradient-to-b from-black/60 to-transparent py-0'}`}
      >
        <div className="w-full flex items-center justify-between">
          <Logo theme='dark' />
          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`${isActive('/')
                ? `border-b-2 text-primary border-primary`
                : `text-white hover:text-primary`
                }`}
            >
              Home
            </Link>
            <Link
              href="/#our-programs"
              className={`${isActive('/about-us')
                ? `border-b-2 text-primary border-primary`
                : `text-white hover:text-primary`
                }`}
            >
              Our programs
            </Link>
            <Link
              href="/gallery"
              className={`${isActive('/gallery')
                ? `border-b-2 text-primary border-primary`
                : `text-white hover:text-primary`
                }`}
            >
              Gallery
            </Link>
            <Link
              href="/contact-us"
              className={`${isActive('/contact-us')
                ? `border-b-2 text-primary border-primary`
                : `text-white hover:text-primary`
                }`}
            >
              Contact us
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-white">
              {mobileMenuOpen ? (
                <XMarkIcon className={`h-8 w-8  ${scrolled ? 'text-black' : 'text-white'} `} />
              ) : (
                <Bars3Icon className={`h-8 w-8  ${scrolled ? 'text-black' : 'text-white'} `} />
              )}
            </button>
          </div>

          {/* Contact Us Button */}
          <div className="hidden md:flex items-center ">
            <Link href={'/contact-us'} >
              <button
                className={`flex items-center px-6 py-3  rounded-full border-2 transition-all ${scrolled ? 'bg-primary text-white border-transparent hover:bg-white hover:text-primary hover:border-primary' : 'bg-transparent text-white border-white hover:bg-white hover:text-primary'}`}
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Links */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg py-4">
            <Link
              href="/"
              className={`block px-4 py-2 ${isActive('/')
                ? 'text-primary border-b-2 border-primary'
                : 'text-secondary hover:text-primary'
                }`}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className={`block px-4 py-2 ${isActive('/about-us')
                ? 'text-primary border-b-2 border-primary'
                : 'text-secondary hover:text-primary'
                }`}
            >
              About Us
            </Link>
            <Link
              href="/gallery"
              className={`block px-4 py-2 ${isActive('/gallery')
                ? 'text-primary border-b-2 border-primary'
                : 'text-secondary hover:text-primary'
                }`}
            >
              Gallery
            </Link>
            <Link
              href="/contact-us"
              className={`block px-4 py-2 ${isActive('/contact-us')
                ? 'text-primary border-b-2 border-primary'
                : 'text-secondary hover:text-primary'
                }`}
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </div>

  );
};

export default Navbar;
