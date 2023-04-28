import React from 'react'
import LastEssay from '@/components/molecules/sections/essaySection/LastEssay'
import SideEssayTrio from '@/components/molecules/sections/essaySection/SideEssayTrio'

export default function EssaySection({ essays }) {
  return (
    <div className='flex flex-col md:flex-row justify-between px-2 sm:px-6 mx-auto py-4'>
      <LastEssay
        className='md:basis-1/2 md:pr-4 border-b md:border-0 border-slate-300 mb-4 pb-4 md:mb-0 md:pb-0'
        essay={essays[0]}
      />
      <SideEssayTrio
        className='md:basis-1/2 md:border-l md:border-slate-300 md:pl-4'
        essays={essays.slice(1, 4)}
      />
    </div>
  )
}
