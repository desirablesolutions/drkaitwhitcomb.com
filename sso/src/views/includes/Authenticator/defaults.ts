
import type { AuthenticatorProps } from "@/models/typings";
export function defaultProps(): any {
    return {
      branding: {
        title: "Dr. Kait Whitcomb, LLC",
        subTitle: "Welcome to Dr. Kait Whitcomb, LLC | Decentralized Web Manager",
        image: {
          src: "https://static.widxstatic.com/media/254c65_f4b64d6d825546f186dc0a4358ffa178~mv2.png/v1/fill/w_346,h_154,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Kait%20Whitcomb%20logo-04.png",
        },
        url: "/",
      },
      form: {
        authentication: {
          title: "Authentication",
        },
        footer: {
          title: "Footer",
        },
      },
  
    
    };
  }