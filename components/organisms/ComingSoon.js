import React from 'react'
import { P } from '../molecules/Typography'
import Link from 'next/link'
import UnderlineHoverLink from '../atoms/UnderlineHoverLink'

export default function ComingSoon({ className, title, subtitle, href }) {
  return (
    <section
      className={`w-full bg-floating-cogs text-palette-grey px-2 sm:px-6 mx-auto ${className}`}
    >
      <div className='basis-full py-11 px-2 bg-plus mb-5'>
        <Link href={href}>
          <h1 className='leading-8 text-4xl sm:text-5xl font-bold font-serif mb-4 tracking-tight text-transparent bg-clip-text max-w-fit bg-gradient-to-r py-2 from-palette-red to-palette-teal hover:from-palette-grey hover:to-palette-red default-hover-transition'>
            {title}
          </h1>
        </Link>
        <P>
          {subtitle}
          <UnderlineHoverLink href={href}> Learn more</UnderlineHoverLink>
        </P>
      </div>
    </section>
  )
}
