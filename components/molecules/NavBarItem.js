import React from 'react'
import Link from 'next/link'

export default function NavBarItem({ children, href }) {
  return (
    <Link href={href} className='mr-4'>
      <span className='text-grey-dark font-semibold no-underline hover:text-black'>
        {children}
      </span>
    </Link>
  )
}
