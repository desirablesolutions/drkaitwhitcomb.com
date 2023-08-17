import { Manrope } from "next/font/google";

const web_font = Manrope({
  weight: "200",
  subsets: ["latin"],
});


export default async function Container({ children, className  }: any) {
 

  return (
    <html lang="en">
      <body className={`${web_font.className}  ${className ?? ""}`}>{children}</body>
    </html>
  );
}
