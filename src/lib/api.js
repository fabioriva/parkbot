import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const docsDirectory = join(process.cwd(), '_docs')

export function getDocSlugs (locale = 'en') {
  return fs.readdirSync(join(docsDirectory, locale))
}

export function getDocBySlug (slug, fields = [], locale = 'en') {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(docsDirectory, locale, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllDocs (fields = []) {
  const slugs = getDocSlugs()
  const Docs = slugs.map(slug => getDocBySlug(slug, fields))
  // sort Docs by date in descending order
  // .sort((Doc1, Doc2) => (Doc1.date > Doc2.date ? -1 : 1))
  return Docs
}
