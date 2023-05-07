import React from 'react'
import Link from 'next/link'
import { H2 } from '../../Typography'
import LastEssay from '@/components/molecules/sections/Essays/LastEssay'
import SideEssayTrio from '@/components/molecules/sections/Essays/SideEssayTrio'

export default function Essays({ essays, className }) {
  return (
    <section id='Essays' className={`${className}`}>
      <Link href='/essays'>
        <H2>Essays</H2>
      </Link>
      <p className='text-lg'>
        Opinionated, longform narrative writing with an agenda
      </p>
      <div className='flex flex-col md:flex-row justify-between px-2 sm:px-6 mx-auto py-4'>
        <LastEssay
          className='md:basis-1/2 md:pr-4 border-b md:border-0 border-palette-grey mb-4 pb-4 md:mb-0 md:pb-0'
          essay={essays[0]}
        />
        <SideEssayTrio
          className='md:basis-1/2 md:border-l md:border-slate-300 md:pl-4'
          essays={essays.slice(1, 4)}
        />
      </div>
    </section>
  )
}
