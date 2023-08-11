import Masonry from "@components/Masonry";

import { usePage } from "@hooks/usePage";


export default async function Services() {

  const { data} = await usePage("services");

  const { masonry } = data;

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-0 m-0">
      <Masonry masonry={masonry} />
    </main>
  );
}
