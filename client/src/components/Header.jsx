import React from 'react';
import { Button, Navbar, NavbarCollapse, NavbarLink, NavbarToggle, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
  const path = useLocation().pathname;

  return (
    <Navbar className="border-b-2" fluid>
      {/* Brand Logo */}
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Praveen&apos;s
        </span>{' '}
        Blog
      </Link>

      {/* Search Bar for large screens */}
      <form className="hidden lg:inline">
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
        />
      </form>

      {/* Mobile Search Button */}
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>

      {/* Right-side buttons */}
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>

        <Link to="/sign-in">
          <Button
            className="text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Sign In
          </Button>
        </Link>

        <NavbarToggle />
      </div>

      {/* Navigation Links */}
      <NavbarCollapse>
        <NavbarLink as="div" active={path === '/'}>
          <Link
            to="/"
            className={`block px-3 py-2 rounded-md ${
              path === '/' ? 'bg-blue-500 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            Home
          </Link>
        </NavbarLink>

        <NavbarLink as="div" active={path === '/about'}>
          <Link
            to="/about"
            className={`block px-3 py-2 rounded-md ${
              path === '/about' ? 'bg-blue-500 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            About
          </Link>
        </NavbarLink>

        <NavbarLink as="div" active={path === '/projects'}>
          <Link
            to="/projects"
            className={`block px-3 py-2 rounded-md ${
              path === '/projects' ? 'bg-blue-500 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            Projects
          </Link>
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
