import Masonry from "@components/Masonry";
import { usePage } from "@hooks/usePage";
import { definePage } from "blakprint";

export default async function Home() {

  const { data } = await usePage("home");

  const Component = definePage(() => {

    const { masonry } = data;

    return (
      <>
        <main className="flex flex-col items-center justify-between min-h-screen p-2 -mt-24">
          <Masonry masonry={masonry} />
        </main>
      </>
    );
  });

  return Component.value();
}
