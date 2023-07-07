import { motion } from "framer-motion";


export type MasonryItemProps = {
  children: React.ReactNode
}

export default function Item({ children }: MasonryItemProps) {
  return (
    <motion.div className="z-10 w-auto duration-1000 ease-in-out delay-100 shadow-sm cursor-pointer backdrop-blur-sm rounded-small hover:-translate-y-2 hover:shadow-lg shadow-black">
      {children}
    </motion.div>
  );
}
