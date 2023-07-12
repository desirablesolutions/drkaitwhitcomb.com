import { useState } from "react";
import { twMerge } from "tailwind-merge";

export type MasonryItemProps = {
  children: React.ReactNode;
  key?: number | string;
  sx?: string;
  order?: number;
  type?: "image" | "text";
};


export default function Item({ children, sx }: MasonryItemProps) {
  const [modal, setModal] = useState({ className: "", open: true });
  const handleClick = () => {
    setModal({
      className: "",
      open: true,
    });
  };

  const styles = (override: string) => `${twMerge(override,
    "z-10 h-auto w-auto flex  flex-shrink-0 justify-center items-center duration-500 ease-in-out delay-100 cursor-pointer backdrop-blur-sm rounded-sm hover:shadow-lg shadow-black"
  )}`;

  return (
    <div onClick={handleClick} className={styles(sx ?? "")}>
      {children}
    </div>
  );
}
