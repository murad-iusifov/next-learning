'use client'
import { useRouter } from "next/navigation"

export default function BackButton() {
  const router = useRouter();

  const routerAction = () => {
    // router.back()
    // router.push('/')
    // router.replace('/form');
    router.refresh(); // перезагружает данные на сервере
  }

  return (
    <button onClick={routerAction} className="border px-2 rounded-sm mb-4">
      Router using
    </button>
  );
}