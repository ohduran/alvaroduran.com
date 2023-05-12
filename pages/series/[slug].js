import DefaultLayout from '@/components/layouts/DefaultLayout'
import React from 'react'
import path from 'path'
import fs from 'fs'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { getSeriesSlugs } from '@/src/api'

const components = {}

export default function FraudProviderSeries({ source }) {
  return (
    <DefaultLayout>
      <main className='px-2 sm:px-6 mx-auto py-2 sm:py-6'>
        <MDXRemote {...source} components={components} />
      </main>
    </DefaultLayout>
  )
}

const METAPOST_PATH = path.join(process.cwd(), 'posts', 'meta', 'series')

export async function getStaticProps({ params }) {
  const { slug } = params
  const essayPath = path.join(METAPOST_PATH, `${slug}.mdx`)
  const source = fs.readFileSync(essayPath)

  const mdxSource = await serialize(source)
  return { props: { source: mdxSource } }
}

// eslint-disable-next-line require-await
export const getStaticPaths = async () => {
  const paths = getSeriesSlugs().map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
