import Link from 'next/link'
import React from 'react'

export default function UnderlineHoverLink({ href, children, className }) {
  return (
    <Link href={href} className={` ${className}`}>
      {children}
    </Link>
  )
}
