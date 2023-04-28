import { getEssayFromSlug, getSlugs } from '@/src/api'
import { MDXRemote } from 'next-mdx-remote'
import { Image } from 'next/image'
import { serialize } from 'next-mdx-remote/serialize'
import React from 'react'
import YouTube from '@/components/atoms/Youtube'

// https://github.com/rehypejs/rehype/blob/main/doc/plugins.md
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'

// https://github.com/highlightjs/highlight.js/tree/main/src/styles
import 'highlight.js/styles/panda-syntax-dark.css'

export default function Essay({ post }) {
  return (
    <>
      <div>Essay</div>
      <h1>{post.meta.title}</h1>
      <div className=''>
        <MDXRemote {...post.source} components={{ YouTube, Image }} />
      </div>
    </>
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
        rehypeHighlight,
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
  const paths = getSlugs().map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
