export type FooterProps = {
  copyright?: string;
};

export default function Footer({ copyright }: FooterProps) {
  const Copyright = () => {
    return (
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        {copyright ?? "© 2022 Kait Whitcomb"}
      </span>
    );
  };
  const Links = () => {
    const Link = () => {
      return (
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
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
    <footer className="w-full p-4 border-t border-gray-200 shadow relative-20 md:flex md:items-center md:justify-between md:p-6 dark:border-gray-600">
      <Copyright />
      <Links />
    </footer>
  );
}
