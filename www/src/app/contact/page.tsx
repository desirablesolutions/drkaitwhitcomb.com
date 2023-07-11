import Masonry from "@components/Masonry";

import { usePage } from "@hooks/usePage";


export default async function Contact() {

  const { data} = await usePage("contact");

  const { masonry } = data;

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <Masonry {...masonry} />
    </main>
  );
}
