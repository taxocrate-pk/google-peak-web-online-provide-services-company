import PageView from '@/components/PageView';
import { getPage } from '@/data/pages';
const page = getPage('');
export const metadata = { title: page.title, description: page.description, alternates: { canonical: '/' } };
export default function Home() { return <PageView page={page} />; }
