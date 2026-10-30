import Link from 'next/link';
import { site, nav } from '@/data/site';
export default function Header() {
  return (
    <header className="hdr">
      <div className="wrap hdr-in">
        <Link href="/" className="logo" aria-label="Google Peak home"><span className="logo-mark">GP</span><span>Google <b>Peak</b></span></Link>
        <nav className="nav">{nav.map((n) => <Link key={n.href} href={n.href}>{n.label}</Link>)}</nav>
        <a className="btn btn-sm" href={site.whatsapp} target="_blank" rel="noopener">WhatsApp Us</a>
      </div>
    </header>
  );
}
