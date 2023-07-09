"use client";
import { motion } from "framer-motion";

import Item from "./Item";

export type MasonryProps = {};

export default function Masonry(props: any) {
  const ContainerSx = (props: {
    gap: number;
    cols: number;
    isGroup: boolean;
  }) => {
    let { gap, cols, isGroup } = props;
    return `gap-${gap} grid grid-cols-2 ${cols} ${
      isGroup ? "group" : ""
    } w-full place-items-center`;
  };

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

  const images = {
    overlooking:
      "https://static.wixstatic.com/media/148286_e7602f25ebe7452b90aaca2b0248d6c2~mv2.jpg/v1/fill/w_819,h_543,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Bookshelf_JPG.jpg",
    flowers:
      "https://static.wixstatic.com/media/148286_d98ff02dbdfa4e14ac4214f5fd27d6d4~mv2.jpg/v1/crop/x_0,y_73,w_3456,h_3303/fill/w_404,h_383,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Flowers_JPG.jpg",
    office:
      "https://static.wixstatic.com/media/148286_8336bd7412da42ebb81f5976c90293ac~mv2.jpg/v1/crop/x_102,y_194,w_2960,h_2873/fill/w_394,h_383,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Chairs_JPG.jpg",
    profile:
      "https://static.wixstatic.com/media/148286_5cfb157ebb4f4d5aa061d89c84dce4eb~mv2.jpg/v1/crop/x_0,y_171,w_3135,h_4039/fill/w_406,h_525,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_0002%20(1).jpg",
    landscape:
      "https://static.wixstatic.com/media/148286_0e5e6307be454421b61d5d9c485ab0dd~mv2.jpg/v1/crop/x_437,y_0,w_4733,h_4000/fill/w_806,h_680,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/oc-gonzalez-UIAyfvo9Bbw-unsplash.jpg",
  };

  return (
    <motion.main
      variants={variants} // Pass the variant object into Framer Motion
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      transition={{ type: "easeInOut", duration: 1.1, staggerChildren: 0.67, staggerDirection: 1 }} // Set the transition to linear
      className=""
    >
      <div className="grid gap-2 lg:grid-cols-2 sm:grid-cols-1 mt-28">
        <div className="grid gap-4">
          <Item>
            <h2 className="p-6 text-4xl text-center">
              Individual therapy from a licensed psychologist I work with adult
              clients to help them find the healing they’re looking for. I’m
              glad you’re here! Learn more
            </h2>
          </Item>
          <Item>
            <img className="w-full h-full " src={images.profile} alt="" />
          </Item>
          <Item>
          <h2 className="p-6 text-4xl text-center">
          Office and Telehealth Visits Available
            </h2>
           </Item>
          <Item>
            <img
              className="object-cover w-full h-full"
              src={images.overlooking}
              alt=""
            />
          </Item>
        </div>
        <div className="grid gap-4">
          <Item>
            <img className="w-full h-full" src={images.flowers} alt="" />
          </Item>
          <Item>
            <img className="w-full h-full" src={images.profile} alt="" />
          </Item>
          <Item>
            <h2 className="p-6 text-4xl text-center">
              Dr. Kait Whitcomb, LLC <br/>
              therapy@drkaitwhitcomb.com<br/>
              Phone: (407) 493-2238 <br/>
              Fax: (407) 542-1804
            </h2>
          </Item>
        </div>
      </div>
    </motion.main>
  );
}
