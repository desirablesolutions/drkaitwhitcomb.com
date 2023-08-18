export default function SideBarContainer({ children } :any) {
    return (
        <div className={`sticky  bg-opacity-30 top-0 left-0 w-full col-span-1 navbar-menu z-40`}>
        <nav className="sticky top-0 bottom-0 left-0 flex-col hidden w-full h-screen px-4 py-8 overflow-auto bg-transparent bg-opacity-50 col-span- lg:flex backdrop-blur-sm max-w-xxs">
          {children}
        </nav>
      </div>
    
    )
}