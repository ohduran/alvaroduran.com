import DefaultLayout from '@/components/layouts/DefaultLayout'
import React from 'react'
import path from 'path'
import fs from 'fs'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

const components = {}

export default function StartHere({ source }) {
  return (
    <DefaultLayout>
      <main className='px-2 sm:px-6 mx-auto py-2 sm:py-6'>
        <div className='mx-auto max-w-2xl'>
          <div className='mt-2 mx-auto prose text-normal sm:text-lg md:text-xl lg:text-xl'>
            <MDXRemote {...source} components={components} />
          </div>
        </div>
      </main>
    </DefaultLayout>
  )
}

export async function getStaticProps() {
  const METAPOST_PATH = path.join(process.cwd(), 'posts', 'meta')
  const essayPath = path.join(METAPOST_PATH, `start-here.mdx`)
  const source = fs.readFileSync(essayPath)

  const mdxSource = await serialize(source)
  return { props: { source: mdxSource } }
}
