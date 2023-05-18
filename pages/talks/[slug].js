import { getTalkFromSlug, getTalkSlugs } from '@/src/api'
import React from 'react'
import { serialize } from 'next-mdx-remote/serialize'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import { H1 } from '@/components/molecules/Typography'
import YouTube from '@/components/atoms/Youtube'
import { MDXRemote } from 'next-mdx-remote'

export default function Talk({ post }) {
  return (
    <DefaultLayout>
      <main className='px-4 sm:px-6 md:px-8'>
        <div className='max-w-3xl mx-auto'>
          <H1>{post.meta.title}</H1>
          <YouTube
            className='py-6'
            id={post.meta.youtubeId}
            title={`Video for ${post.meta.title}`}
          />
          <article className='prose'>
            <MDXRemote {...post.source} components={{}} />
          </article>
        </div>
      </main>
    </DefaultLayout>
  )
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params
  const { content, meta } = getTalkFromSlug(slug)

  const mdxSource = await serialize(content)

  return {
    props: {
      post: {
        source: mdxSource,
        meta,
      },
    },
  }
}

// eslint-disable-next-line require-await
export const getStaticPaths = async () => {
  const paths = getTalkSlugs().map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
