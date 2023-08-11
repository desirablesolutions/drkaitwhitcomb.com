
import "@libs/globals.css";

import NavBar from "@includes/NavBar";
import type { Metadata } from "next";
import Footer from "@includes/Footer";
import { Thasadith } from "next/font/google";

export async function generateMetadata(): Promise<Metadata> {
  return  {
    title: "Dr. Kait Whitcomb, LLC | Licensed Psychologist",
    icons: {
      icon: "https://static.wixstatic.com/media/254c65_f4b64d6d825546f186dc0a4358ffa178~mv2.png/v1/fill/w_346,h_154,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Kait%20Whitcomb%20logo-04.png",
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
