import { Thasadith } from "next/font/google";

const web_font = Thasadith({
  weight: "400",
  subsets: ["latin"],
});

export default function Container({ children, className }: any) {
  return (
    <html lang="en">
      <body className={`${web_font.className} ${className ?? ""}`}>{children}</body>
    </html>
  );
}
