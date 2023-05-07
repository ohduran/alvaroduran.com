import React from 'react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-palette-white pb-10 pt-11 border-t border-palette-grey text-palette-black'>
      {/* <div className='flex justify-between px-2 sm:px-6 mx-auto'>
        <div className='basis-full pb-11 px-2 bg-plus mb-5 text-center'>
          Subscribe?
        </div>
      </div> */}
      <div className='grid grid-cols-1 gap-4 px-2 sm:px-6 md:px-8'>
        <div className='grid-col-1 order-last md:order-first'>
          <h3 className=''>Alvaro Duran © {currentYear}</h3>
        </div>
        <div className='grid-col-1'>
          <h3 className='font-bold mb-5'>Explore</h3>
          <ul>
            <FooterLink href='/start-here'>Start Here</FooterLink>
            {/* <FooterLink href="#">
              Library
            </FooterLink> */}
            <FooterLink href='/essays'>Essays</FooterLink>
            <FooterLink href='/talks'>Talks</FooterLink>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export function FooterLink({ href, children }) {
  return (
    <li className='mb-1.5'>
      <Link
        href={href}
        className='hover:text-palette-teal default-hover-transition'
      >
        {children}
      </Link>
    </li>
  )
}
