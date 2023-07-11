import Masonry from "@components/Masonry";

import { usePage } from "@hooks/usePage";

export default async function About() {
  const { data } = await usePage("about");

  const { masonry } = data;

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <Masonry {...masonry} />
    </main>
  );
}
