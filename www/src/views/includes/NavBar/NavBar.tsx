export type NavBarProps = {
  links?: any;
};

export const defaultProps = {
  links: [
    {
      title: "Home",
      url: "/"
    },
    {
      title: "About Me",
      url: "/about"
    },
    {
      title: "Services",
      url: "/services"
      
    },
    {
      title: "Contact",
      url: "/contact"
    },
    {
      title: "Resources",
      url: "/resources"
    },
  ],
};
export default function NavBar() {
  const Link = ({ title , url}: any) => {
    return (
      <a
        className="flex items-center content-center justify-center mt-2 text-center border-r border-black"
        href={url ?? ""}
      >
        <span className="relative pr-10 text-black ">{title ?? "Home"}</span>
      </a>
    );
  };

  return (
    <header className="relative flex flex-col items-center justify-center w-full h-64 backdrop-blur-sm">
      <main className="flex justify-center w-full border-b border-black">
        <div>
          <img
            src="https://static.wixstatic.com/media/254c65_f4b64d6d825546f186dc0a4358ffa178~mv2.png/v1/fill/w_346,h_154,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Kait%20Whitcomb%20logo-04.png"
            alt="logo"
          />
        </div>
      </main>
      <div className="flex justify-center w-full gap-8 mt-4 border-black border-opacity-100 border-seperate border-1">
        {defaultProps.links.map((i) => (
          <Link key={i} {...i} />
        ))}
      </div>
    </header>
  );
}
