async function getTime() {
  try {
  const res = await fetch('https://worldtimeapi.org/api/timezone/Europe/Paris', {
    cache: 'force-cache', // данные берутся с сервера один раз при build. далее кешируется и отдается без изменений
    // cache: 'no-store', // данные берутся с сервера при каждом (http-)запросе страницы
    // next: { revalidate: 10 }, // данные берутся с сервера каждые 10 секунд
  });

  return res.json();
  } catch(e) {
    console.log(e)
  }
}

export default async function DemoPage() {
  const data = await getTime();

  return (
    <div>
      <h1>Demo рендеринга</h1>
      <p>Текущее время: {data.datetime}</p>
    </div>
  );
}