import Masonry from "@components/Masonry";

import { usePage } from "@hooks/usePage";
import { definePage } from "blakprint";

export default async function Home() {
  
  const { data } = await usePage("home");

  const { masonry } = data;

  return (
    <main className="flex flex-col items-center -mt-24 justify-between min-h-screen p-2">
      <Masonry masonry={masonry} />
    </main>
  );
}


