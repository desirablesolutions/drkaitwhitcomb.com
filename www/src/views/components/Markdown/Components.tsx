export const Components = {
    h1: ({ children, ...props}: any) => {
        return (
          <h1 className="text-4xl ">{children}</h1>
        )
      },
      h2: ({ children, ...props}: any) => {
        return (
          <h2 className="text-4xl break-words">{children}</h2>
        )
      },
      h3: ({ children, ...props}: any) => {
        return (
          <h3 className="text-8xl break-words">{children}</h3>
        )
      },
      p: ({  children, ...props}: any) => {
        return (
          <p className="text-center">{children}</p>
        )
      }
}