import React from 'react'

export default function MembersOnly() {
  return (
    // sm:inline-block hidden on one, and block mt-3 sm:hidden on the other
    // see commoncog.com
    <span className='sm:inline-block hidden'>
      <div className='p-1.5 border border-palette-grey-500 flex flex-row items-center text-gray-500 rounded-md font-sans w-max text-sm'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-4 w-4'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth='2'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
          ></path>
        </svg>
        &nbsp;
        <span className='block w-max'>Members only</span>
      </div>
    </span>
  )
}
