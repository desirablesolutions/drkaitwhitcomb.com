import type { LinkProps, SideMenuProps } from "@/models/typings";
import MenuSVG from "@/views/components/MenuSVG/MenuSVG";
import { ReactNode } from "react";


const Svgs = {
  menu: MenuSVG,
  theme: () =>     <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M215-117q-33.835 0-66.917-11.5Q115-140 90-166q35-12 50-35t15-62q0-43.75 30.676-74.375Q216.353-368 260.176-368 304-368 334.5-337.375T365-263q0 64-43.5 105T215-117Zm0-60q35 0 62.5-25t27.5-61q0-20-12.5-32.5T260-308q-20 0-32.5 12.5T215-263q0 39-8.5 57.5T175-183q6 1 20 3.5t20 2.5Zm230-177-90-95 376-376q14-14 31-14.5t32 14.5l29 29q15 15 14.5 32.5T823-732L445-354Zm-185 91Z"/></svg>)

}
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
                href="#"
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
