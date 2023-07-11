import { motion } from "framer-motion"


const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  show: {
    transition: {
      staggerChildren: 0.9,
      delayChildren: 1.3,
    },
  },
  exit: { opacity: 0 },
};

const animationsSx = {
  variants,
  initial: "hidden",
  animate: "enter",
  exit: "exit",
  transition: {
    type: "easeInOut",
    duration: 1.1,
    staggerChildren: 0.67,
    staggerDirection: 1,
  },
};

export default function Reanimator(props: any) {

  let { children } = props

  return (
    <motion.div {...animationsSx}>
      {children}
    </motion.div>
  )
}