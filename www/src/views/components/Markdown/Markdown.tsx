
import ReactMarkdown from "react-markdown";
import { Components } from "@components/Markdown/Components";


export default function Markdown(props: any) {
  const { children } = props;

  return <ReactMarkdown components={Components}>{children}</ReactMarkdown>;
}
