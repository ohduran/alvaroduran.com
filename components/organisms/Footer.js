import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='bg-white pb-10 border-t border-slate-300'>
      <div className='flex justify-between px-2 sm:px-6 mx-auto'>
        <div className='basis-full py-11 px-2 bg-plus mb-5 text-center'>
          Subscribe?
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4 px-2 sm:px-6 md:px-8'>
        <div className='grid-col-1 order-last md:order-first'>
          <h3 className='text-gray-500 hover:text-gray-900'>Alvaro Duran</h3>
        </div>
        <div className='grid-col-1'>
          <h3 className='font-bold mb-5'>Explore</h3>
          <ul>
            <li className='mb-1.5'>
              <Link href='#' className='text-gray-600 hover:text-gray-900'>
                Start Here
              </Link>
            </li>
            <li className='mb-1.5'>
              <Link href='#' className='text-gray-600 hover:text-gray-900'>
                Library
              </Link>
            </li>
            <li className='mb-1.5'>
              <Link href='#' className='text-gray-600 hover:text-gray-900'>
                Topics
              </Link>
            </li>
            <li className='mb-1.5'>
              <Link href='#' className='text-gray-600 hover:text-gray-900'>
                Series
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
