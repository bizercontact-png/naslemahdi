import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', background: '#0f172a', color: 'white' }}>
      <h1>نسل مهدی</h1>
      <nav>
        <Link href="/">خانه</Link>
        <Link href="/education">آموزش</Link>
        <Link href="/nora">نورا</Link>
        <Link href="/news">اخبار</Link>
        <Link href="/competitions">مسابقات</Link>
      </nav>
    </header>
  )
}
