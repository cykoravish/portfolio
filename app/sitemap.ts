import { MetadataRoute } from 'next'
import { getAllSlugs } from '@/lib/getBlogs'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cykoravish.cloud'

  const staticRoutes = [
    '/',
    '/about',
    '/projects',
    '/skills-tools',
    '/experience',
    '/education',
    '/blog',
    '/contact',
    '/stats',
    '/resume/resume.pdf',
    '/services',
  ]

  const staticUrls: MetadataRoute.Sitemap = staticRoutes.map((route) => {
    const changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] =
      route === '/' ? 'weekly' : 'monthly'

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency,
      priority: route === '/' ? 1.0 : 0.8,
    }
  })

  const blogSlugs = getAllSlugs()

  const blogUrls: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticUrls, ...blogUrls]
}
