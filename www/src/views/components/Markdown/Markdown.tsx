/* eslint-disable react/no-children-prop */

import ReactMarkdown from "react-markdown";

export default function Markdown(props: any) {

  let { children }  = props

  return <ReactMarkdown components={{
    h1: ({ node, children, ...props}) => {
      return (
        <h1 className="w-1/4 text-4xl break-words">{children}</h1>
      )
    },
    p: ({ node, children, ...props}) => {
      return (
        <p className="text-center">{children}</p>
      )
    }
  }} children={children} />;
}
