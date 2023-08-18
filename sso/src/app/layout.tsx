import "@libs/globals.css";
import { Manrope } from "next/font/google";

const inter = Manrope({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dr. Kait Whitcomb, LLC | Facade",
  description: "Dr. Kait Whitcomb, LLC | Decentralized Web Manager",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={inter.className + " bg-black overflow-x-hidden"}>
        {children}
      </body>
    </html>
  );
}
