import { default as Container } from "../Footer/Container";
import { default as AgencyTag } from "./AgencyTag";
import { default as Links } from "./Links";
import { default as EmailAddress } from "./EmailAddress"
import { default as PhoneNumber } from "./PhoneNumber"
import { default as Copyright } from "./Copyright"

import type { FooterProps } from "@typings/index";

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


  return (
    <Container>
      <Copyright/>
      <AgencyTag />
      <PhoneNumber />
      <EmailAddress />
      <Links links={[{ label: "Home", url: "/" }]} />
    </Container>
  );
}
