export default function Container({ children }: any) {
    return (
        <div data-dial-init="" className="fixed z-50 right-6 bottom-28 group">
     {children}
        </div>
    )
}