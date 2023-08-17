import type { NavBarProps } from "@typings/index";
import { default as Favicon } from "./Favicon";
import { default as Links } from "./Links";

import Container from "./Container";

export function defaultProps() {
  return {
    favicon: {
      image: {
        alt: "logo",
        src: "https://static.wixstatic.com/media/254c65_f4b64d6d825546f186dc0a4358ffa178~mv2.png/v1/fill/w_346,h_154,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Kait%20Whitcomb%20logo-04.png",
      },
    },
    links: [
      {
        title: "Home",
        url: "/",
      },
      {
        title: "About Me",
        url: "/about",
      },
      {
        title: "Services",
        url: "/services",
      },
      {
        title: "Contact",
        url: "/contact",
      },
    ],
  };
}

export default function NavBar(props: NavBarProps) {

  const { links, favicon } = props;

  return (
    <Container sx={null}>
      <Favicon favicon={defaultProps().favicon}/>
      <Links links={defaultProps().links}/>
    </Container>
  );
}
