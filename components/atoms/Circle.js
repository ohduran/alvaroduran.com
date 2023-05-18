import React from 'react'

export default function Circle() {
  return (
    <svg
      viewBox='0 0 9 9'
      className='hidden absolute right-full mr-6 top-2 text-slate-200 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block'
    >
      <circle
        cx='4.5'
        cy='4.5'
        r='4.5'
        stroke='currentColor'
        className='fill-white'
        strokeWidth='2'
      ></circle>
    </svg>
  )
}
