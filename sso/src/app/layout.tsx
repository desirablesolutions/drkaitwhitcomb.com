import "@libs/globals.css";
import { Thasadith } from "next/font/google";

const inter = Thasadith({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dr. Kait Whitcomb, LLC | Facade",
  description: "Dr. Kait Whitcomb, LLC | Decentralized Web Manager",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " overflow-x-hidden"}>
      
        {children}
      </body>
    </html>
  );
}
