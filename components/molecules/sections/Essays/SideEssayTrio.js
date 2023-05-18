import React from 'react'
import PostsListItem from '../../PostsListItem'

export default function SideEssayTrio({ essays, className }) {
  return essays && essays.length == 3 ? (
    <div className={` ${className}`}>
      {essays.map((essay) => {
        return (
          <PostsListItem
            key={essay.slug}
            href={`essays/${essay.slug}`}
            title={essay.title}
            slug={essay.slug}
            excerpt={essay.excerpt}
            image_source={`/media/essays/${essay.slug}/${essay.image_source}`}
          />
        )
      })}
    </div>
  ) : (
    'This is supposed to be a Trio'
  )
}
