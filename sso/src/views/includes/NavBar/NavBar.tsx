import {default as Container} from "./Container";
import { default as Search } from "./Search"
import { default as Actions } from "./Actions"


export default function NavBar(props: any) {
  return (
    <Container>
      <Search/>
    <Actions/>
    </Container>
  );
}
