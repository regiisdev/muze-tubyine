import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: ['Applebot', 'Bingbot', 'Googlebot'],
                allow: '*',
                disallow: ['/admin/']
            },
        ],
        sitemap: `/sitemap.xml`,
    }
}