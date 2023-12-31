import Masonry from "@components/Masonry";
import { usePage } from "@hooks/usePage";

export default async function About() {

  const { data } = await usePage("about");

  const { masonry } = data;

  return (
    <main className="flex flex-col items-center m-0 p-0 justify-between min-h-screen ">
      <Masonry masonry={masonry} />
    </main>
  );
}
