import BackButton from "@/components/BackButton";
import ShowPath from "@/components/ShowPath";

export default function BlogPage () {
  return (
    <>
      <h1>Blog</h1>
      <hr className="my-4"/>
      <BackButton />
      <ShowPath />
    </>
  )
}

/*Теперь можно в Server Actions или API роутерах использовать:

import { prisma } from "@/lib/prisma";

export async function createUser(name: string, email: string) {
  return await prisma.user.create({
    data: { name, email },
  });
}
*/