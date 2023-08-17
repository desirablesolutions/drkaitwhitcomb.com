export default function NavBarLink({ link }: { link: any}) {

    let { title, url } = link
    
    return (
        
        <a
        className="flex items-center content-center justify-center mt-2 text-center group"
        href={url ?? ""}
      >
        <span className="relative text-black duration-1000 group-hover:-translate-y-1 hover:text-shadow shadow-black whitespace-nowrap hover:text-green-200">
          {title ?? "Home"}
        </span>
      </a>
    )
    }