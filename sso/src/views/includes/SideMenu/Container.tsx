export default function Container({ children , isVisible} :any) {
    return (
        <div className={`block w-1/5 navbar-menu relative bg-white z-50`}>
        <nav className="fixed top-0 bottom-0 left-0 flex flex-col w-1/5 h-full px-4 py-8 overflow-auto bg-transparent backdrop-blur-sm00 max-w-xxs">
          {children}
        </nav>
      </div>
    
    )
}