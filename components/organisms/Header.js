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
          <Penguin className='h-10 w-10 md:h-12 md:w-12 lg:h-20 lg:w-20 rounded-full border border-1 border-gray p-1' />
        </Link>
      </div>
      <nav className='mt-3 lg:mt-4 uppercase tracking-wide text-xs spaced-x-6'>
        <NavBarItem href='/essays'>Essays</NavBarItem>
        <NavBarItem href='/library'>Library</NavBarItem>
        <NavBarItem href='/topics'>Topics</NavBarItem>
        <NavBarItem href='/series'>Series</NavBarItem>
      </nav>
    </header>
  )
}
