import type { LinkProps, SideMenuProps } from "@/models/typings";
import MenuSVG from "@/views/components/MenuSVG/MenuSVG";
import { ReactNode } from "react";



export function Favicon({
  favicon,
}: {
  favicon: SideMenuProps["console"]["favicon"];
}) {
  const { image, url } = favicon;
  return (
    <a className="inline-block mb-12" href={url}>
      <img className="object-cover h-20" src={image?.src} alt="" />
    </a>
  );
}
export function Container({ children }: any) {
  return <div className="mb-6">{children}</div>;
}

export function Menu({ menu }: { menu: SideMenuProps["console"]["menu"] }) {
  const { links } = menu;

  function Links({ links }: { links: LinkProps[] }) {
    return (
      <>
        {links.map((link) => {
          return (
            <li key={Date.now()} className="mb-4">
              <a
                className="flex items-center p-2 text-black bg-green-200 rounded-md cursor-pointer bg-opacity-70 hover:shadow-lg shadow-white"
                href={link.url}
              >

                <span className="ml-4 text-sm font-semibold">{link.label}</span>
              </a>
            </li>
          );
        })}
      </>
    );
  }

  function Container({ children }: any) {
    return <ul className="mb-8">{children}</ul>;
  }
  return (
    <Container>
      <Links links={links} />
    </Container>
  );
}

export function SubMenu({
  subMenu,
}: {
  subMenu: SideMenuProps["console"]["subMenu"];
}) {
  const { title, links } = subMenu;
  function Container({ children }: any) {
    return <div>{children}</div>;
  }

  function Title({
    title,
  }: {
    title: SideMenuProps["console"]["subMenu"]["title"];
  }) {
    return (
      <span className="block mb-8 text-md font-semibold text-white uppercase">
        {title}
      </span>
    );
  }

  function Links({ links }: { links: any[] }) {
    function Link({ link }: { link: any }) {
      const { label } = link;
      return (
        <li>
          <a
            className="flex items-center p-2 text-gray-300 hover:bg-gray-800 rounded-xl"
            href="#"
          >
            <div className="w-2 h-2 mr-2 bg-green-300 rounded-full" />
            <span className="text-sm font-semibold">{label}</span>
          </a>
        </li>
      );
    }

    function Container({ children }: any) {
      return <ul>{children}</ul>;
    }

    return (
      <Container>
        {links.map((link: any) => {
          return <Link key={Date.now()} link={link} />;
        })}
      </Container>
    );
  }

  return (
    <Container>
      <Title title={title} />
      <Links links={links} />
    </Container>
  );
}

export default function Console({
  console,
}: {
  console: SideMenuProps["console"];
}) {
  const { favicon, menu, subMenu } = console;

  return (
    <Container>
      <Favicon favicon={favicon} />
      <Menu menu={menu} />
      <SubMenu subMenu={subMenu} />
    </Container>
  );
}
