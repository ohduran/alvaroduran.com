import DefaultLayout from '@/components/layouts/DefaultLayout'
import PostsListItem from '@/components/molecules/PostsListItem'
import { H1 } from '@/components/molecules/Typography'
import { getAllTalks } from '@/src/api'
import React from 'react'

export default function Talks({ talks }) {
  return (
    <DefaultLayout>
      <header className='px-2 sm:px-6 mx-auto py-2 sm:py-6'>
        <H1>Talks</H1>
      </header>
      <main className='px-2 sm:px-6 py-6 mx-auto'>
        <div>
          {talks.map((talk) => {
            return (
              <PostsListItem
                key={talk.slug}
                href={`talks/${talk.slug}`}
                title={talk.title}
                slug={talk.slug}
                excerpt={talk.excerpt}
                image_source={`https://img.youtube.com/vi/${talk.youtubeId}/0.jpg`}
              />
            )
          })}
        </div>
      </main>
    </DefaultLayout>
  )
}

export function getStaticProps() {
  const talks = getAllTalks().map((talk) => talk.meta)

  return { props: { talks } }
}
