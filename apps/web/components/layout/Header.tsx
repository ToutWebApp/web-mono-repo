"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, LogOut, User } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@repo/ui/components/ui/sheet";
import { Button } from "@repo/ui/components/ui/button";
import { useUser } from "@repo/auth";

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

export default function Header() {
  const { user, loading, logout } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);  

  const handleSignOut = () => {
    logout();
  };

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200'>
      <div className='container flex items-center justify-between px-4 py-4 mx-auto'>
        <Link href='/' className='flex items-center'>
          <Image src='/logo.svg' alt='Logo' width={150} height={150} />
        </Link>

        {/* Mobile Menu Trigger */}
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant='ghost'
              size='icon'
              className='md:hidden text-ipsum'
              aria-label='Toggle menu'
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </SheetTrigger>

          <SheetContent side='right' className='w-full max-w-sm'>
            <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
            <div className='flex flex-col items-center mt-8 space-y-6'>
              <SheetClose asChild>
                <NavLink
                  href='/services'
                  label='Services'
                  onClick={() => setMenuOpen(false)}
                />
              </SheetClose>
              <SheetClose asChild>
                <NavLink
                  href='#about'
                  label='About'
                  onClick={() => setMenuOpen(false)}
                />
              </SheetClose>
              <SheetClose asChild>
                <NavLink
                  href='#contact'
                  label='Contact'
                  onClick={() => setMenuOpen(false)}
                />
              </SheetClose>
              {user?.email ? (
                <SheetClose asChild>
                  <Button
                    onClick={handleSignOut}
                    className='text-lg font-medium rounded-ful text-white bg-ipsum-orange hover:bg-opacity-90'
                  >
                    <LogOut className='w-4 h-4 mr-2 text-white' /> Logout
                  </Button>
                </SheetClose>
              ) : (
                <SheetClose asChild>
                  <Button
                    onClick={() => setMenuOpen(false)}
                    className='text-lg font-medium rounded-full bg-ipsum-orange hover:bg-opacity-90'
                  >
                    <Link href='/auth/login'>Login</Link>
                  </Button>
                </SheetClose>
              )}
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop Menu */}
        <nav className='hidden md:flex items-center space-x-6'>
          <NavLink href='/services' label='Services' />
          <NavLink href='#about' label='About' />
          <NavLink href='#contact' label='Contact' />

          {user?.email ? (
            <div className='flex items-center space-x-4'>
              <Link href='/profile' className='flex items-center space-x-1'>
                <User className='w-5 h-5 text-slate-700' />
                <span className='text-sm'>{user?.email}</span>
              </Link>
              <Button
                variant='outline'
                onClick={handleSignOut}
                className='flex items-center'
              >
                <LogOut className='w-4 h-4 mr-1' /> Sign Out
              </Button>
            </div>
          ) : (
            <Button variant='outline'>
              <Link href='/auth/login'>Login</Link>
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
}
