import "@libs/globals.css";

import { usePage as getPage } from "@hooks/usePage";
import Container from "@includes/Container";
import Footer from "@includes/Footer";
import NavBar from "@includes/NavBar";
import Navigator from "@includes/Navigator";
import type { Metadata } from "next";


export async function generateMetadata(): Promise<Metadata> {
  const { metaData } = await getPage("home");

  return metaData;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container className="font-sans bg-white">
      <NavBar />
      {children}
      <Footer />
      <Navigator />
    </Container>
  );
}
