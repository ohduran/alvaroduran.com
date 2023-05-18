import React from 'react'

// Contrary colors for hover, like
// from-fuchsia-700 to-indigo-700 bg-gradient-to-r
// hover:from-sky-600 hover:to-indigo-700
// text-transparent

export function H1({ children }) {
  return (
    <h1 className='leading-8 text-4xl sm:text-5xl font-family-lora font-bold mb-4 tracking-tight'>
      {children}
    </h1>
  )
}

export function H2({ children }) {
  return (
    <h2 className='leading-6 text-2xl sm:text-3xl font-family-lora font-bold mb-2 tracking-normal'>
      {children}
    </h2>
  )
}

export function H3({ children }) {
  return <h3 className='text-2xl font-semibold inline mr-2 mb-2'>{children}</h3>
}

export function H4({ children }) {
  return <h4 className='text-xl font-semibold mr-1 mb-2'>{children}</h4>
}

export function P({ children }) {
  return <p className='text-xl font-semibold'>{children}</p>
}
