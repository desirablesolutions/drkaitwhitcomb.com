import { default as Actions } from "./Actions";
import { default as Cover } from "./Cover";
import { default as Container } from "./Container";

export default function Navigator({ navigator }: any) {
  return (
    <Container>
      <Actions />
      <Cover />
    </Container>
  );
}
