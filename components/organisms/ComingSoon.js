import React from 'react'
import { H1, P } from '../molecules/Typography'
import Link from 'next/link'
import UnderlineHoverLink from '../atoms/UnderlineHoverLink'

export default function ComingSoon({ className, title, subtitle, href }) {
  return (
    <section className={` ${className}`}>
      <div className='basis-full py-11 px-2 border-b border-t border-slate-300 bg-plus mb-5'>
        <Link href={href}>
          <H1 className='leading-8 text-4xl sm:text-5xl font-bold font-serif mb-4 tracking-tight text-transparent bg-clip-text max-w-fit from-fuchsia-700 to-indigo-700 bg-gradient-to-r py-2 hover:from-sky-600 hover:to-indigo-700'>
            {title}
          </H1>
        </Link>
        <P>
          {subtitle}
          <UnderlineHoverLink href={href}> Learn more</UnderlineHoverLink>
        </P>
      </div>
    </section>
  )
}
