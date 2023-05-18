import DefaultLayout from '@/components/layouts/DefaultLayout'
import { H1 } from '@/components/molecules/Typography'
import { getAllEssays } from '@/src/api'
import PostsListItem from '@/components/molecules/PostsListItem'
import React from 'react'

export default function EssaysHome({ essays }) {
  return (
    <DefaultLayout>
      <header className='px-2 sm:px-6 mx-auto py-2 sm:py-6'>
        <H1>Essays</H1>
      </header>
      <main className='px-2 sm:px-6 py-6 mx-auto'>
        <div>
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
      </main>
    </DefaultLayout>
  )
}

export function getStaticProps() {
  const essays = getAllEssays().map((essay) => essay.meta)

  return { props: { essays } }
}
