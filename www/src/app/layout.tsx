
import "@libs/globals.css";

import NavBar from "@includes/NavBar";
import type { Metadata } from "next";
import Footer from "@includes/Footer";
import { Thasadith } from "next/font/google";

export async function generateMetadata(): Promise<Metadata> {
  return  {
    title: "Dr. Kait Whitcomb | Licensed Psychologist",
    icons: {
      icon: "/icon-192x192.png",
    },
    themeColor: "#C3CFBD",
    description: "Licensed therapist",
  };
}

const web_font = Thasadith({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <body className={`${web_font.className}`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
