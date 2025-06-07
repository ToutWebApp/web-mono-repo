"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@repo/ui/components/ui/sheet";
import { Button } from "@repo/ui/components/ui/button";

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
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200'>
      <div className='container flex items-center justify-between px-4 py-4 mx-auto'>
        <Link href='/' className='flex items-center'>
          <Image src='/logo.svg' alt='Logo' width={150} height={150} />
        </Link>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant='ghost'
              size='icon'
              className='md:hidden text-ipsum'
              aria-label='Toggle menu'
            >
              <Menu size={24} />
            </Button>
          </SheetTrigger>

          <SheetContent side='right' className='w-full max-w-sm'>
            <div className='flex flex-col items-center mt-8 space-y-6'>
              <SheetClose asChild>
                <NavLink href='#services' label='Services' />
              </SheetClose>
              <SheetClose asChild>
                <NavLink href='#about' label='About' />
              </SheetClose>
              <SheetClose asChild>
                <NavLink href='#contact' label='Contact' />
              </SheetClose>
              <SheetClose asChild>
                <Button className='text-lg font-medium rounded-full bg-ipsum-orange hover:bg-opacity-90'>
                  Get Started
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop Menu (optional) */}
        <nav className='hidden md:flex items-center space-x-6'>
          <NavLink href='#services' label='Services' />
          <NavLink href='#about' label='About' />
          <NavLink href='#contact' label='Contact' />
          <Button className='rounded-full bg-ipsum-orange hover:bg-opacity-90'>
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
