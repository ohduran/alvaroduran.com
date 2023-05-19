import React from 'react'
import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'

export default function DefaultLayout({ children }) {
  return (
    <div
      className='font-family-hg text-palette-black bg-white grid gap-1 min-h-screen'
      style={{
        gridTemplateRows: 'auto 1fr auto',
      }}
    >
      <Header />
      <main className='my-2 sm:my-4'>{children}</main>
      <Footer />
    </div>
  )
}
