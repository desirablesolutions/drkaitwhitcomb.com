export const Components = {
    h1: ({ children, ...props}: any) => {
        return (
          <h1 className="text-8xl break-words">{children}</h1>
        )
      },
      h2: ({ children, ...props}: any) => {
        return (
          <h1 className="text-8xl break-words">{children}</h1>
        )
      },
      h3: ({ children, ...props}: any) => {
        return (
          <h1 className="text-8xl break-words">{children}</h1>
        )
      },
      p: ({  children, ...props}: any) => {
        return (
          <p className="text-center">{children}</p>
        )
      }
}