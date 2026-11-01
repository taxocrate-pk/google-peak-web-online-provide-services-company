import { pages } from '@/data/pages';
import { site } from '@/data/site';
export default function sitemap() { return pages.map((p) => ({ url: `${site.url}${p.slug ? `/${p.slug}/` : '/'}`, lastModified: '2026-10-30' })).concat([{ url: `${site.url}/legal-websites-for-rent/`, lastModified: '2026-11-01' }]); }
