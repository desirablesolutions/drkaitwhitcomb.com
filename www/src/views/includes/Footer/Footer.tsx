

export type FooterProps = {
  copyright?: string[];
  tag?: string;
};

export default function Footer({ copyright, tag }: FooterProps) {

   const defaultProps = {
    copyright: [
      "Made w/ ❤️ by Desirable Solutions",
      "(407) 493-2238",
      "take a deep breath",
      "therapy@drkaitwhitcomb.com",
    ],
    tag: "©️ Dr. Kait Whitcomb LLC, 2023",
    links: [
      {
        name: "Home",
        url: "/",
      },
      {
        name: "Info",
        url: "/",
      },
      {
        name: "About",
        url: "/",
      },
      {
        name: "Contact",
        url: "/",
      },
    ],
  };
  const Copyright = () => {
    return (
      <span className="m-2 text-black text-md sm:text-center">
      Made w/ ❤️ by Desirable Solutions
      </span>
    );
  };

  const Tag = () => {
    return (
      <span className="m-2 text-sm text-black sm:text-center">
        {tag ?? defaultProps.tag}
      </span>
    );
  };
  const Links = () => {
    const Link = ({key, name}: any) => {
      return (
        <li>
          <a href="#" className="mr-4 text-black hover:underline md:mr-6">
            {`${name}`}
          </a>
        </li>
      );
    };
    return (
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        {defaultProps.links.map((link) => (
          <Link {...link} key={Date.now()} />
        ))}
      </ul>
    );
  };

  return (
    <footer className="w-full p-6 border-t border-black backdrop-blur-md relative-20 md:flex md:items-center md:justify-between md:p-6 dark:border-gray-600">
      <Tag />
      <Copyright />
      <Copyright />
      <Links />
    </footer>
  );
}
