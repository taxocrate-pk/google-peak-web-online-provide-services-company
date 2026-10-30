import { notFound } from 'next/navigation';
import PageView from '@/components/PageView';
import { pages, getPage } from '@/data/pages';
export const dynamicParams = false;
export function generateStaticParams() { return pages.filter((p) => p.slug).map((p) => ({ slug: p.slug })); }
export async function generateMetadata({ params }) {
  const { slug } = await params; const p = getPage(slug); if (!p) return {};
  return { title: p.title, description: p.description, alternates: { canonical: `/${p.slug}/` }, openGraph: { title: p.title, description: p.description, images: [p.images[0].src] } };
}
export default async function Page({ params }) { const { slug } = await params; const p = getPage(slug); if (!p) notFound(); return <PageView page={p} />; }
