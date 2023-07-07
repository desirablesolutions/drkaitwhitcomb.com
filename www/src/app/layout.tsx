"use client"
import "@libs/globals.css";

import NavBar from "@includes/NavBar";
import Footer from "@includes/Footer";
import { Thasadith } from "next/font/google";
import { motion } from "framer-motion";


export const metadata = {
  title: "Dr. Kait Whitcomb | Psychologist",
  description: "Licensed therapist",
};

const inter = Thasadith({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const variants = {
    hidden: { opacity: 0,},
    enter: { opacity: 1,},
    exit: { opacity: 0 },
  };
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}

        <Footer />
      </body>
    </html>
  );
}
