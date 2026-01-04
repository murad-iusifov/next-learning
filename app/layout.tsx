import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'NextJS Учебный проект',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        <header style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
          <nav>
            <Link href="/">Главная</Link> |{' '}
            <Link href="/about">О нас</Link> |{' '}
            <Link href="/blog">Блог</Link> |{' '}
            <Link href="/form">Форма</Link>
          </nav>
        </header>
        <main style={{ padding: '20px' }}>
          {children}
        </main>
        <footer style={{ padding: '10px', borderTop: '1px solid #ccc' }}>
          &copy; 2025 Учебный проект
        </footer>
      </body>
    </html>
  );
}
