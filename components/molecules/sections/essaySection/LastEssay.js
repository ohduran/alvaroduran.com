import React from 'react'
import Link from 'next/link'

export default function LastEssay({ essay, className }) {
  const href = `essays/${essay.slug}`
  return (
    <Link href={href}>
      <article className={` ${className}`}>
        <img
          className=''
          src={essay.image_source}
          alt={`Feature image for ${essay.title}`}
        />
        <h2 className='text-3xl mt-4 mb-4 font-serif hover:text-purple-500'>
          {essay.title}
        </h2>
        <p className='font-serif text-lg'>{essay.excerpt}</p>
      </article>
    </Link>
  )
}
