import { motion } from "framer-motion";
import { useState } from "react";
import { twMerge } from 'tailwind-merge'


export type MasonryItemProps = {
  children: React.ReactNode;
  key?: number | string,
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

  const sx = `${
    modal.open ? twMerge(modal.className, "z-10 p-4 h-auto duration-500 ease-in-out delay-100 cursor-pointer backdrop-blur-sm rounded-small hover:shadow-lg shadow-black"): "z-10 w-auto duration-1000 ease-in-out delay-100 shadow-sm cursor-pointer backdrop-blur-sm rounded-small  hover:shadow-lg shadow-black"
  }`;

  return (
    <motion.div onClick={handleClick} className={sx}>
      {children}
    </motion.div>
  );
}
