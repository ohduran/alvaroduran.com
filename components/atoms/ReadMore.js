import Link from 'next/link'
import React from 'react'

export default function ReadMore({ href, className }) {
  return (
    <div className='flex justify-center'>
      <Link href={href} className={className}>
        <button className='border border-palette-grey py-3 px-8 mt-1 md:mt-0 mb-5 block md:inline-block rounded-lg hover:border-palette-black default-hover-duration'>
          <span className='font-light font-family-lora'>Read More</span>
        </button>
      </Link>
    </div>
  )
}
