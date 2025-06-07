import Image from "next/image";
import Link from "next/link";
import { Twitter, Youtube, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className='bg-white border-t border-gray-200 py-4 px-6'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4'>
        {/* Left: Logo */}
        <div className='flex items-center gap-2'>
          <Image src='/logo.svg' alt='Logo' width={100} height={40} />
        </div>

        {/* Center: Links */}
        <nav className='flex space-x-6 text-sm text-gray-500'>
          <Link href='/about' className='hover:text-black transition'>
            About
          </Link>
          <Link href='/privacy' className='hover:text-black transition'>
            Privacy
          </Link>
          <Link href='/terms' className='hover:text-black transition'>
            Terms
          </Link>
          <Link href='/careers' className='hover:text-black transition'>
            Careers
          </Link>
        </nav>

        {/* Right: Social Icons */}
        <div className='flex space-x-4'>
          <a
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-500 hover:text-black'
          >
            <Twitter size={18} />
          </a>
          <a
            href='https://youtube.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-500 hover:text-black'
          >
            <Youtube size={18} />
          </a>
          <a
            href='https://instagram.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-500 hover:text-black'
          >
            <Instagram size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};
