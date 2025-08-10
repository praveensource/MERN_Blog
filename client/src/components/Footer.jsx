import React from 'react'
import { Footer, FooterCopyright, FooterDivider, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle } from 'flowbite-react'
import { Link } from 'react-router-dom'
import {BsFacebook} from 'react-icons/bs'

const Footercom = () => {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className="w-full max-w-7xl mx-auto">
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
        <Link
        to="/"
        className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Praveen&apos;s
        </span>{' '}
        Blog
      </Link>
      </div>
        

      <div className='grid grid-cols-2 gap-3 sm: mt-4 sm:grid-cols-3 sm:gap-6'>
        <div>
        <FooterTitle title='About' />
        <FooterLinkGroup col>
          <FooterLink href="https://github.com/praveensource" target='_blank' rel='noopener noreferrer'>
            My Projects
          </FooterLink>
          <FooterLink href="https://github.com/praveensource" target='_blank' rel='noopener noreferrer'>
            Praveen's Github
          </FooterLink>
        </FooterLinkGroup>
        </div>

        <div>
        <FooterTitle title='Follow Us' />
        <FooterLinkGroup col>
          <FooterLink href="https://github.com/praveensource" target='_blank' rel='noopener noreferrer'>
            Github
          </FooterLink>
          <FooterLink href="https://github.com/praveensource" target='_blank' rel='noopener noreferrer'>
            Praveen's Github
          </FooterLink>
        </FooterLinkGroup>
        </div>

        <div>
        <FooterTitle title='Legal' />
        <FooterLinkGroup col>
          <FooterLink href="#" target='_blank' rel='noopener noreferrer'>
            Privacy Policy
          </FooterLink>
          <FooterLink href="https://github.com/praveensource" target='_blank' rel='noopener noreferrer'>
            Terms &amp; COnditions
          </FooterLink>
        </FooterLinkGroup>
        </div>


        
      </div>
      </div>

      <FooterDivider />
      <div>
        <FooterCopyright href='#' by='praveen"s Blog' year={new Date().getFullYear()} />
        <div className='flex gap-2'>
          <FooterIcon href='#' icon={BsFacebook} />
          <FooterIcon href='#' icon={BsFacebook} />
          <FooterIcon href='#' icon={BsFacebook} />
          <FooterIcon href='#' icon={BsFacebook} />
        </div>
      </div>
      </div>

    </Footer>
  )
}

export default Footercom
