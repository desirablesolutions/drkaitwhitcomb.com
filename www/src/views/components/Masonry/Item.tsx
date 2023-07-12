import { motion } from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export type MasonryItemProps = {
  children: React.ReactNode;
  key?: number | string;
  order?: number;
  type?: "image" | "text";
};


export default function Item({ children }: MasonryItemProps) {
  const [modal, setModal] = useState({ className: "", open: true });
  const handleClick = () => {
    setModal({
      className: "",
      open: true,
    });
  };

  const sx = `${twMerge(
    "z-10 h-auto w-auto flex flex-shrink-0 justify-center items-center duration-500 ease-in-out delay-100 cursor-pointer backdrop-blur-sm rounded-sm hover:shadow-lg shadow-black"
  )}`;

  return (
    <motion.div onClick={handleClick} className={sx}>
      {children}
    </motion.div>
  );
}
