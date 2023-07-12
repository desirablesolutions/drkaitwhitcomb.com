export const Components = {
  h1: ({ children, ...props }: any) => {
    return <h1 className="text-4xl underline">{children}</h1>;
  },
  h2: ({ children, ...props }: any) => {
    return <h2 className="text-4xl break-words underline-offset-1 underline">{children}</h2>;
  },
  h3: ({ children, ...props }: any) => {
    return <h3 className="text-2xl break-words">{children}</h3>;
  },
  blockquote: ({ children, ...props }: any) => {
    return <blockquote className="text-2xl">{children}</blockquote>;
  },
  p: ({ children, ...props }: any) => {
    return <p className="text-center text-xl">{children}</p>;
  },
};
