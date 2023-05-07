import DefaultLayout from '@/components/layouts/DefaultLayout'
import PostsListItem from '@/components/molecules/PostsListItem'
import { H1 } from '@/components/molecules/Typography'
import { getAllEssays } from '@/src/api'
import Head from 'next/head'

export default function Topic({ slug, essays }) {
  return (
    <DefaultLayout>
      <Head>
        <title>{`Topic: ${slug}`}</title>
      </Head>

      <header className='px-2 sm:px-6 mx-auto py-2 sm:py-6'>
        {/* capitalized topic */}
        <H1>{slug.replace(/^\w/, (c) => c.toUpperCase())}</H1>
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
                image_source={`../${essay.image_source}`}
              />
            )
          })}
        </div>
      </main>
    </DefaultLayout>
  )
}

// eslint-disable-next-line require-await
export const getStaticProps = async ({ params }) => {
  const { slug } = params

  const essays = getAllEssays().filter((essay) =>
    essay.meta.topics.includes(slug)
  )

  return {
    props: {
      slug,
      essays: essays.map((essay) => essay.meta),
    },
  }
}

// eslint-disable-next-line require-await
export const getStaticPaths = async () => {
  const essays = getAllEssays()

  const topics = new Set(essays.map((essay) => essay.meta.topics).flat())

  const paths = Array.from(topics).map((topic) => ({ params: { slug: topic } }))

  return {
    paths,
    fallback: false,
  }
}
