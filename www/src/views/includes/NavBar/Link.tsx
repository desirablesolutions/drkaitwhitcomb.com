export default function NavBarLink(props: any) {

    let { title, url } = props
    
    return (
        
        <a
        className="flex items-center content-center justify-center mt-2 text-center border-r border-black group"
        href={url ?? ""}
      >
        <span className="relative pr-10 mr-0 text-black duration-500 group-hover:-transpate-y-2 hover:text-shadow shadow-black whitespace-nowrap hover:text-white">
          {title ?? "Home"}
        </span>
      </a>
    )
    }