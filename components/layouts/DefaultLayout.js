import React from 'react'
import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'

export default function DefaultLayout({ children }) {
  return (
    <div
      className='grid gap-1 min-h-screen container'
      style={{
        gridTemplateRows: 'auto 1fr auto',
      }}
    >
      <Header />
      <main className='px-2 sm:px-6 mx-auto'>{children}</main>
      <Footer />
    </div>
  )
}
