import React from 'react'
import Link from 'next/link'

export default function SideEssayTrio({ essays, className }) {
  return essays && essays.length == 3 ? (
    <div className={` ${className}`}>
      {essays.map((essay) => {
        const href = `essays/${essay.slug}`
        return (
          <Link href={href} key={essay.slug}>
            <div className='grid grid-cols-5 gap-4 pb-4 mb-5 md:px-2 border-b border-slate-300'>
              <div className='sm:order-last col-span-2'>
                <img
                  className=''
                  src={essay.image_source}
                  alt={`Feature image for ${essay.title}`}
                />
              </div>
              <div className='col-span-3'>
                <h2 className='text-2xl font-serif inline mr-2 hover:text-purple-500'>
                  {essay.title}
                </h2>
                <p className='font-serif mt-3'>{essay.excerpt}</p>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  ) : (
    'This is supposed to be a Trio'
  )
}
