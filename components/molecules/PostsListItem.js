import React from 'react'
import Link from 'next/link'
import { H3 } from './Typography'

export default function PostsListItem({
  href,
  slug,
  image_source,
  title,
  excerpt,
}) {
  return (
    <Link href={href} key={slug}>
      <div className='grid grid-cols-5 gap-4 pb-4 mb-5 md:px-2 border-b border-palette-grey'>
        <div className='sm:order-last col-span-2'>
          <img
            className=''
            src={image_source}
            alt={`Feature image for ${title}`}
          />
        </div>
        <div className='col-span-3'>
          <H3>
            <span className='hover:text-palette-teal'>{title}</span>
          </H3>
          <p className='font-serif mt-3'>{excerpt}</p>
        </div>
      </div>
    </Link>
  )
}
