import Console from "./Console";
import Container from "./Container";
import Footer from "./Footer";
import type { SideMenuProps } from "@typings/index";



export function defaultProps(): SideMenuProps {
  return {
    console: {
      favicon: {
        image: {
          src: "https://static.wixstatic.com/media/254c65_f4b64d6d825546f186dc0a4358ffa178~mv2.png/v1/fill/w_346,h_154,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Kait%20Whitcomb%20logo-04.png",
          
        },
        url: "/"
      },
      subMenu: {
        title: "Activity",
        links: [
          {
           label: "v12.0.0",
            url: "#",
          },
              {
           label: "Storage",
            url: "#",
          },
              {
           label: "Usage",
            url: "#",
          }
        ]
      },
      menu: {
   
        links: [
          {
           label: "Dashboard",
            url: "/spaces",
          },
          {
            label: "Websites",
             url: "/spaces/websites",
           },
           {
            label: "Themeing",
             url: "/spaces/themes",
           },
           {
            label: "Domains",
             url: "/spaces/domains",
           },
           {
            label: "Profiles",
             url: "/spaces/profiles",
           },
           {
            label: "Help",
             url: "https://desirable.solutions/help",
           }
        ]
      }
    },
    footer: {
      actions: [
        {
          label: "Coming Soon",
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
