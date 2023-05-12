import { sync } from 'glob'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

const ESSAYS_PATH = path.join(process.cwd(), 'posts', 'essays')
const SERIES_PATH = path.join(process.cwd(), 'posts', 'meta', 'series')

export const getSlugs = (directory) => {
  return () => {
    const paths = sync(`${directory}/*.mdx`)

    return paths.map((path) => {
      const parts = path.split('/')
      const filename = parts[parts.length - 1]
      const [slug] = filename.split('.')
      return slug
    })
  }
}

export const getEssaySlugs = getSlugs(ESSAYS_PATH)

export const getSeriesSlugs = getSlugs(SERIES_PATH)

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

export const getAllEssays = () => {
  const essays = getEssaySlugs()
    .map((slug) => getEssayFromSlug(slug))
    .sort((a, b) => {
      if (a.meta.date > b.meta.date) return -1
      if (a.meta.date < b.meta.date) return 1
      return 0
    })

  return essays
}
