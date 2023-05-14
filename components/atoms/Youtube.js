import React from 'react'

export default function YouTube({ id, className, title }) {
  return (
    <div className={`relative rounded-xl overflow-auto ${className}`}>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        className='w-full max-w-xl mx-auto aspect-video rounded-lg shadow-lg border-none'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        title={title ? title : 'Embedded Youtube video'}
      />
    </div>
  )
}
