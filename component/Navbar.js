import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav className="bg-white sticky top-0 z-50  shadow-lg">
        <div className="w-11/12 container mx-auto">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                <Link href="/" className="flex items-center py-4  ">
                  <Image src="/jobme.png" width={100} height={100} alt='logo'/>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-1 gap-4">
              <Link
                href="/"
                className="py-4 px-2 text-gray-500 text-hover transition duration-300"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="py-4 px-2 text-gray-500 text-hover transition duration-300"
              >
                Job Listings
              </Link>
              <Link
                href="/contact"
                className="py-4 px-2 text-gray-500 text-hover transition duration-300"
              >
                Contact Us
              </Link>
            </div>

            <div className="max-sm:hidden md:visible flex justify-center text-center gap-3">
              <Link href="/login" className="w-16 h-10 py-2 hidden md:block my-auto rounded btn-color text-white hover:bg-white hover:text-black">
                Log In
              </Link>
              <Link href="/signup" className="w-16 h-10 py-2 hidden md:block my-auto rounded hover-btn hover:text-white">
                Sign Up
              </Link>
            </div>

            <div className="md:hidden flex items-center">
              <button
                className="outline-none mobile-menu-button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  className="w-6 h-6 text-gray-500 hover:text-gray-900"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <Link
            href="/"
            className="block py-2 px-4 text-sm text-black text-hover"
          >
            Home
          </Link>
          <Link
            href="/joblisting"
            className="block py-2 px-4 text-sm text-black text-hover"
          >
            Job Listings
          </Link>
          <Link
            href="/contact"
            className="block py-2 px-4 text-sm text-black text-hover"
          >
            Contact Us
          </Link>

          <div className="flex flex-col justify-start gap-2 mt-2">
            <Link href="/login" className="text-left ps-4 text-hover">
              Log In
            </Link>

            <Link href="/signup" className="text-left ps-4 text-hover">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar