import { getEssayFromSlug, getEssaySlugs } from '@/src/api'
import { MDXRemote } from 'next-mdx-remote'
import { Image } from 'next/image'
import { serialize } from 'next-mdx-remote/serialize'
import React from 'react'
import { H1 } from '@/components/molecules/Typography'
import YouTube from '@/components/atoms/Youtube'

// https://github.com/rehypejs/rehype/blob/main/doc/plugins.md
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

// https://github.com/highlightjs/highlight.js/tree/main/src/styles
import 'highlight.js/styles/panda-syntax-dark.css'
import DefaultLayout from '@/components/layouts/DefaultLayout'

export default function Essay({ post }) {
  return (
    <DefaultLayout>
      <main className='px-4 sm:px-6 md:px-8'>
        <div className='max-w-3xl mx-auto'>
          <H1>{post.meta.title}</H1>
          <article className='prose'>
            <MDXRemote {...post.source} components={{ YouTube, Image }} />
          </article>
        </div>
      </main>
    </DefaultLayout>
  )
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params
  const { content, meta } = getEssayFromSlug(slug)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behaviour: 'wrap' }],
      ],
    },
  })

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
  const paths = getEssaySlugs().map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
