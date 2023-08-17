export function Container({ children }: any ) {
  return (
    <div className="relative max-w-sm mx-auto mb-16 lg:mx-0 lg:mb-0">
      {children}
    </div>
  );
}

export function Title({ title }: any) {
  return <h3 className="mb-3 text-3xl font-bold text-white">{title}</h3>;
}

export function SubTitle({ subTitle }: any) {
  return <p className="mb-6 font-medium text-blue-200">{subTitle}</p>;
}

export function CallToAction({ cta }: any) {
  return (
    <a
      className="inline-block w-full px-6 py-3 font-semibold leading-6 text-center transition duration-200 bg-gray-500 rounded-lg sm:w-auto md:px-18 text-blue-50 hover:bg-gray-600"
      href="#"
    >
      Get Started
    </a>
  );
}

export default function BannerHeader() {
  return (
    <Container>
      <Title />
      <SubTitle />
      <CallToAction />
    </Container>
  );
}
