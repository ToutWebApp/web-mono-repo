"use client";

import type React from "react";
import { useState } from "react";
// import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, onClick }) => (
  <Link
    href={href}
    className='text-sm font-medium hover:text-ipsum-orange transition-colors'
    onClick={onClick}
  >
    {label}
  </Link>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-white'>
      <div className='container flex items-center justify-between px-4 py-4 mx-auto'>
        <div className='flex items-center space-x-2'>
          <Link href='/' className='flex items-center'>
            <Image src={"/logo.svg"} alt={""} width={150} height={150} />
          </Link>
        </div>

        {/* <nav className='hidden md:flex md:items-center md:space-x-8'>
          <NavLink href='#services' label='Services' />
          <NavLink href='#about' label='About' />
          <NavLink href='#work' label='Work' />
          <NavLink href='#contact' label='Contact' />
        </nav> */}

        {/* <button
          type='button'
          className='px-6 py-2 text-sm font-medium text-white rounded-full bg-ipsum-orange hover:bg-opacity-90 hidden md:block'
        >
          Get Started
        </button> */}

        <button
          type='button'
          className='p-2 text-ipsum md:hidden focus:outline-none'
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {/* {isOpen ? <X size={24} /> : <Menu size={24} />} */}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className='fixed inset-0 z-50 flex flex-col items-center justify-center bg-white md:hidden'>
          <button
            type='button'
            className='absolute p-2 top-4 right-4 text-ipsum focus:outline-none'
            onClick={closeMenu}
            aria-label='Close menu'
          >
            {/* <X size={24} /> */}
          </button>

          <nav className='flex flex-col items-center space-y-6'>
            <NavLink href='#services' label='Services' onClick={closeMenu} />
            <NavLink href='#about' label='About' onClick={closeMenu} />
            <NavLink href='#work' label='Work' onClick={closeMenu} />
            <NavLink href='#contact' label='Contact' onClick={closeMenu} />
            <button
              type='button'
              className='px-6 py-2 text-lg font-medium text-white rounded-full bg-ipsum-orange hover:bg-opacity-90'
            >
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
