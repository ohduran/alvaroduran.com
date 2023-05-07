import Link from 'next/link'
import React from 'react'
import Penguin from '../molecules/icons/Penguin'
import NavBarItem from '../molecules/NavBarItem'

export default function Header({ className }) {
  return (
    <header
      className={`py-6 px-6 flex md:block lg:flex items-center max-w-full ${className}`}
    >
      <div className='mb-0 md:mb-4 lg:mb-0 flex flex-no-shrink pr-4 md:pr-6 lg:pr-12'>
        <Link href='/'>
          <Penguin
            className='h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 rounded-full border border-1 border-palette-teal p-1'
            primaryColor='#020617'
            tertiaryColor='#252A34'
            secondaryColor='#08D9D6'
          />
        </Link>
      </div>
      <nav className='mt-3 lg:mt-4 uppercase tracking-wide text-xs sm:text-sm spaced-x-6'>
        <NavBarItem href='/start-here'>Start Here</NavBarItem>
        <NavBarItem href='/essays'>Essays</NavBarItem>
        <NavBarItem href='/talks'>Talks</NavBarItem>
        {/* <NavBarItem href='/library'>Library</NavBarItem> */}
      </nav>
    </header>
  )
}
