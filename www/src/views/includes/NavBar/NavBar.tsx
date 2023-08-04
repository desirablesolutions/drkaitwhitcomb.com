export type NavBarProps = {
  links?: any;
};

export const defaultProps = {
  links: [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About Me",
      url: "/about",
    },
    {
      title: "Services",
      url: "/services",
    },
    {
      title: "Contact",
      url: "/contact",
    },
 
  ],
};
export default function NavBar(props: any) {

  
  const Link = ({ title, url }: any) => {
    return (
      <a
        className="flex items-center content-center justify-center -center border-r border-black group"
        href={url ?? ""}
      >
        <span className="relative pr-10 mr-0 text-black duration-500 group-hover:-transpate-y-2 hover:text-shadow shadow-black whitespace-nowrap hover:text-white">
          {title ?? "Home"}
        </span>
      </a>
    );
  };

  return (
    <header className="sticky top-0 left-0 z-40 flex flex-col items-center justify-center w-full h-48 backdrop-blur-lg">
      <main className="flex justify-center w-full border-b border-black">
        <div>
          <a href="/">
            <img
              className="object-contain h-36 mt-2 pb-2"
              src="https://static.wixstatic.com/media/254c65_f4b64d6d825546f186dc0a4358ffa178~mv2.png/v1/fill/w_346,h_154,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Kait%20Whitcomb%20logo-04.png"
              alt="logo"
            />
          </a>
        </div>
      </main>
      <div className="flex mb-2 justify-center h-full overflow-hidden w-full gap-8 mt-2 overflow-x-hidden border-black border-opacity-100 no-scrollbar border-seperate border-1">
        {defaultProps.links.map((i) => (
          <Link key={i} {...i} />
        ))}
      </div>
    </header>
  );
}
