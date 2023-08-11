import Console from "./Console";
import Container from "./Container";
import Footer from "./Footer";
import type { SideMenuProps } from "@typings/index";



export function defaultProps(): SideMenuProps {
  return {
    console: {
      favicon: {
        image: {
          src: "",
          
        },
        url: "/"
      },
      subMenu: {
        title: "Panels",
        links: [
          {
           label: "Dashboard",
            url: "#",
          }
        ]
      },
      menu: {
   
        links: [
          {
           label: "Dashboard",
            url: "#",
          },
          {
            label: "Websites",
             url: "#",
           },
           {
            label: "Themeing",
             url: "#",
           },
           {
            label: "Domains",
             url: "#",
           },
           {
            label: "Help",
             url: "#",
           }
        ]
      }
    },
    footer: {
      actions: [
        {
          label: "Profile",
          url: "#",
        }
      ]
    }
  }
}

export default function SideMenu({ sideMenu }: { sideMenu?: SideMenuProps }) {

  return (
    <Container>
      <Console console={defaultProps().console} />
      <Footer footer={defaultProps().footer} />
    </Container>
  );
}
