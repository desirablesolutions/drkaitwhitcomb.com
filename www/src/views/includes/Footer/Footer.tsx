
import { default as Container } from "../Footer/Container";
import {default as Agency} from "./Tag"


import type  {FooterProps} from "@typings/index"


export function defaultProps(): FooterProps {
  return {
    copyright: [
      "Made w/ ❤️ by Desirable Solutions",
      "(407) 493-2238",
      "take a deep breath",
      "therapy@drkaitwhitcomb.com",
    ],
    tag: "©️ Dr. Kait Whitcomb LLC, 2023",
    links: [
      {
        label: "Home",
        url: "/",
      },
      {
        label: "About",
        url: "/about",
      },
      {
        label: "Services",
        url: "/services",
      },
      {
        label: "Contact",
        url: "/contact",
      },
    ],
  };
}

export default function Footer({ copyright, tag }: FooterProps) {

   const defaultProps = {
    copyright: [
      "Made w/ ❤️ by Desirable Solutions",
      "(407) 493-2238",
      "take a deep breath",
      "therapy@drkaitwhitcomb.com",
    ],
    tag: "©️ Dr. Kait Whitcomb LLC, 2023",
    links: [
      {
        name: "Home",
        url: "/",
      },
      {
        name: "About",
        url: "/about",
      },
      {
        name: "Services",
        url: "/services",
      },
      {
        name: "Contact",
        url: "/contact",
      },
    ],
  };
  const Copyright = () => {
    return (
      <span className="m-2 text-black text-md sm:text-center">
      (407) 493-2238  
      </span>
    );
  };

  const Contact = () => {
    return (
      <span className="m-2 text-black text-md sm:text-center">
     therapy@drkaitwhitcomb.com
      </span>
    );
  };

  const Tag = () => {
    return (
      <span className="m-2 text-sm text-black sm:text-center">
        {tag ?? defaultProps.tag}
      </span>
    );
  };
  const Links = () => {
    const Link = ({key, name}: any) => {
      return (
        <li>
          <a href="#" className="mr-4 text-black hover:underline md:mr-6">
            {`${name}`}
          </a>
        </li>
      );
    };
    return (
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        {defaultProps.links.map((link) => (
          <Link {...link} key={Date.now()} />
        ))}
      </ul>
    );
  };

  return (
   <Container>
     <Tag />
      <Copyright />
      <Contact />
      <Links />
      <Agency/>
   </Container>
  );
}
