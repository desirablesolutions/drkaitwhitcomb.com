export type FooterProps = {
  copyright?: string;
  tag?: string,
};

const defaultProps = {
  copyright: "© 2022 Kait Whitcomb",
  tag: "Made w/ ❤️ by Desirable Solutions",
  links: [
    {
      name: "Home",
      url: "/",
    }, {
      name: "Home",
      url: "/",
    },
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Home",
      url: "/",
    }
  ]
}

export default function Footer({ copyright, tag }: FooterProps) {
  const Copyright = () => {
    return (
      <span className="m-2 text-black text-md sm:text-center">
        {copyright ?? "© 2022 Kait Whitcomb"}
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
    const Link = (key: any, name: string) => {
      return (
        <li>
          <a href="#" className="mr-4 text-black hover:underline md:mr-6">
            {name}
          </a>
        </li>
      );
    };
    return (
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
       {
        defaultProps.links.map((link) => (
          <Link name={link.name} key={Date.now()}/>
        ))}
      </ul>
    );
  };

  return (
    <footer className="w-full p-6 border-t border-black backdrop-blur-md relative-20 md:flex md:items-center md:justify-between md:p-6 dark:border-gray-600">
      <Tag />
      <Copyright />
 
    </footer>
  );
}
