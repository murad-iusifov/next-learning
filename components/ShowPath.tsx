'use client';
import { usePathname } from 'next/navigation';

export default function ShowPath() {
  const pathname = usePathname();

  return <div>Текущий путь: {pathname}</div>;
}