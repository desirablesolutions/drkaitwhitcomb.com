import Masonry from "@components/Masonry";

import { usePage } from "@hooks/usePage";
import { definePage } from "blakprint";
import Confetti from 'react-confetti'

export default async function Home() {
  
  const { data } = await usePage("home");

  const { masonry } = data;

  return (
    <main className="flex flex-col items-center -mt-24 justify-between min-h-screen p-2">
      <Confetti width={600} height={800}/>
      <Masonry masonry={masonry} />
    </main>
  );
}


