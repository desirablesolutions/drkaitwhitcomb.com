export default function Container({ children }: any) {
    return (
        <div data-dial-init="" className="fixed lg:hidden right-6 bottom-28 group z-50">
     {children}
        </div>
    )
}