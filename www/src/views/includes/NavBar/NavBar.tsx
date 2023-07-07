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
        className="flex items-center content-center justify-center mt-2 text-center border-r border-black group"
        href={url ?? ""}
      >
        <span className="relative pr-10 mr-0 text-black duration-500 group-hover:-transpate-y-2 hover:text-shadow shadow-black whitespace-nowrap hover:text-white">{title ?? "Home"}</span>
      </a>
    );
  };

  return (
    <header className="fixed top-0 left-0 flex flex-col items-center justify-center w-full h-48 backdrop-blur-md">
      <main className="flex justify-center w-full border-b border-black">
        <div>
         <a href="/">
         <img
         className="object-contain h-24 pb-4"
            src="/logo.png"
            alt="logo"
          />
         </a>
        </div>
      </main>
      <div className="flex justify-center w-full gap-8 mt-4 overflow-x-auto border-black border-opacity-100 no-scrollbar border-seperate border-1">
        {defaultProps.links.map((i) => (
          <Link key={i} {...i} />
        ))}
      </div>
    </header>
  );
}
