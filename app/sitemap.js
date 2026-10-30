import { pages } from '@/data/pages';
import { site } from '@/data/site';
export default function sitemap() { return pages.map((p) => ({ url: `${site.url}${p.slug ? `/${p.slug}/` : '/'}`, lastModified: '2026-10-30' })); }
