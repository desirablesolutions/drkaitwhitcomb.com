import Branding from "./Branding";
import Container from "./Container";
import Form from "./Form";
import type { AuthenticatorProps } from "@typings/index";





export function defaultProps(): AuthenticatorProps {
  return {
    branding: {
      title: "Dr. Kait Whitcomb, LLC",
      subTitle: "Welcome to Dr. Kait Whitcomb, LLC | Decentralized Web Manager",
      image: {
        src: "https://static.wixstatic.com/media/254c65_f4b64d6d825546f186dc0a4358ffa178~mv2.png/v1/fill/w_346,h_154,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Kait%20Whitcomb%20logo-04.png",
      },
      url: "/",
    },
    form: {},

  
  };
}

export default function Authenticator(props: AuthenticatorProps) {
  const { form, branding } = defaultProps();

  return (
    <Container>
      <Branding branding={branding} />
      <Form form={form} />
    </Container>
  );
}
