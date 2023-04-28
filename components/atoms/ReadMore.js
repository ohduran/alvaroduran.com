import Link from 'next/link'
import React from 'react'

export default function ReadMore({ href }) {
  return (
    <Link href={href}>
      <button>
        <span>Read More</span>
      </button>
    </Link>
  )
}
