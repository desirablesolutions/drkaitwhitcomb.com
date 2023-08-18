import Branding from "./Branding";
import Container from "./Container";
import Form from "./Form";
import type { AuthenticatorProps } from "@typings/index";
import { defaultProps } from "./defaults"


export default function Authenticator({ authenticator }: {authenticator: AuthenticatorProps}) {
  

  return (
    <Container>
      <Branding branding={authenticator?.branding ?? defaultProps().branding} />
      <Form form={authenticator?.form ?? defaultProps().form} />
    </Container>
  );
}
