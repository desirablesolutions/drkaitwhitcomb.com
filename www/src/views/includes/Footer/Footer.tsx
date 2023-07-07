export type FooterProps = {
  copyright?: string;
};

const defaultProps = {
  copyright: "© 2022 Kait Whitcomb",
  links: [
    {
      title: "Home",
      url: "/",
    }
  ]
}

export default function Footer({ copyright }: FooterProps) {
  const Copyright = () => {
    return (
      <span className="m-2 text-sm text-black sm:text-center">
        {copyright ?? "© 2022 Kait Whitcomb"}
      </span>
    );
  };
  const Links = () => {
    const Link = () => {
      return (
        <li>
          <a href="#" className="mr-4 text-black hover:underline md:mr-6">
            About
          </a>
        </li>
      );
    };
    return (
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <Link />
      </ul>
    );
  };

  return (
    <footer className="w-full p-6 border-t border-black backdrop-blur-md relative-20 md:flex md:items-center md:justify-between md:p-6 dark:border-gray-600">
      <Copyright />
      <Copyright />
      <Links />
    </footer>
  );
}
