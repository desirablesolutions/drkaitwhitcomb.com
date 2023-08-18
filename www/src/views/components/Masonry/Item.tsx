import { classSet } from "@/controllers/utils";
import { MasonryItemProps } from "@/models/typings";
import { columnSpanSx } from "@styles/index";
import { motion } from "framer-motion"

export function defaultSx() {
  return `z-10 h-auto w-auto flex bg-[#C8C8C8] flex-grow 
  justify-center items-center cursor-pointer 
  flex flex-col justify-center duration-500 ease-in-out hover:opacity-80 rounded-sm shadow-black`;
}

export default function Item({
  item,
  children,
  sx
}: { item: MasonryItemProps } & { children: any } & { sx?: string }) {
  

  const { span } = item

  return (
    <motion.div     initial={{ opacity: 0, scale: 0.99 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.67 }}
      className={classSet([defaultSx(), sx, columnSpanSx(span)])}
    >
      {children}
    </motion.div>
  );
}
