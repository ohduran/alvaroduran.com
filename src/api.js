import { sync } from 'glob'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

const ESSAYS_PATH = path.join(process.cwd(), 'posts', 'essays')

export const getSlugs = () => {
  const paths = sync(`${ESSAYS_PATH}/*.mdx`)

  return paths.map((path) => {
    const parts = path.split('/')
    const filename = parts[parts.length - 1]
    const [slug] = filename.split('.')
    return slug
  })
}

export const getAllEssays = () => {
  const essays = getSlugs()
    .map((slug) => getEssayFromSlug(slug))
    .sort((a, b) => {
      if (a.meta.date > b.meta.date) return -1
      if (a.meta.date < b.meta.date) return 1
      return 0
    })

  return essays
}

export const getEssayFromSlug = (slug) => {
  const essayPath = path.join(ESSAYS_PATH, `${slug}.mdx`)

  const source = fs.readFileSync(essayPath)

  const { content, data } = matter(source)

  return {
    content,
    meta: {
      slug,
      excerpt: data.excerpt,
      title: data.title,
      topics: (data.topics ? data.topics : []).sort(),
      date: data.date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
      image_source: data.image_source || '',
    },
  }
}
