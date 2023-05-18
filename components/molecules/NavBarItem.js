import React from 'react'
import Link from 'next/link'

export default function NavBarItem({ children, href }) {
  return (
    <Link href={href} className='mr-4'>
      <span className='font-semibold no-underline text-palette-black hover:text-palette-teal default-hover-transition'>
        {children}
      </span>
    </Link>
  )
}
