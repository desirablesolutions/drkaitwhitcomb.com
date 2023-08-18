export default function Link({ children, ...props}: any) {
    return (
        <a {...props}>
            {children}
        </a>
    )
}