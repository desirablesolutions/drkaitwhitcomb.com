import { default as FormData } from "./FormData";

export function Header({ title, subTitle }: any) {
  return (
    <div className="mb-10 text-center">
      <h2 className="mb-2 text-2xl font-semibold text-black">{title}</h2>
      <p className="font-medium text-black">{subTitle}</p>
    </div>
  );
}

export function Container({ children }: any) {
  return <div className="relative max-w-md mx-auto">{children}</div>;
}

export default function Form({ form }: any) {
  return (
    <Container>
      <Header />
      <FormData />
    </Container>
  );
}
